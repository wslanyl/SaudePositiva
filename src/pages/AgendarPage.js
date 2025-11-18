import React, { useState } from 'react';
import {
  Container, Typography, Button, Grid, Card, CardContent, Avatar, Box
} from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import dayjs from 'dayjs';
// Importe o Header (Definição simplificada para manter o código em um único arquivo)
const Header = () => (
    <Box sx={{ bgcolor: 'primary.main', p: 2, color: 'white' }}>
        <Typography variant="h6">Minha Clínica</Typography>
    </Box>
);

const horarios = ['15:00', '15:30', '16:00', '16:30', '17:00', '17:30'];

export default function AgendarPage() {
  const [data, setData] = useState(dayjs());
  const [horario, setHorario] = useState('15:00');

  return (
    <>
      <Header /> {/* Incluindo o Header */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Button startIcon={<ArrowBackIosNewIcon />} sx={{ mb: 2 }}>
          Voltar
        </Button>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Agende sua consulta
        </Typography>
        <Grid container spacing={4}>
          {/* Selecione uma data */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Selecione uma data
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={data}
                onChange={setData}
                disablePast
                sx={{ bgcolor: '#fff', borderRadius: 2, boxShadow: 1 }}
              />
            </LocalizationProvider>
          </Grid>

          {/* Horário disponível */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Horário disponível
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Horário Padrão de Brasília (BRT)
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
              {horarios.map((h) => (
                <Button
                  key={h}
                  variant={horario === h ? 'contained' : 'outlined'}
                  color="primary"
                  onClick={() => setHorario(h)}
                  sx={{ minWidth: 100, mb: 1 }}
                >
                  {h}
                </Button>
              ))}
            </Box>
          </Grid>

          {/* Detalhes da consulta */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Detalhes da consulta
            </Typography>
            <Card sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  sx={{ width: 56, height: 56, mr: 2 }}
                />
                <Box>
                  <Typography fontWeight={600}>
                    Dra. Helena Vasconcelos Duarte
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Cardiologista
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    R$100,00
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <CalendarTodayIcon sx={{ mr: 1, fontSize: 20 }} />
                <Typography variant="body2">
                  {data.format('DD [de] MMMM [de] YYYY')}, {horario}
                  <br />
                  Fuso horário: Brasília
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <VideocamIcon sx={{ mr: 1, fontSize: 20 }} />
                <Typography variant="body2">Consulta Online</Typography>
              </Box>
              <Button fullWidth size="large" sx={{ fontWeight: 700 }}>
                Próximo
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}