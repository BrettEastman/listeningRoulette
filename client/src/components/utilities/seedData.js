// function to seed data to MongoDB database
const exampleData = require('./exampleData.js');
const { saveMessage } = require('./db/index.js');

(function seedData(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentObj = {name: arr[i].name, body: arr[i].body};
    saveMessage(currentObj);
  }
})(exampleData);
