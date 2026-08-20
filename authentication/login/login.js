

const { generateToken } = require("../middleware/auth");

const bcrypt = require("bcrypt");
const { users } = require("../register/register");

async function loginUser(email, password) {
  const user = users.find(
    (account) => account.email === email
  );

  if (!user) {
    return {
      success: false,
      message: "Invalid login details"
    };
  }

  const passwordMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!passwordMatch) {
    return {
      success: false,
      message: "Invalid login details"
    };
  }

  return {
  success: true,
  message: "Login successful",
  token: generateToken(user),
  user
};
}

module.exports = {
  loginUser
};