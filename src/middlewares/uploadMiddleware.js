const multer = require('multer');

// Configurar Multer
const uploadMiddleware = multer({
    storage: multer.diskStorage({}),
    limits: {
        fileSize: 1024 * 1024 * 5, // 5 MB
    },
    fileFilter: (req, file, cb) => {
        if (!file.mimetype.startsWith('image/')) {
            return cb(new Error('File type not supported'));
        }
        cb(null, true);
    },
});

module.exports = uploadMiddleware;
