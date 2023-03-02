const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lr')

const db = mongoose.connection;

const lrSchema = new mongoose.Schema({
  name: String,
  album: String
});

const messageSchema = new mongoose.Schema({
  name: String,
  body: String
});

const Entry = mongoose.model('Entry', lrSchema);
const Message = mongoose.model('Message', messageSchema);

// MODELS:
exports.getEntries = (data) => {
  return Entry.find({}).exec();
}

exports.saveOrUpdate = (data) => {
  let query = { name: data.name }
  return Entry.findOneAndUpdate(query, { name: data.name, album: data.album }, {upsert: true})
};

exports.getMessages = (data) => {
  return Message.find({}).exec();
}

exports.saveMessage = (data) => {
  console.log('data from db index: ', data)
  return Message.create(data);
};
