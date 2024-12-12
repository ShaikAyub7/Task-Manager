require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db/connect");
const path = require("path");
const router = require("./routes/rout");
const authRoutes = require("./routes/authRoutes");
// const socketFunc = require("./utils/socket");

app.use(express.json());
app.use(cors({ origin: "https://task-manager-ayub.vercel.app" }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", router);
app.use("/", authRoutes);

const port = process.env.PORT || 10000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is running on http://localhost:${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
