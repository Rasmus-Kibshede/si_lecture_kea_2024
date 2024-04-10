import { WebSocket } from "ws";

const WebSocketClient = new WebSocket("ws://localhost:8080");

WebSocketClient.on("open", () => {
  WebSocketClient.send("Hello from the client!");

  WebSocketClient.on("message", (message) => {
    console.log(`Message from the server: ${message}`);
    WebSocketClient.close();
  });
});
