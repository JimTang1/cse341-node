const fetch = require('node-fetch');
const jsonUrl = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';


module.exports = class Product{
    constructor(){};

    static fetchAll(cb){
        fetch(jsonUrl)
        .then(res => res.json())
        .then(products =>{
            cb(products);
        })
        .catch(err => console.log(err));
    };

    static search(q, cb){
            fetch(jsonUrl)
            .then(res => res.json())
            .then(products =>{
                const newProducts = products.filter(p =>{
                    let found = false;
                    p.tags.forEach(t => {
                        if(t.toLowerCase().includes(q)){
                            found = true;     
                        }
                    });

                    if(found){
                        return true;
                    }else if(p.name.toLowerCase().includes(q)){
                        return true;
                    }else if(p.description.toLowerCase().includes(q)){
                        return true;
                    }else{
                        return false;
                    }
                });   
                cb(newProducts);
            })
            .catch(err => console.log(err));
    }
};

