import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

let clients = {};
let actClient = '';

app.get('/chat/:name', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
  });
  clients[req.params.name] = res;

  req.on('close', () => {
    delete clients[req.params.name];
    sendMessagesToClients(`${req.params.name} has left the chat`, false);
  });

  sendMessagesToClients(`${req.params.name} has joined the chat`, false);
});

app.post('/write', (req, res) => {
  actClient = req.body.actClient;
  sendMessagesToClients(req.body.message);
  res.status(200).send('OK');
});

const sendMessagesToClients = (message, withActClient = true) => {
  for (const client in clients) {
    let data = '';
    let date = new Date();
    let timestamp = `${date.getHours()}:${date.getMinutes()}`;
    if (withActClient) data = `${timestamp} ${actClient}: ${message}\n\n`;
    else data = `${timestamp} ${message}\n\n`;

    clients[client].write(`data: ${data} \n\n`);
  }
};

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
