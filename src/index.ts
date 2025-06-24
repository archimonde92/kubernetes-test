// src/index.ts
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
const COLOR = process.env.COLOR || 'WHITE';
const randomInstanceId = Math.random().toString(36).substring(2, 15);
const instanceId = randomInstanceId
const startTime = new Date();

const getLiveTimeSeconds = () => {
  return Math.floor((new Date().getTime() - startTime.getTime()) / 1000);
}

app.get('/', (_req, res) => {
  res.send(`
    <html>
      <head>
        <title>Color Server</title>
        <style>
          body {
            background-color: ${COLOR};
            font-family: sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          h1, p {
            color: #333;
          }
        </style>
      </head>
      <body>
        <h1>Color: ${COLOR}</h1>
        <p>Instance ID: ${instanceId}</p>
        <p>Version: ${"1.3.0"}</p>
        <p>Uptime: ${getLiveTimeSeconds()} seconds</p>
      </body>
    </html>
  `);
});

app.get('/kill', (_req, res) => {
  if(getLiveTimeSeconds() > 10) {
    res.send('Killing server...');
    process.exit(0);
  } else {
    res.send('Server is not ready to be killed');
  }
});

app.get('/ready', (_req, res) => {
  if(getLiveTimeSeconds() > 10) {
    res.status(200).send('Server is ready');
  } else {
    res.status(503).send('Server is not ready');
  }
});

app.get('/health', (_req, res) => {
  if(getLiveTimeSeconds() > 10 && getLiveTimeSeconds() < 120) {
    res.status(200).send('Server is healthy');
  } else {
    res.status(503).send('Server is not healthy');
  }
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});