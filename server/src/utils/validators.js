exports.validateRegister = (body) => {
  const { name, email, password, role } = body;
  if (!name || !email || !password || !role) {
    return 'Name, email, password, and role are required';
  }
  return null;
};

exports.validateLogin = (body) => {
  const { email, password } = body;
  if (!email || !password) return 'Email and password are required';
  return null;
};
