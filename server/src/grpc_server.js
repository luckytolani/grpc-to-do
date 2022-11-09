import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import { environment } from "../config.js";
import * as taskService from "./services/grpcTask.service.js";
import "./db/connection.js";

const PROTO_FILE = "./src/proto/task.proto";

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const pkgDefs = protoLoader.loadSync(PROTO_FILE, options);

const dogProto = grpc.loadPackageDefinition(pkgDefs);

let main = function () {
  const server = new grpc.Server();

  server.addService(dogProto.GetTaskService.service, {
    GetTask: taskService.grpcGetTask,
    CreateTask: taskService.grpcCreateTask,
    UpdateTask: taskService.grpcUpdateTask,
    DeleteTask: taskService.grpcDeleteTask,
  });

  server.bindAsync(
    environment.GRPC_ADD,
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      console.log(
        `server is running in port ${port}`,
        `\nEnvironment ==  ${environment.NODE_ENV}`
      );
      server.start();
    }
  );
};

main();
