import * as dotenv from "dotenv";
import path from "path";

const __dirname = path.dirname(`${process.env.NODE_ENV || "dev"}.env`);

dotenv.config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV || "dev"}.env`),
});

const environment = {
  NODE_ENV: process.env.NODE_ENV || "dev",
  PORT: process.env.PORT || 5000,
  MONGO: process.env.MONGO,
};

export { environment };
