const mongoose = require('mongoose');
const connectDB = () => {
  mongoose.Promise = global.Promise
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true,
  useUnifiedTopology: true})
  .then(() => console.log(`Database connected!:${process.env.MONGO_URI}`))
  .catch(err => console.log(`Error:${err} & unable to connect to database: ${process.env.MONGO_URI}`));
}
module.exports = connectDB;

