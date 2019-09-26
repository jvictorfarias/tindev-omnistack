const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

 
/*
routes.get('/', (req, res) => {
    return res.json({ message: `Hello ${req.query.name}`});
     
})
*/

/*
routes.post('/devs', (req, res) => {
    return res.json(req.body);
})
*/
module.exports = routes;