import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <AppBar position="static" sx={{ background: '#fff', boxShadow: 'none', borderBottom: '1px solid #eee' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <img src="/saudepositivalogo.png" alt="Saúde Positiva" style={{ height: 32, marginRight: 8 }} />
          <Typography variant="h6" sx={{ color: '#009688', fontWeight: 700 }}>
            SAÚDE <span style={{ color: '#FBC02D' }}>POSITIVA</span>
          </Typography>
        </Box>
        <Button color="inherit" component={Link} to="/specialists" sx={{ color: '#222', fontWeight: 500 }}>Especialistas</Button>
        <Button color="inherit" component={Link} to="/dashboard" sx={{ color: '#222', fontWeight: 500 }}>Dashboard</Button>
        <Button color="inherit" component={Link} to="/progress" sx={{ color: '#222', fontWeight: 500 }}>Meu Progresso</Button>
        <Button variant="outlined" size="small" sx={{ ml: 2, color: '#388e3c', borderColor: '#388e3c' }} onClick={() => navigate('/login')}>Sair</Button>
      </Toolbar>
    </AppBar>
  );
}

