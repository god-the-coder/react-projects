import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import God from './god';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <God/>

  </React.StrictMode>
);

