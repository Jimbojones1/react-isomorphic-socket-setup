import React from 'react';
import { hydrate }from 'react-dom';
import App from './components/app'

if(typeof window !== 'undefined'){
  hydrate(<App />, document.getElementById('app'));
}

