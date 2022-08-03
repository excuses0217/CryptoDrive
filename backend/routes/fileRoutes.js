const express = require('express');
const fileController = require('../controllers/fileController');
const router = express.Router();


router.post('/upload', fileController.getToken,fileController.uploadFiles);
router.get('/getall', fileController.getAll);


module.exports = router;