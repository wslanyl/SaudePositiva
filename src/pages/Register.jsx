import React from 'react';
import { Box, Paper, Typography, TextField, Button } from '@mui/material';
// IMPORTAÇÕES CORRETAS
import logo from '../assets/saudepositivalogo.png';
import bgImage from '../assets/fotomedico.jpg';

export default function Register() {
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: `linear-gradient(rgba(0,150,136,0.7),rgba(0,150,136,0.7)), url(${bgImage}) center/cover`, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <Paper elevation={3} sx={{ p: 4, width: 350, textAlign: 'center' }}>
        {/* Logo corrigido */}
        <img src={logo} alt="Saúde Positiva" style={{ height: 48, marginBottom: 8 }} />
        
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Cadastro</Typography>
        <Typography sx={{ mb: 2, fontSize: 14 }}>Digite suas informações para continuar</Typography>
        <TextField label="Email" fullWidth sx={{ mb: 2 }} />
        <TextField label="Nome" fullWidth sx={{ mb: 2 }} />
        <TextField label="CPF" fullWidth sx={{ mb: 2 }} />
        <TextField label="Telefone" fullWidth sx={{ mb: 2 }} />
        <TextField label="Senha" type="password" fullWidth sx={{ mb: 2 }} />
        <TextField label="Confirmar Senha" type="password" fullWidth sx={{ mb: 2 }} />
        <Button variant="contained" fullWidth sx={{ background: '#008080', mb: 2 }}>Cadastrar</Button>
      </Paper>
    </Box>
  );
}