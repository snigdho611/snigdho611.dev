import mongoose from "mongoose";

const connect = async () => {
  console.log(mongoose.connections[0].readyState);
  if (mongoose.connections[0].readyState) {
    console.log("Already connected to database");
    return;
  }
  if (process.env.MONGO_URL) {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connecting to database");
  }
};
export default connect;
