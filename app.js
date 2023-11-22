const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const usersRoutes = require("./routes/users");

dotenv.config();

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/usersCollection", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {})
  .catch((error) => {
    console.log(error);
  });

app.use("/user", usersRoutes);

const port = 8800;
app.listen(port, () => console.log(`Server running on port ${port}`));
