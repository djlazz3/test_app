var express = require('express');
var router = express.Router();
var fs = require('fs')

router.get('/:id', async (req, res, next) => {
  image = new Buffer(fs.readFileSync(`${__dirname}/../uploads/${req.params.id}`)).toString('base64');

  res.send({ image })
})

module.exports = router;
