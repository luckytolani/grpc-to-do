import path from "path";
import caller from "grpc-caller";

const PROTO_PATH = "./src/proto/task.proto";

export const client = caller("0.0.0.0:50052", PROTO_PATH, "GetTaskService");
