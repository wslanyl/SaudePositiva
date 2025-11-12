// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa a API de cliente do React 18
import App from './App'; // Importa o componente App que contém o Tema e o Roteador

// O React 18 usa a nova API createRoot
const container = document.getElementById('root'); 
const root = ReactDOM.createRoot(container);

// Renderiza o componente principal (App)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);