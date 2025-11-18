// src/App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'; // Reseta o CSS padrão
import theme from './theme/theme'; 
import AppRouter from './navigation/AppRouter'; 

function App() {
  return (
    // 1. Aplica o tema customizado do MUI
    <ThemeProvider theme={theme}>
      {/* 2. CssBaseline é importante para resetar estilos inconsistentes do navegador */}
      <CssBaseline /> 
      {/* 3. Configura o roteamento para todas as páginas */}
      <Router>
        <AppRouter /> 
      </Router>
    </ThemeProvider>
  );
}

export default App;