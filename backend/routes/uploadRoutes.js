import express from 'express';
import upload from '../middleware/uploader.js';
import {
  uploadSingle,
  uploadMultiple,
} from '../controllers/uploadController.js';

const router = express.Router();

// Upload a single file
router.post('/single', upload.single('file'), uploadSingle);

// Upload multiple files
router.post('/multiple', upload.array('files', 5), uploadMultiple);

export default router;
