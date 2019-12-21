const express = require('express');
const router = express.Router();

const movie_controller = require('./movie.controller');

router.post('/test', movie_controller.movie_test);

router.post('/create', movie_controller.movie_create);

router.get('/:id', movie_controller.movie_details);

router.put('/:id/update', movie_controller.movie_update);

router.delete('/:id/delete', movie_controller.movie_delete);

module.exports = router;
