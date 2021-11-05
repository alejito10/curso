const express = require('express')

const udemyController = require('../controllers/udemyController');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({uploadDir:'./uploads'});
const router = express.Router();

router.get('/home', udemyController.home);
router.post('/test', udemyController.test);
router.post('/save',udemyController.saveProject);
router.get('/data/:id',udemyController.getProject);
router.get('/datas', udemyController.getProjects);
router.put('/data/:id',udemyController.updateProject);
router.delete('/data/:id',udemyController.deleteProject);
router.post('/upload-img/:id', multipartMiddleware, udemyController.uploadImage);


module.exports = router;