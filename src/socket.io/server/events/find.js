import mongoose from 'mongoose';

export default async ({ collection, where = {} }, cb) => {
  console.log('socket.io - find - start');

  const Model = mongoose.model(collection);

  const docs = await Model.find(where).lean();
  cb(docs);

  console.log('socket.io - find - done');
};
