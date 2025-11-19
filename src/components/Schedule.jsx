import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const times = ['15:00', '15:30', '16:00', '16:30', '17:00'];

// Recebe 'doctor' e 'onNext' como propriedades (props)
export default function Schedule({ doctor, onNext }) {
  const [selectedDate] = useState('2025-10-07'); // Futuramente podemos usar um calendário real
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <Box sx={{ minHeight: '100vh', background: '#f9f9f9' }}>
      <Box sx={{ maxWidth: 900, mx: 'auto', py: 4, px: 2 }}>
        <Button component={Link} to="/specialists" variant="text" sx={{ mb: 2 }}>&lt; Voltar</Button>
        
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>Agende sua consulta</Typography>
        
        <Grid container spacing={3}>
          {/* Coluna Data */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2 }}>
              <Typography sx={{ fontWeight: 600, mb: 1 }}>Selecione uma data</Typography>
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Typography variant="body2">Outubro 2025</Typography>
                <Box sx={{ fontSize: 32, fontWeight: 700, color: '#008080', mb: 1 }}>07</Box>
              </Box>
            </Paper>
          </Grid>

          {/* Coluna Horário */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2 }}>
              <Typography sx={{ fontWeight: 600, mb: 1 }}>Horário disponível</Typography>
              <Grid container spacing={1}>
                {times.map((t) => (
                  <Grid item xs={6} key={t}>
                    <Button
                      variant={selectedTime === t ? 'contained' : 'outlined'}
                      sx={{ width: '100%', mb: 1, background: selectedTime === t ? '#008080' : undefined }}
                      onClick={() => setSelectedTime(t)}
                    >
                      {t}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          {/* Coluna Resumo */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ fontWeight: 600, mb: 1 }}>Detalhes da consulta</Typography>
              
              {/* Dados dinâmicos do médico */}
              <Typography sx={{ fontWeight: 700 }}>{doctor.name}</Typography>
              <Typography sx={{ fontSize: 14 }}>{doctor.specialty}</Typography>
              <Typography sx={{ fontSize: 14, fontWeight: 600, mt: 1 }}>{doctor.price} - {doctor.duration}</Typography>
              
              <Box sx={{ my: 2, pt: 2, borderTop: '1px solid #eee' }}>
                <Typography sx={{ fontSize: 14 }}>
                  07 de Outubro de 2025<br />
                  Horário: <strong>{selectedTime || '--:--'}</strong><br />
                  Fuso: Brasília
                </Typography>
              </Box>

              <Button
                variant="contained"
                sx={{ mt: 'auto', background: '#008080' }}
                disabled={!selectedTime}
                onClick={() => onNext(selectedDate, selectedTime)}
              >
                Próximo
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}