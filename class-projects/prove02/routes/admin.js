const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];
let id = 0;

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('add-product',{
    pageTitle: "Add Product",
    path:'/admin/add-product',
  });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({
    productId: id,
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    rating: req.body.rating,
  });
  id += 1;
  console.log(products);
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
