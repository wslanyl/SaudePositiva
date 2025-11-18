// src/pages/AgendarPage.js
import React, { useState } from 'react';
import { Container, Typography, Button, Grid, Card, Box, Avatar } from '@mui/material';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import dayjs from 'dayjs';
import Header from '../components/Header';

const horarios = ['15:00', '15:30', '16:00', '16:30', '17:00', '17:30'];

export default function AgendarPage() {
  const [data, setData] = useState(dayjs());
  const [horario, setHorario] = useState('15:00');

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Container maxWidth={false} sx={{ flex: 1, mt: 4, mb: 4 }}>
        <Button
          startIcon={<ArrowBackIosNewIcon />}
          sx={{
            mb: 2,
            color: 'text.primary',
            fontWeight: 400,
            textTransform: 'none',
            pl: 0,
            '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' }
          }}
          onClick={() => window.history.back()}
          variant="text"
        >
          Voltar
        </Button>
        <Typography variant="h3" fontWeight={700} gutterBottom sx={{ mb: 4 }}>
          Agende sua consulta
        </Typography>
        <Grid container spacing={0} alignItems="flex-start">
          {/* Selecione uma data */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
              Selecione uma data
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={data}
                onChange={setData}
                disablePast
                sx={{
                  bgcolor: '#fff',
                  borderRadius: 3,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                  p: 1,
                  width: 280,
                  mx: { xs: 'auto', md: 0 }
                }}
              />
            </LocalizationProvider>
          </Grid>

          {/* Horário disponível */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 0.5, textAlign: { xs: 'left', md: 'center' } }}>
              Horário disponível
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: 'block', mb: 2, textAlign: { xs: 'left', md: 'center' } }}
            >
              Horário Padrão de Brasília (BRT)
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'flex-start', md: 'center' },
                gap: 2,
                mt: 1
              }}
            >
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant={horario === '15:00' ? 'contained' : 'outlined'}
                  color="primary"
                  onClick={() => setHorario('15:00')}
                  sx={{ minWidth: 110, fontWeight: 500 }}
                >
                  15:00
                </Button>
                <Button
                  variant={horario === '15:30' ? 'contained' : 'outlined'}
                  color="primary"
                  onClick={() => setHorario('15:30')}
                  sx={{ minWidth: 110, fontWeight: 500 }}
                >
                  15:30
                </Button>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant={horario === '16:00' ? 'contained' : 'outlined'}
                  color="primary"
                  onClick={() => setHorario('16:00')}
                  sx={{ minWidth: 110, fontWeight: 500 }}
                >
                  16:00
                </Button>
                <Button
                  variant={horario === '16:30' ? 'contained' : 'outlined'}
                  color="primary"
                  onClick={() => setHorario('16:30')}
                  sx={{ minWidth: 110, fontWeight: 500 }}
                >
                  16:30
                </Button>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant={horario === '17:00' ? 'contained' : 'outlined'}
                  color="primary"
                  onClick={() => setHorario('17:00')}
                  sx={{ minWidth: 110, fontWeight: 500 }}
                >
                  17:00
                </Button>
                <Button
                  variant={horario === '17:30' ? 'contained' : 'outlined'}
                  color="primary"
                  onClick={() => setHorario('17:30')}
                  sx={{ minWidth: 110, fontWeight: 500 }}
                >
                  17:30
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Detalhes da consulta */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
              Detalhes da consulta
            </Typography>
            <Card sx={{ p: 2.5, borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <Avatar
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Dra. Helena Vasconcelos Duarte"
                  sx={{ width: 48, height: 48, mr: 2 }}
                />
                <Box>
                  <Typography fontWeight={700} variant="body1" sx={{ lineHeight: 1 }}>
                    Dra. Helena Vasconcelos Duarte
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1 }}>
                    Cardiologista
                  </Typography>
                  <Typography variant="body2" color="text.primary" sx={{ fontWeight: 500, mt: 0.5 }}>
                    R$100,00
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                <CalendarTodayIcon sx={{ mr: 1, fontSize: 20, color: 'primary.main', mt: 0.5 }} />
                <Box>
                  <Typography variant="body2" fontWeight={500}>
                    {data.format('DD [de] MMMM [de] YYYY')}, {horario}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Fuso horário: Brasília
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <VideocamIcon sx={{ mr: 1, fontSize: 20, color: 'primary.main' }} />
                <Typography variant="body2" fontWeight={500}>
                  Consulta Online
                </Typography>
              </Box>
              <Button
                fullWidth
                size="large"
                variant="contained"
                color="primary"
                sx={{ fontWeight: 700, borderRadius: 2, fontSize: 20, py: 1.2 }}
                onClick={() => window.location.href = '/formulario-agendamento'}
              >
                Próximo
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* Rodapé fixo igual ao protótipo */}
      <Box sx={{
        bgcolor: '#8EC1CB',
        color: 'black',
        py: 1.5,
        textAlign: 'center',
        fontSize: 12,
        mt: 'auto'
      }}>
        © 2024 por Criado pela Saúde Positiva e demais membros ativos. - CNPJ - 21.341.389/0001-09<br />
        Email: saudepositivacontato@gmail.com - Telefone: (83) 98754-0055
      </Box>
    </Box>
  );
}