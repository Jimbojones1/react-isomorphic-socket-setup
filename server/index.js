import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './generated/app';

const app = express();

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.render('app', {
    app: renderToString(<App />)
  })
});


app.listen(3000, () =>  console.log('Server is running'));
