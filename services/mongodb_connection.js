const mongoose = require('mongoose');

mongoose.Promise = Promise;
const uri = 'mongodb://localhost:27017/node_practice';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
const db = mongoose.connection;

db.on('open', () => {
  console.log('db connected');
});
db.on('error', (err) => {
  console.log(err);
});

module.exports = db;
