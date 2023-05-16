import multer from "multer";
import path from 'node:path'

//*  Storage *//
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './public/uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, new Date().getTime() + file.originalname);
    }
});

//* File filter *//
const fileFilter = (req: any, file: any, cb: any) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }    
}

//* Upload *//
export const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

export const ImageDirectory = ''