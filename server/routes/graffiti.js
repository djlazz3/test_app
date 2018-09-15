var express = require('express');
var router = express.Router();
var fs = require('fs')

var multer = require('multer')
var upload = multer({ dest: 'uploads/' })

/* GET home page. */
router.post('/new', upload.array('images', 2), async (req, res, next) => {
  var graffiti = req.db.use('graffiti')
  console.log(req.files[0].filename)
  var newObject = await graffiti.insert({
    lat: req.body.lat,
    lon: req.body.lon,
    header: req.body.header,
    drawing: req.files[0].filename,
    image: req.files[1].filename
  }, null)

  res.send(newObject)
});

router.get('/show', async (req, res, next) => {
  graffiti = req.db.use('graffiti')
  newObject = await graffiti.get(req.query.id)

// new Buffer(fs.readFileSync(`${__dirname}/../uploads/${newObject.drawing}`)).toString('base64');
// new Buffer(fs.readFileSync(`${__dirname}/../uploads/${newObject.image}`)).toString('base64');
  newObject.drawing = `/image/${newObject.drawing}`
  newObject.image = `/image/${newObject.image}`

  res.send(newObject)
});

router.get('/index', async (req, res, next) => {
  res.send(await graffiti.list())
})

module.exports = router;
