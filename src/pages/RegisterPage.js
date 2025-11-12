// src/pages/RegisterPage.js
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Card,
  Typography,
  Link,
} from '@mui/material';
import CustomInput from '../components/Input';
import CustomButton from '../components/Button';

const logoImage = '/saudepositivalogo.png';

const RegisterPage = () => {

  const handleRegister = (e) => {
    e.preventDefault();
    // Lógica de cadastro e validação virá aqui
    console.log('Tentativa de Cadastro');
  };

  return (
    // Box para simular o fundo azul escuro do protótipo
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
      {/* O Card representa a caixa branca do formulário. Aumentamos o maxWidth para caber mais campos. */}
      <Card
        component="form"
        onSubmit={handleRegister}
        sx={{
          width: '100%',
          maxWidth: 450, // Ligeiramente maior que o Login
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
            Cadastro
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Digite as informações para criar sua conta
          </Typography>
        </Box>

        {/* --- CAMPOS DE CADASTRO --- */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {/* Linha do Protótipo 1: Email e Nome */}
          <CustomInput 
            label="Email" 
            type="email" 
            fullWidth 
            required 
          />
          <CustomInput 
            label="Nome" 
            type="text" 
            fullWidth 
            required 
          />
          
          {/* Linha do Protótipo 2: Data de Nascimento e CPF */}
          <CustomInput 
            label="Data de Nascimento" 
            type="date" 
            fullWidth 
            required
            // Necessário para remover o placeholder e mostrar o ícone de calendário
            InputLabelProps={{ shrink: true }} 
          />
          <CustomInput 
            label="CPF" 
            type="text" 
            fullWidth 
            required 
            placeholder="000.000.000-00"
          />

          {/* Linha do Protótipo 3: Telefone e Senha */}
          <CustomInput 
            label="Telefone" 
            type="tel" 
            fullWidth 
            required 
            placeholder="(99) 99999-9999"
          />
          <CustomInput 
            label="Crie uma senha" 
            type="password" 
            fullWidth 
            required 
          />

          {/* Linha do Protótipo 4: Confirmação de Senha e Código Externa (Opcional) */}
          <CustomInput 
            label="Confirme a senha" 
            type="password" 
            fullWidth 
            required 
          />
          <CustomInput 
            label="Código Externa (Opcional)" 
            type="text" 
            fullWidth 
          />
        </Box>

        {/* Botão de Cadastro (usando Button.js) */}
        <CustomButton 
          type="submit" 
          fullWidth 
          variant="contained"
          color="primary"
          sx={{ py: 1.5, mt: 3 }}
        >
          Cadastrar
        </CustomButton>
        
        {/* Link para o Login */}
        <Typography variant="body2" sx={{ mt: 2 }}>
          Já tem uma conta?{' '}
          <Link 
            component={RouterLink} 
            to="/login" 
            variant="body2" 
            color="secondary" // Pega a cor secondary do seu tema
          >
            Fazer Login
          </Link>
        </Typography>
      </Card>
    </Box>
  );
};

export default RegisterPage;