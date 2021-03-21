import mongoose from 'mongoose';

export default async ({ collection, where = {} }, cb) => {
  console.log('socket.io - findOne - start');

  const Model = mongoose.model(collection);

  const doc = await Model.findOne(where).lean();
  cb(doc);

  console.log('socket.io - findOne - done');
};
