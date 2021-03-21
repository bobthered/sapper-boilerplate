import mongoose from 'mongoose';
// import { getIO } from '../index';

export default async ({ collection, data }, cb) => {
  console.log('socket.io - create - start');

  // const io = getIO();

  const Model = mongoose.model(collection);

  try {
    const doc = new Model(data);
    await doc.save();
    cb(doc);
    // io.emit('create', { model: create.model, doc });
  } catch (error) {
    console.log(error);
    cb({ error: error });
  }

  console.log('socket.io - create - done');
};
