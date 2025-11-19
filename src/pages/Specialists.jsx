import React from 'react';
import { Box, Typography, Paper, Button, Avatar, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { specialists } from '../data/mockData'; // Certifique-se de criar esse arquivo

export default function Specialists() {
  const navigate = useNavigate();

  const handleSchedule = (doctor) => {
    // Envia o médico selecionado para a página de agendamento
    navigate('/schedule', { state: { doctor } });
  };

  return (
    <Box sx={{ background: '#f9f9f9', minHeight: '100vh' }}>
      <Box sx={{ background: '#008080', py: 3, textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ color: '#fff', fontWeight: 700 }}>ESPECIALISTAS</Typography>
      </Box>
      <Grid container spacing={3} sx={{ justifyContent: 'center', px: 2 }}>
        {specialists.map((doc) => (
          <Grid item xs={12} md={8} key={doc.id}>
            <Paper sx={{ display: 'flex', alignItems: 'center', p: 2, mb: 2, border: '1px solid #b2dfdb' }}>
              <Avatar src={doc.img} sx={{ width: 72, height: 72, mr: 2 }} />
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontWeight: 700 }}>{doc.name}</Typography>
                <Typography sx={{ fontSize: 14 }}>{doc.desc}</Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 600, mt: 1 }}>{doc.price} - {doc.duration}</Typography>
              </Box>
              <Button 
                variant="contained" 
                sx={{ background: '#008080', minWidth: 120 }}
                onClick={() => handleSchedule(doc)}
              >
                Agendar
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 6, color: '#888', fontSize: 13, pb: 2 }}>
        © 2024 por Saúde Positiva. Todos os direitos reservados.
      </Box>
    </Box>
  );
}