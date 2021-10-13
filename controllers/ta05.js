exports.getIndex = (req, res, next) => {
    if(req.session.counter == undefined){
        req.session.counter = 0;
    }

    if(req.session.style == undefined){
        req.session.style = 'style1.css';
    }

    res.render('pages/ta05', {
        title: 'Team Activity 05',
        path: '/ta05', // For pug, EJS
        activeTA05: true, // For HBS
        contentCSS: true, // For HBS
        style: req.session.style,
        counter: req.session.counter
    });
};

exports.postChangeStyle =(req, res, next) =>{
    req.session.style = req.body.style;
    res.redirect('/ta05');
}

exports.postCounter =(req, res, next) =>{
    req.session.counter += Number(req.body.constant);
    res.redirect('/ta05');
    
}

exports.postReset =(req, res, next) =>{
    if(req.body.reset == 'true'){
        req.session.destroy(() =>{
            res.redirect('/ta05');
        });
    }else{
        res.redirect('/ta05');
    }
}