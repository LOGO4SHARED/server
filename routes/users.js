/*jshint esversion:6*/

var express = require('express');
var router = express.Router();
const uploadMiddleware = require('../middleware/upload');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('halo world')
});

//nama terima dari vue nya sesusai
// router.post('/upload',uploadMiddleware.multer.single('image'),uploadMiddleware.upload,function(req,res){
//   console.log('=================>',req.imageURL)
//   let image = req.imageURL
//   res.status(200).json({
//     message:'sukses kirim',
//     data: image
//   });
// });



module.exports = router;
