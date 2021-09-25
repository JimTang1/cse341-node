//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();
const path = require('path');

const users = ['user1','user2','user3'];

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'This is Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    users: users,
    addError:false,
    removeError:false
  });

});

router.post('/addUser',(req, res, next) =>{
  let addError = false;

  if(users.includes(req.body.addUser)){
    addError = true;
  }else{
    users.push(req.body.addUser);
  }

  res.render('pages/ta02', {
    title: 'This is Activity 02',
    path: '/ta02', // For pug, EJS
    users: users,
    addError:addError,
    removeError:false
  });

});

router.post('/removeUser',(req, res, next) =>{
  // const dUser = req.body.removeUser;
  const index = users.indexOf(req.body.removeUser);
  console.log(index);
  
  let removeError = false;

  if(index > -1){
    users.splice(index, 1);
  }else{
    removeError = true;
  }

  res.render('pages/ta02', {
    title: 'This is Activity 02',
    path: '/ta02', // For pug, EJS
    users: users,
    addError: false,
    removeError:removeError
  });

});


module.exports = router;
