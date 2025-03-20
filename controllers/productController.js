const Product = require('../models/Product');

const addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error adding product' });
    }
};

const getProducts = async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
};

const getProduct = async (req, res) => {
    const product = await Product.findByPk(req.params.pid);
    product ? res.json(product) : res.status(404).json({ message: 'Product not found' });
};

const updateProduct = async (req, res) => {
    await Product.update(req.body, { where: { pid: req.params.pid } });
    res.json({ message: 'Product updated' });
};

const deleteProduct = async (req, res) => {
    await Product.destroy({ where: { pid: req.params.pid } });
    res.json({ message: 'Product deleted' });
};

module.exports = { addProduct, getProducts, getProduct, updateProduct, deleteProduct };
