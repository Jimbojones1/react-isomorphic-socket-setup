import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './generated/app';

const app = express();

app.engine('handlebars', handlebars({
  defaultLayout: 'main',
  layoutsDir: path.resolve(__dirname, 'views/layouts')
}));

app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
  const initialState = {
    currentMessage: '',
    messages: []
  };

  const store = createStore((state=initialState) => state);
  const appContent = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
    );

  res.render('app', {
    app: renderToString(appContent),
    initialState: JSON.stringify(initialState)
  })
});


export default app;



