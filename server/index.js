require('dotenv').config(); // must be first
const express = require('express');
const { getEntries, saveOrUpdate } = require('./db/index.js');

// Main
const app = express();

app.use(express.static('client/dist'));
app.use(express.json());

// Controllers:
app.get('/lr', (req, res) => {
  getEntries()
    .then((data) => {
      res.send(data);
    })
});

app.post('/lr', (req, res) => {
  saveOrUpdate(req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

// Connect
app.listen(process.env.PORT, (error) => {
  if (error) {
    console.error(error);
    throw error;
  } else {
    console.clear();
    console.info(`Server listening at http://${process.env.SITE_URL}:${process.env.PORT}`);
  }
});
