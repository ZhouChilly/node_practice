const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;
const SubSchema = new Schema({
  subId: { type: ObjectId, require: true, index: 1 },
  url: { type: String, required: true },
});
const SubModel = mongoose.model('sub', SubSchema);

async function insert(sub) {
  const newSub = await SubModel.create(sub);
  return newSub;
}

async function list(params) {
  const match = {};
  const flow = SubModel.find(match);
  const subs = await flow.exec();
  return subs;
}

async function findByUserId(userId) {
  const subs = await SubModel.find({ userId });
  return subs;
}

module.exports = {
  insert,
  list,
  findByUserId,
};
