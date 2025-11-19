import React from 'react';
import { Box, Paper, Typography, TextField, Button, Link } from '@mui/material';

export default function Login() {
  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(rgba(0,150,136,0.7),rgba(0,150,136,0.7)), url("/login-bg.jpg") center/cover', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper elevation={3} sx={{ p: 4, width: 350, textAlign: 'center' }}>
        <img src="/saudepositivalogo.png" alt="Saúde Positiva" style={{ height: 48, marginBottom: 8 }} />
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Login</Typography>
        <Typography sx={{ mb: 2, fontSize: 14 }}>Digite suas informações para continuar</Typography>
        <TextField label="Email" fullWidth sx={{ mb: 2 }} />
        <TextField label="Senha" type="password" fullWidth sx={{ mb: 2 }} />
        <Button variant="contained" fullWidth sx={{ background: '#008080', mb: 2 }}>Entrar</Button>
        <Typography sx={{ fontSize: 13 }}>
          Ainda não tem conta? <Link href="/register">Cadastre-se</Link>
        </Typography>
      </Paper>
    </Box>
  );
}

