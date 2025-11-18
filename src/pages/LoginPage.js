// src/pages/LoginPage.js
import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Box, Card, Typography, Link, useTheme } from '@mui/material';
import CustomInput from '../components/Input';
import CustomButton from '../components/Button';

const logoImage = '/saudepositivalogo.png';

const LoginPage = () => {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de autenticação e navegação virá aqui
    console.log('Tentativa de Login', { email, password });
    // Se o login for bem-sucedido, redirecione:
    navigate('/agendar');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#204E64',
        p: 2,
      }}
    >
      <Card
        component="form"
        onSubmit={handleLogin}
        sx={{
          width: '100%',
          maxWidth: 400,
          p: 4,
          borderRadius: 3,
          textAlign: 'center',
        }}
      >
        <Box sx={{ mb: 3 }}>
          <img
            src={logoImage}
            alt="Saúde Positiva Logo"
            style={{ width: 'auto', height: 40 }}
          />
          <Typography variant="h5" component="h1" sx={{ mt: 1, mb: 0 }}>
            Login
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Digite suas informações para continuar
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <CustomInput
            label="Email"
            type="email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            label="Senha"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1, mb: 3 }}>
          <Link
            component={RouterLink}
            to="/recuperar-senha"
            variant="body2"
            color="primary"
          >
            Esqueceu sua senha?
          </Link>
        </Box>
        <CustomButton
          type="submit"
          fullWidth
          variant="contained"
          sx={{ py: 1.5 }}
        >
          Entrar
        </CustomButton>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Ainda não tem conta?{' '}
          <Link
            component={RouterLink}
            to="/cadastro"
            variant="body2"
            color="secondary"
          >
            Cadastre-se aqui
          </Link>
        </Typography>
      </Card>
    </Box>
  );
};

export default LoginPage;

