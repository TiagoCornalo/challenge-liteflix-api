const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    image_path: {
        type: String,
        required: true,
    },
    release_date: {
        type: String,
        default: 'Unknown',
    },
    overview: {
        type: String,
        default: 'No overview available',
    },
    vote_average: {
        type: Number,
        default: 0,
    },
    vote_count: {
        type: Number,
        default: 0,
    },
    popularity: {
        type: Number,
        default: 0,
    },
    original_language: {
        type: String,
        default: 'en',
    },
    original_title: {
        type: String,
        required: true,
    },
    video: {
        type: Boolean,
        default: false,
    },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
