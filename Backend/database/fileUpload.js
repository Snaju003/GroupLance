const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

require("dotenv").config();

// const storage = new GridFsStorage({
//     url: process.env.MONGODB_URI,
//     options: { useUnifiedTopology: true, useNewUrlParser: true },
//     file: (req, file) => {
//         const match = ['image/png', 'image/jpg', 'image/jpeg'];

//         if (match.indexOf(file.mimetype) === -1) {
//             return `${Date.now()}-file-${file.originalname}`;
//         }

//         return {
//             bucketName: 'post-photos',
//             filename: `${Date.now()}-file-${file.originalname}`
//         }
//     }
// });

const storage = multer.memoryStorage();
const upload = multer({ storage });

module.exports = upload;