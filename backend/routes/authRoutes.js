const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

    if (!email || !password) {
        return res.json({
              success: false,
                    message: "Email and password required"
                   });
                          }
               res.json({
                                success:true,
          message: "Login connected",
                                        token: "sample-token",
                                            user: {
                                                  email                                            }
                                                        })                                      });

                              module.exports = router;