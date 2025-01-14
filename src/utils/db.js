import mongoose from 'mongoose';

import Config from '../config/config';

// Create a function that will be used to connect to the database
export const connectDB = (options = {}, url = Config.DB_URL) =>
  mongoose.connect(url, {
    ...options,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
