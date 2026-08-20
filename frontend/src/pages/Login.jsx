import { useState } from "react";
import { loginUser } from "../api/auth";

function Login() {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

      async function handleLogin() {
          const result = await loginUser(email, password);

              if (result.success) {
                    localStorage.setItem("token", result.token);
                          alert("Login successful");
                              } else {
                                    alert(result.message);
                                        }
                                          }

                                            return (
                                                <div>
                                                      <h1>Global Trust Fund Login</h1>

                                                            <input
                                                                    placeholder="Email"
                                                                            onChange={(e) => setEmail(e.target.value)}
                                                                                  />

                                                                                        <input
                                                                                                type="password"
                                                                                                        placeholder="Password"
                                                                                                                onChange={(e) => setPassword(e.target.value)}
                                                                                                                      />

                                                                                                                            <button onClick={handleLogin}>
                                                                                                                                    Sign In
                                                                                                                                          </button>
                                                                                                                                              </div>
                                                                                                                                                );
                                                                                                                                                }

                                                                                                                                                export default Login;