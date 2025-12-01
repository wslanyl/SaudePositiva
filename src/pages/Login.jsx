import React, { useState } from 'react';
import { Box, Paper, Typography, TextField, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/saudepositivalogo.png';
import bgImage from '../assets/fotomedico.jpg';

// Recebe a função onLogin vinda do App.jsx
export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    if (email && password) {
      // Avisa o App.jsx que o login foi um sucesso
      if (onLogin) onLogin(); 
      
      alert(`Login realizado com sucesso! Bem-vindo(a) ${email}`);
      navigate('/');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: `linear-gradient(rgba(0,150,136,0.7),rgba(0,150,136,0.7)), url(${bgImage}) center/cover`, 
      display: 'flex', alignItems: 'center', justifyContent: 'center' 
    }}>
      <Paper elevation={3} sx={{ p: 4, width: 350, textAlign: 'center' }}>
        <img src={logo} alt="Saúde Positiva" style={{ height: 90, marginBottom: 8 }} />
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Login</Typography>
        <Typography sx={{ mb: 2, fontSize: 14 }}>Digite suas informações para continuar</Typography>
        
        <TextField label="Email" fullWidth sx={{ mb: 2 }} value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField label="Senha" type="password" fullWidth sx={{ mb: 2 }} value={password} onChange={(e) => setPassword(e.target.value)} />
        
        <Button variant="contained" fullWidth sx={{ background: '#008080', mb: 2 }} onClick={handleLoginClick}>
          Entrar
        </Button>
        
        <Typography sx={{ fontSize: 13 }}>
          Ainda não tem conta? <Link href="/register">Cadastre-se</Link>
        </Typography>
      </Paper>
    </Box>
  );
}