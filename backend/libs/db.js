// libs/db.js
import mongoose from "mongoose";

async function connectDb(app) {
  return await mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("Connected to database");
      app.listen(process.env.PORT, () => {
        console.log(`server is running at port ${process.env.PORT}`);
      });
    })
    .catch((error) => {
      console.log("Connection failed", error.message);
    });
}

export default connectDb;
