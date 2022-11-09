import { environment } from "../../config.js";
import mongoose from "mongoose";

mongoose.connect(
  environment.MONGO,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) console.log("Database connected Succesfully");
    else console.log("Error In Mongo Connection", err);
  }
);
