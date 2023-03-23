const express = require('express');
const router = express.Router();
const { createMovie, getMovies } = require('../controllers/movieControllers');
const uploadMiddleware = require('../middlewares/uploadMiddleware');

// Crear una nueva película
router.post('/', uploadMiddleware.single('image'), createMovie);

router.get('/', getMovies);

module.exports = router;
