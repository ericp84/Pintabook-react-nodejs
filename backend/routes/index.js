var express = require('express');
const pinsModel = require('../models/pins');
var router = express.Router();
var uniqid = require ('uniqid');

var cloudinary = require('cloudinary').v2;
cloudinary.config({ 
  cloud_name: 'ericcloud', 
  api_key: '778441454131618', 
  api_secret: '2RLSoyrSOUzcxhLF-mCvNHWc2_s' 
});

router.post("/upload", async function (req, res) {
  let pictureName = './tmp' + uniqid() + '.jpg';
  let resultCopy = await req.files.avatar.mv(pictureName);

  if (!resultCopy) {
    var resultCloudinary = await cloudinary.uploader.upload(pictureName);
    var options = {
      json: {
        apiKey: '2RLSoyrSOUzcxhLF-mCvNHWc2_s',
        image: resultCloudinary.url,
      },

    }
  }
})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

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

router.get('/recuppin', async function (req, res) {
  let recuppin = await pinsModel.find()
  res.json({recuppin})
})

module.exports = router;
