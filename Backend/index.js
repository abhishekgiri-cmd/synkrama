/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connection } = require("./config/db");
const Bookrouter = require("./routes/book.routes");
const Authrouter = require("./routes/auth.routes");
const authMiddleware = require("./middleware/auth.middleware");
dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8080;
app.use(cors());
app.get("/", (req, res) => {
  res.send("welcome");
  console.log("welcome to Libary");
});

app.use("/auth", Authrouter);
app.use("/task", Bookrouter);
app.use(authMiddleware)
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Database is Connected");
  } catch (e) {
    console.log("Database is not connected");
  }
  console.log(`App listening on port ${PORT}`);
});
