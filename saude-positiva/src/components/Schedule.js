import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';

const times = ['15:00', '15:30', '16:00', '16:30', '17:00'];
const doctor = { name: 'Dra. Helena Vasconcelos Duarte', specialty: 'Cardiologista', price: 'R$100,00' };

export default function Schedule({ onNext }) {
  const [selectedDate] = useState('2025-10-07');
  const [selectedTime, setSelectedTime] = useState('');
  return (
    <Box sx={{ minHeight: '100vh', background: '#f9f9f9' }}>
      <Box sx={{ maxWidth: 900, mx: 'auto', py: 4 }}>
        <Button variant="text" sx={{ mb: 2 }}>&lt; Voltar</Button>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>Agende sua consulta</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2 }}>
              <Typography sx={{ fontWeight: 600, mb: 1 }}>Selecione uma data</Typography>
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Typography variant="body2">Outubro 2025</Typography>
                <Box sx={{ fontSize: 32, fontWeight: 700, color: '#008080', mb: 1 }}>07</Box>
              </Box>
            </Paper>
          </Grid>
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
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2 }}>
              <Typography sx={{ fontWeight: 600, mb: 1 }}>Detalhes da consulta</Typography>
              <Typography sx={{ fontWeight: 700 }}>{doctor.name}</Typography>
              <Typography sx={{ fontSize: 14 }}>{doctor.specialty}</Typography>
              <Typography sx={{ fontSize: 14, fontWeight: 600, mt: 1 }}>{doctor.price} - 30min</Typography>
              <Typography sx={{ fontSize: 14, mt: 1 }}>
                07 de Outubro de 2025, {selectedTime || 'Selecione um horário'}<br />
                Fuso horário: Brasília
              </Typography>
              <Typography sx={{ fontSize: 14, mt: 1 }}>Consulta Online</Typography>
              <Button
                variant="contained"
                sx={{ mt: 2, background: '#008080' }}
                disabled={!selectedTime}
                onClick={onNext}
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

