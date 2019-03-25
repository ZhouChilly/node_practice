const mongoose = require('mongoose');

mongoose.Promise = Promise;
const { Schema } = mongoose;
const uri = 'mongodb://localhost:27017/node_practice';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
const db = mongoose.connection;
const UserSchema = new Schema({
  name: {
    type: String, required: true, unique: true, index: 1,
  },
  age: { type: Number, max: 188, min: [0, 'you are not born'] },
});
const UserModel = mongoose.model('user', UserSchema);

(async (params) => {
  const filter = {};
  if (params.name) filter.name = params.name;
  const flow = UserModel.find(filter);
  if (params.projection) flow.select(params.projection);
  if (params.sort) flow.sort(params.sort);
  const user = await flow.exec();
  return user;
})({
  name: 'zhou',
  projection: { name: true },
  sort: '-age',
})
  .then((res) => { console.log(res); })
  .catch((err) => { console.log(err); });

db.on('open', () => {
  console.log('db connected');
});
db.on('error', (err) => {
  console.log(err);
});
