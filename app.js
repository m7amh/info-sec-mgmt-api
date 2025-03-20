const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
const app = express();
app.use(express.json());

// مسارات API
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// بدء السيرفر
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    await sequelize.sync(); // تأكد من تزامن قاعدة البيانات
    console.log(`Server running on port ${PORT}`);
});
