import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/saudepositivalogo.png';

// Recebe props isAuthenticated e onLogout do App.jsx
export default function Navbar({ isAuthenticated, onLogout }) {
  const navigate = useNavigate();
  
  return (
    <AppBar position="static" sx={{ background: '#fff', boxShadow: 'none', borderBottom: '1px solid #eee' }}>
      <Toolbar>
        <Box 
          component={Link} 
          to="/" 
          sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', textDecoration: 'none', cursor: 'pointer' }}
        >
          <img src={logo} alt="Saúde Positiva" style={{ height: 80, marginRight: 8 }} />
          <Typography variant="h6" sx={{ color: '#009688', fontWeight: 700 }}>
            SAÚDE <span style={{ color: '#FBC02D' }}>POSITIVA</span>
          </Typography>
        </Box>

        <Button component={Link} to="/" sx={{ color: '#555', fontWeight: 600, textTransform: 'none' }}>
          Início
        </Button>

        {/* Lógica condicional do botão */}
        {isAuthenticated ? (
          <Button 
            variant="outlined" 
            size="small" 
            sx={{ ml: 2, color: '#d32f2f', borderColor: '#d32f2f', fontWeight: 700 }} 
            onClick={() => {
              onLogout(); // Avisa o App que saiu
              navigate('/'); // Volta pra home
            }}
          >
            Sair
          </Button>
        ) : (
          <Button 
            variant="outlined" 
            size="small" 
            sx={{ ml: 2, color: '#009688', borderColor: '#009688', fontWeight: 700 }} 
            onClick={() => navigate('/login')}
          >
            Entrar
          </Button>
        )}

      </Toolbar>
    </AppBar>
  );
}