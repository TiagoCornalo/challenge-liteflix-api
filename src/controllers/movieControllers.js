const cloudinary = require('cloudinary').v2;
const { Movie } = require('../config/db');

// Configurar Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Crear una nueva película
exports.createMovie = async (req, res) => {
    const { name } = req.body;
    const { path } = req.file;

    try {
        // Subir imagen a Cloudinary
        console.log(req.file, name)
        const result = await cloudinary.uploader.upload(path, { folder: 'movies' });

        const releaseDate = new Date().toISOString().split('T')[0];
        // Crear nueva película
        const newMovie = new Movie({
            original_title: name,
            image_path: result.secure_url,
            release_date: releaseDate,
        });
        const movie = await newMovie.save();

        res.json(movie);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}
