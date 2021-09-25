const path = require('path');

const express = require('express');

const adminData = require('./admin');


const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop',{
    prods: products,
    pageTitle: 'Shop Page',
    path: '/',
  });
});

router.post('/remove-product', (req, res, next) =>{
  // console.log("remove");
  const removeIndex = adminData.products.findIndex(prods => prods.productId === req.body.productId);
  console.log(req.body.productId);
  // const id = req.body.productId;
  // console.log(id);
  adminData.products.splice(removeIndex, 1);
  
  // const productIndex = adminData.products.indexOf(adminData.products.productId === id);
  // console.log(productIndex);

  // const index = adminData.products.indexOf(adminData.products.id);
  // console.log(index);
  
  // if(index > -1){
  //   adminData.products.splice(index, 1);
  // }

  res.redirect('/');
});


module.exports = router;
