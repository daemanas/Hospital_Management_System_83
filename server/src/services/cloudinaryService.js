const cloudinary = require('../config/cloudinary');

exports.uploadImage = async (filePath) => {
  const result = await cloudinary.uploader.upload(filePath, {
    folder: 'akash_hms',
  });
  return result;
};

exports.deleteImage = async (publicId) => {
  return cloudinary.uploader.destroy(publicId);
};
