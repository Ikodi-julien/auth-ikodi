require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const router = require('./routes/router');
const PORT = process.env.PORT;
const FRONT_PORT = process.env.FRONT_PORT;

const corsOptions = {
  origin: process.env.NODE_ENV === 'production' ? [/\.ikodi.eu\/?$/] : [`http://localhost:${FRONT_PORT}`],
  credentials: true
}

const app = express();
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.static('./public'));
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Started on http://localhost:${PORT}`)
})