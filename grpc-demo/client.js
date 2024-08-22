const grpc = require("@grpc/grpc-js");
const protoLOader = require("@grpc/proto-loader");
const packageDef = protoLOader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

const text = process.argv[2];

const client = new todoPackage.Todo(
  "localhost:40000",
  grpc.credentials.createInsecure()
);
client.createTodo(
  {
    id: -1,
    text,
  },
  (err, res) => {
    console.log("received from server", res);
  }
);

// client.readTodos({ id: -3, text: "from client" }, (err, res) => {
//   console.log("todos from server", res);
// });

const call = client.readTodoStream();
call.on("data", (item) => {
  console.log("item from server", item);
});
call.on("end", (e) => {
  console.log("server done");
});
