const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // ✅ استيراد sequelize من ملف الاتصال بقاعدة البيانات

const Product = sequelize.define('Product', {
    pid: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    pname: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    price: { type: DataTypes.DECIMAL, allowNull: false },
    stock: { type: DataTypes.INTEGER, allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

module.exports = Product;
