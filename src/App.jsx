import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Specialists from './pages/Specialists.jsx';
import SchedulePage from './pages/SchedulePage.jsx';

function App() {
  // Estado para saber se o usuário está logado
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <>
      {/* Passamos o estado e a função de logout para a Navbar */}
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Passamos a função de login para a página de Login */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/specialists" element={<Specialists />} />
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>
    </>
  );
}

export default App;