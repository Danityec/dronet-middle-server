const { Router } = require('express'); 
const { controller } = require('../controllers/endpoints.ctrl');

const remoteRouter = new Router();  

remoteRouter.get('/get', controller.getRemote);
remoteRouter.get('/send', controller.sendRemote);


module.exports = {remoteRouter};