import React from 'react';
import { hydrate }from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app';

const initialState = window.INITIAL_STATE;
const store = createStore((state=initialState) => state);



if(typeof window !== 'undefined'){
  hydrate(
    <Provider store={store}>
      <App />,
    </Provider>,
     document.getElementById('app')
  );
};

