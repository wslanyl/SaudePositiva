// src/pages/LoginPage.js
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Card,
  Container,
  Typography,
  Link,
  useTheme 
} from '@mui/material';
import CustomInput from '../components/Input'; 
import CustomButton from '../components/Button'; 
// Importe o logo que está na raiz
import logoImage from '../../saudepositivalogo.png'; 

const LoginPage = () => {
  const theme = useTheme();

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de autenticação e navegação virá aqui
    console.log('Tentativa de Login');
  };

  return (
    // Box para simular o fundo azul escuro
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#204E64', // Cor de fundo do protótipo
        p: 2,
      }}
    >
      {/* O Card representa a caixa branca do formulário */}
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
          {/* Logo do Saúde Positiva */}
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

        {/* --- CAMPOS DE FORMULÁRIO --- */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <CustomInput 
            label="Email" 
            type="email" 
            fullWidth 
            required 
            // Adicionar aqui o state value e onChange
          />
          <CustomInput 
            label="Senha" 
            type="password" 
            fullWidth 
            required 
            // Adicionar aqui o state value e onChange
          />
        </Box>

        {/* Link Esqueceu a senha */}
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

        {/* Botão de Login (usando Button.js) */}
        <CustomButton 
          type="submit" 
          fullWidth 
          variant="contained"
          sx={{ py: 1.5 }}
        >
          Entrar
        </CustomButton>
        
        {/* Link para o Cadastro */}
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