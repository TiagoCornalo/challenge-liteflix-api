const express = require('express');
const moviesRoutes = require('./moviesRoutes');

const router = express.Router();

// Montar rutas de películas
router.use('/movies', moviesRoutes);

module.exports = router;
