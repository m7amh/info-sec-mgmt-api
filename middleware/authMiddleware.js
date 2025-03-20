const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access denied' });
    
    try {
        const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
        console.log("Decoded Token:", decoded); 
        req.user = decoded;
        next();
    } catch (err) {
        console.error("JWT Error:", err);
        res.status(400).json({ message: 'Invalid token' });
    }
    };

module.exports = authMiddleware;
