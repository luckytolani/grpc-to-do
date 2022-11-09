import caller from "grpc-caller";
import { environment } from "../../config.js";

const PROTO_PATH = "./src/proto/task.proto";

export const client = caller(
  environment.GRPC_ADD,
  PROTO_PATH,
  "GetTaskService"
);
