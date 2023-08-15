import multer from 'multer';
import path from 'path';
import uniqid from 'uniqid';

// Set storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'frontend/src/assets/images/uploads');
  },
  filename: (req, file, cb) => {
    const uniqueId = uniqid();
    const fileExtension = path.extname(file.originalname);
    cb(null, `${Date.now()}_${uniqueId}${fileExtension}`);
  },
});

// Initialize multer
const upload = multer({ storage });

export default upload;
