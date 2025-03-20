const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.config();

const register = async (req, res) => {
    try {
        const { name, username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, username, password: hashedPassword });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error registering user' });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log("Received login request:", { username, password });

        const user = await User.findOne({ where: { username } });
        if (!user) {
            console.log("User not found");
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        console.log("User found:", user);

        const isMatch = bcrypt.compareSync(password, user.password);

        console.log("Password match:", isMatch);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '10m' });
        res.json({ token });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: 'Error logging in' });
    }
};


module.exports = { register, login };
