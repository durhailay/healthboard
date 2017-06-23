import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from './lib/app';

const app = express();

app.use(express.static('dist'));
app.use('/dist', express.static('dist'));

app.get('*', (req, res) => {
  let output = renderToString(<App />);
  let htmlToSend = `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
      <title>Team Crayon - Witness the fitness</title>
      <link href="https://fonts.googleapis.com/css?family=Lato:100,400" rel="stylesheet">
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <div id="app">${output}</div>
      <script src="/vendors.bundle.js"></script>
      <script src="/bundle.js"></script>
    </body>
  </html>
  `;
  res.send(htmlToSend);
});

app.listen(4000, () => console.log('Server running on http://localhost:4000'));
