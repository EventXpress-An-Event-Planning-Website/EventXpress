import asyncHandler from 'express-async-handler';
import path from 'path';

// @desc    Upload single file
// @route   POST /api/upload/single
// @access  Public
const uploadSingle = asyncHandler(async (req, res) => {
  const file = req.file;
  if (!file) {
    res.status(400);
    throw new Error('No file uploaded');
  }
  res.status(200).json({
    filename: file.filename,
    path: path.join('frontend/src/assets/images/uploads', file.filename),
  });
});

// @desc    Upload multiple files
// @route   POST /api/upload/multiple
// @access  Public
const uploadMultiple = asyncHandler(async (req, res) => {
  const files = req.files;
  if (!files || files.length === 0) {
    res.status(400);
    throw new Error('No files uploaded');
  }
  const uploadedFiles = files.map((file) => ({
    filename: file.filename,
    path: path.join('frontend/src/assets/images/uploads', file.filename),
  }));
  res.status(200).json(uploadedFiles);
});

export { uploadSingle, uploadMultiple };
