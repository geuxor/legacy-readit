require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./Router');
const db = require ('./models/index.js')

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(router);

(async function bootstrap () {
  try {
    await db.sequelize.sync();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  })
  } catch (err) {
    console.log(err)
  }
})()




