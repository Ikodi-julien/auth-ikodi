require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const PORT = process.env.PORT;

const corsOptions = {
  origin: process.env.NODE_ENV === 'production' ? [/\.ikodi.eu\/?$/] : [`http://localhost:${PORT}`],
  credentials: true
}

const app = express();
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
  console.log('GET');
  res.sendStatus(200)
});

app.listen(process.env.PORT, () => {
  console.log(`Started on http://localhost:${PORT}`)
})