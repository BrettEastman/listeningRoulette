require('dotenv').config(); // must be first
const express = require('express');

// Main
const app = express();

app.use(express.static('client/dist'));
app.use(express.json());

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
