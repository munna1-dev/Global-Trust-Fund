const bcrypt = require("bcrypt");

const users = [];

async function registerUser(name, email, password) {
  const existingUser = users.find(
    (user) => user.email === email
  );

  if (existingUser) {
    return {
      success: false,
      message: "User already exists"
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: users.length + 1,
    name,
    email,
    password: hashedPassword
  };

  users.push(newUser);

  return {
    success: true,
    message: "User registered successfully",
    user: newUser
  };
}

module.exports = {
  registerUser,
  users
};