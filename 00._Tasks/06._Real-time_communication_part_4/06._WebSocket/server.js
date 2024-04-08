import { WebSocketServer } from "ws";

const PORT = 8080;
const server = new WebSocketServer({ port: PORT });


server.on("connection", ws => {

    ws.on("message", message => {
        
    });


});





