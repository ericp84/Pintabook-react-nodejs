var express = require('express');
////// MODELS ///////
const pinsModel = require('../models/pins');
const userModel = require ('../models/users')

var router = express.Router();
/////// SECURITY ///////
// const uniqid = require ('uniqid');
const bcrypt = require("bcrypt");
const uid2 = require("uid2");
/////// CLOUDINARY ///////
var cloudinary = require('cloudinary').v2;
cloudinary.config({ 
  cloud_name: 'ericcloud', 
  api_key: '778441454131618', 
  api_secret: '2RLSoyrSOUzcxhLF-mCvNHWc2_s' 
});

// router.post("/upload", async function (req, res) {
//   let pictureName = './tmp' + uniqid() + '.jpg';
//   let resultCopy = await req.files.avatar.mv(pictureName);

//   if (!resultCopy) {
//     var resultCloudinary = await cloudinary.uploader.upload(pictureName);
//     var options = {
//       json: {
//         apiKey: '2RLSoyrSOUzcxhLF-mCvNHWc2_s',
//         image: resultCloudinary.url,
//       },

//     }
//   }
// })


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});
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
  let hash = bcrypt.hashSync(req.body.password, 10);
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
  if( req.body.email === '' || req.body.firstname === '' || req.body.lastname === '' ) {
    error.push('veuillez verifier vos informations')
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
    }
  }
  res.json({newUser, result, error})
})


/////// login ///////
router.post('/login', async function (req, res) {
  let result = false;
  let user = null;
  let error = [];
  let token = '';
/////// check server side validations /////// 
  if(req.body.email === '' && req.body.password === '') {
    error.push('champs vides')
    console.log("error///", error)
  }
/////// is everything is ok the server send request to DB ///////
  if(error.length === 0) {
    user = await userModel.findOne({email : req.body.email,})
    if(bcrypt.compareSync(req.body.password, user.password)) {
      result=true
      token = user.token
    } else {
      error.push('veuillez verifier vos identifiants')
      console.log("error connex", error)
    }
  }
  res.json({result, user, error, token})
})


module.exports = router;
