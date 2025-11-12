// src/navigation/AppRouter.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importe suas páginas
import Home from '../pages/HomePage';
import Login from '../pages/LoginPage';
import Register from '../pages/RegisterPage';
// ... adicionar as outras páginas conforme elas forem criadas ...

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
      {/* Rotas futuras: */}
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      {/* <Route path="/agendamento" element={<Agendamento />} /> */}

      <Route path="*" element={<h1>Página não encontrada</h1>} /> 
    </Routes>
  );
};

export default AppRoutes;