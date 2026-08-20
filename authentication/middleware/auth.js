const jwt = require("jsonwebtoken");

const SECRET_KEY = "GLOBAL_TRUST_FUND_SECRET";

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email
    },
    SECRET_KEY,
    {
      expiresIn: "1h"
    }
  );
}

function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
}

function authenticateUser(token) {
  const decoded = verifyToken(token);

  if (!decoded) {
    return {
      success: false,
      message: "Unauthorized access"
    };
  }

  return {
    success: true,
    user: decoded
  };
}

module.exports = {
  generateToken,
  verifyToken,
  authenticateUser
};