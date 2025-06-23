// src/index.ts
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
const COLOR = process.env.COLOR || 'WHITE';
const randomInstanceId = Math.random().toString(36).substring(2, 15);
const instanceId = randomInstanceId

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
        <p>Version: ${"1.1.4"}</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});