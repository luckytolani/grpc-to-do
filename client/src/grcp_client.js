// Load up dependencies
import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
// Path to proto file
const PROTO_FILE = "./src/proto/task.proto";

// Options needed for loading Proto file
const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

// Load Proto File
const pkgDefs = protoLoader.loadSync(PROTO_FILE, options);
// Load Definition into gRPC
const TaskService = grpc.loadPackageDefinition(pkgDefs).GetTaskService;

// Create the Client
export const client = new TaskService(
  "dns:lucky-app:3500",
  grpc.credentials.createInsecure()
);
