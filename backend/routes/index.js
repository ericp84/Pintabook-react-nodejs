var express = require('express');

////// MODELS ///////
const pinsModel = require('../models/pins');
const userModel = require ('../models/users')

var router = express.Router();

/////// SECURITY ///////
const bcrypt = require("bcrypt");
const uid2 = require("uid2");

/////////// pin creation route ///////
router.post('/pins', async function (req, res) {
  let newpin;

  let pins = new pinsModel ({
    title: req.body.title,
    description: req.body.description,
    imageName: req.body.imageName,
    URL: req.body.url
  })
  newpin = await pins.save()

  res.json({newpin})
})

/////// get pins on app opening ///////
router.get('/recuppin', async function (req, res) {
  let recuppin = await pinsModel.find()
  res.json({recuppin})
})

/////// signup ///////
router.post("/signup", async function (req, res) {

  let newUser= null;
  let result = false
  let error = []
  let token = null;
  let hash = bcrypt.hashSync(req.body.password, 10);
  let mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  /////// check if the user is already register in DB ///////
  const userdata = await userModel.findOne({
    email: req.body.email,
    firstName: req.body.firstname,
    lastName: req.body.lastname,
  })

  /////// if he's already record the error is diplayed ///////
  if (userdata != null){
    error.push('cet utilisateur est déja présent')
  }

  /////// check server side validation ///////
  if( req.body.email === '' 
    || req.body.firstname === '' 
    || req.body.lastname === ''
    || req.body.password === '' 
    ){
      error.push('veuillez verifier vos informations')
    } else if (req.body.password.length < 6) {
      error.push('votre mot de passe doit contenir au moins 6 caractères')
    }

  /////// if everything is alright, the user is send to DB ///////
  if (error.length === 0) {
    let userSignup = new userModel({
    email: req.body.email,
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    password: hash,
    token: uid2(32)
    })
    newUser = await userSignup.save()  
    if(newUser) {
    result = true
    token = newUser.token;
    }
  }
  console.log(error)
  res.json({newUser, result, error, token})
})

/////// login ///////
router.post('/login', async function (req, res) {

  let result = false;
  let user = null;
  let error = [];
  let token = null;

/////// check server side validations /////// 
  if(req.body.password === '' || req.body.email === ''
    ){
      error.push('champs vides')
    }
/////// is everything is ok the server send request to DB ///////
  if(error.length === 0) {
    user = await userModel.findOne({
      email : req.body.email
    })}
/////// then server check if the register password match with the encrypted password ///////    
    if(user) {
      const passCrypt = bcrypt.compareSync(req.body.password, user.password);
      if(passCrypt === user.password) {
        result =true;
        token = user.token;
      } else {
        result = false;
        error.push('mot de passe incorrect')
      }
    } else {
      error.push('email incorrect')
    }  
  res.json({result, user, error, token})
})


module.exports = router;
