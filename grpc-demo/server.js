const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDef = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

const server = new grpc.Server();
server.bindAsync(
  "0.0.0.0:40000",
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) console.error("error occurred in starting", err);
    console.log("started at port", port);
  }
);
server.addService(todoPackage.Todo.service, {
  createTodo: createTodo,
  readTodos: readTodos,
  readTodoStream: readTodoStream,
});

const todos = [];
function createTodo(call, callback) {
  const item = {
    id: todos.length + 1,
    text: call.request.text,
  };
  todos.push(item);
  callback(null, item);
}
function readTodos(call, callback) {
  callback(null, { items: todos });
}
function readTodoStream(call, callback) {
  todos.forEach((t) => call.write(t));
  call.end();
}
