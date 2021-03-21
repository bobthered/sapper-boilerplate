import { Schema, model, default as mongoose } from 'mongoose';
import * as Models from './models';

const connectURL = process.env.MONGO_URL.replace(
  'myFirstDatabase',
  process.env.MONGO_DB
);

export default {
  init: async () => {
    await mongoose.connect(connectURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    const collections = await Models.collection.find().lean();
    collections.forEach(collection => {
      const schema = new Schema({ any: {} });
      new model(collection.name, schema);
    });
  },
};
