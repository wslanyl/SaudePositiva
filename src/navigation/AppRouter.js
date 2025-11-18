// src/navigation/AppRouter.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/HomePage';
import Login from '../pages/LoginPage';
import Register from '../pages/RegisterPage';
import Agendar from '../pages/AgendarPage';
import Confirmacao from '../pages/ConfirmacaoPage';
import Especialistas from '../pages/EspecialistasPage';
import FormularioAgendamento from '../pages/FormularioAgendamentoPage';
import SelecionarData from '../pages/SelecionarDataPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
      {/* Rotas futuras: */}
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      <Route path="/agendar" element={<Agendar />} />
      <Route path="/confirmacao" element={<Confirmacao />} />
      <Route path="/especialistas" element={<Especialistas />} />
      <Route path="/formulario-agendamento" element={<FormularioAgendamento />} />
      <Route path="/selecionar-data" element={<SelecionarData />} />
      <Route path="*" element={<h1>Página não encontrada</h1>} /> 
    </Routes>
  );
};

export default AppRouter;