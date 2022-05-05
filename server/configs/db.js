import mongoose from 'mongoose'
export default connectDB = () => {
  mongoose.Promise = global.Promise
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false } )
  mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`)
  })
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(`Error:${err} & unable to connect to database: ${process.env.MONGO_URI}`));
}
