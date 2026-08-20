const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", authRoutes);

app.get("/", (req, res) => {
  res.json({
      message: "Global Trust Fund API is running"
        });
        });

        const PORT = 5000;

        app.listen(PORT, () => {
          console.log(
              `Server running on port ${PORT}`
                );
                });