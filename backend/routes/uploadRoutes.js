import express from 'express';
import upload from '../middleware/uploader.js';
import {
  uploadSingleFile,
  uploadMultipleFiles,
} from '../controllers/uploadController.js';

const router = express.Router();

// Upload a single file
router.post('/single', upload.single('file'), uploadSingleFile);

// Upload multiple files
router.post('/multiple', upload.array('files', 5), uploadMultipleFiles);

export default router;
