import mongoose from 'mongoose';

const connectURL = process.env.MONGO_URL.replace(
  'myFirstDatabase',
  process.env.MONGO_DB
);

export default {
  init: () => {
    mongoose.connect(connectURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  },
};
