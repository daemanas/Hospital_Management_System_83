exports.sendSuccess = (res, statusCode, data) => {
  return res.status(statusCode).json({ success: true, data });
};

exports.sendError = (res, statusCode, message) => {
  return res.status(statusCode).json({ success: false, message });
};
