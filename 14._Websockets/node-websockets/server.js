import { WebSocketServer } from "ws";

const PORT = 8080;
const server = new WebSocketServer({ port: PORT });

server.on("connection", (ws) => {
  console.log("New connection:", server.clients.size);

  ws.on("message", (message) => {
    console.log(`Message from the client: ${message}`);
    server.clients.forEach((client) => {
        client.send(message);
    });
  });

  ws.on("close", () => {
    console.log("Connection disconnected:", server.clients.size);
  });
});
