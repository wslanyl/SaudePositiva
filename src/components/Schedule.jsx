import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

// --- IMPORTAÇÕES DO CALENDÁRIO ---
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

const times = ['15:00', '15:30', '16:00', '16:30', '17:00'];

export default function Schedule({ doctor, onNext }) {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState('');

  // Formata a data para o resumo
  const formattedDate = selectedDate 
    ? selectedDate.locale('pt-br').format('DD [de] MMMM [de] YYYY') 
    : '';

  return (
    <Box sx={{ minHeight: '100vh', background: '#f9f9f9' }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', py: 4, px: 2 }}>
        <Button component={Link} to="/specialists" variant="text" sx={{ mb: 2 }}>
          &lt; Voltar
        </Button>
        
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>Agende sua consulta</Typography>
        
        <Grid container spacing={3}>
          
          {/* --- COLUNA 1: CALENDÁRIO (Funcional) --- */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
              <Typography sx={{ fontWeight: 600, mb: 1, alignSelf: 'flex-start' }}>Selecione uma data</Typography>
              
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
                <DateCalendar 
                  value={selectedDate} 
                  onChange={(newValue) => setSelectedDate(newValue)}
                  views={['day']}
                  disablePast
                />
              </LocalizationProvider>
            </Paper>
          </Grid>

          {/* --- COLUNA 2: HORÁRIO --- */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <Typography sx={{ fontWeight: 600, mb: 1 }}>Horário disponível</Typography>
              <Grid container spacing={1}>
                {times.map((t) => (
                  <Grid item xs={6} key={t}>
                    <Button
                      variant={selectedTime === t ? 'contained' : 'outlined'}
                      sx={{ 
                        width: '100%', mb: 1, 
                        background: selectedTime === t ? '#008080' : undefined,
                        color: selectedTime === t ? '#fff' : '#008080',
                        borderColor: '#008080'
                      }}
                      onClick={() => setSelectedTime(t)}
                    >
                      {t}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          {/* --- COLUNA 3: DETALHES E BOTÃO PRÓXIMO --- */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ fontWeight: 600, mb: 1 }}>Detalhes da consulta</Typography>
              
              {doctor && (
                <>
                  <Typography sx={{ fontWeight: 700 }}>{doctor.name}</Typography>
                  <Typography sx={{ fontSize: 14, color: '#555' }}>{doctor.specialty}</Typography>
                  <Typography sx={{ fontSize: 14, fontWeight: 600, mt: 1 }}>{doctor.price} - {doctor.duration}</Typography>
                </>
              )}
              
              <Box sx={{ my: 2, pt: 2, borderTop: '1px solid #eee', flexGrow: 1 }}>
                <Typography sx={{ fontSize: 14 }}>
                  {formattedDate || 'Selecione uma data'}<br />
                  Horário: <strong>{selectedTime || '--:--'}</strong><br />
                  Fuso: Brasília
                </Typography>
              </Box>

              <Button
                variant="contained"
                sx={{ mt: 2, background: '#008080', py: 1.5 }}
                disabled={!selectedTime || !selectedDate}
                onClick={() => onNext && onNext(formattedDate, selectedTime)}
              >
                PRÓXIMO
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}