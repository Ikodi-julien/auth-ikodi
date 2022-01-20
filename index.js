require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const router = require("./routes/router");
const PORT = process.env.PORT;

const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? [/\.ikodi.eu\/?$/]
      : [/^http:\/\/localhost\:\d{4}$/],
  credentials: true,
};

const app = express();
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.set("views", "./frontend/dist/views");
app.set("view engine", "ejs");
app.use(express.static("./frontend/dist"));
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Started on http://localhost:${PORT}`);
});
