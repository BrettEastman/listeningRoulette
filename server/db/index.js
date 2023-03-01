const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lr')

const db = mongoose.connection;

const lrSchema = new mongoose.Schema({
  name: String,
  album: String
});

const Entry = mongoose.model('Entry', lrSchema);

// MODELS:
exports.getEntries = (data) => {
  return Entry.find({}).exec();
}

exports.saveOrUpdate = (data) => {
  let query = { name: data.name }
  return Entry.findOneAndUpdate(query, { name: data.name, album: data.album }, {upsert: true})
};
