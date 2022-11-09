import { environment } from "../config.js";
import express from "express";
import { grpcTaskRouter } from "./routes/grpcTask.router.js";

const app = express();

const PORT = environment.PORT || 3000;

app.use(express.json());
app.use("/grpcTask", grpcTaskRouter);

app.listen(PORT, () => {
  console.log(
    `server is running in port ${PORT}`,
    `\nEnvironment ==  ${environment.NODE_ENV}`
  );
});
