import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';



const caminho = document.getElementById('root')
const root = createRoot(caminho);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
