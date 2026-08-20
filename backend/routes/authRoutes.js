const express = require("express");

const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

    res.json({
        success: true,
            message: "Login API connected",
                email
                  });
                  });

                  router.post("/register", (req, res) => {
                    const { name, email } = req.body;

                      res.json({
                          success: true,
                              message: "Registration API connected",
                                  name,
                                      email
                                        });
                                        });

                                        module.exports = router;