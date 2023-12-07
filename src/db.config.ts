import * as mongoose from "mongoose";
console.log(">>>",process.env.MONGO_URL)
mongoose
  .connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedtopology: true,
      directConnection:true
    } as mongoose.ConnectOptions
  )
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((err) => {
    console.log("not connected",err);
  });