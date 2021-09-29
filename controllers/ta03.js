const Product = require('../models/product');

exports.getAllProds = (req, res, next) =>{
    Product.fetchAll((products) =>{
        res.render('pages/ta03',{
            prods:products,
            pageTitle: 'All Products',
            path: '/ta03'
        });
    });
}


exports.getSearch = (req, res, next) =>{
    const q = req.query.q.toLowerCase();
    Product.search((q), newProducts=>{
        res.render('pages/ta03',{
            prods: newProducts,
            pageTitle: 'Search result',
            path: '/ta03'
        });
    });
}
