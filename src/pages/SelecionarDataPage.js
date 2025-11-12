// src/pages/SelecionarDataPage.js
import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Button, 
  Card, 
  Chip,
  Paper 
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'; // Garante que o calendário e a data estejam em português
import DoctorCard from '../components/DoctorCard'; 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Define o locale padrão para dayjs
dayjs.locale('pt-br');

// Dados simulados para horários e o card do médico
const mockHorarios = [
  '15:00', '16:30', '17:30', '19:00', '20:30'
];

const mockDoctorData = {
  name: "Dra. Helena Vasconcelos Duarte",
  specialty: "Cardiologista",
  price: 180.00,
  // avatarSrc: "/caminho/para/imagem.jpg" 
};


const SelecionarDataPage = ({ onNextStep, onGoBack }) => {
  // Inicializa a data selecionada para hoje
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(null);

  const handleNext = () => {
    if (selectedDate && selectedTime) {
      // Chama a função para avançar para a próxima etapa (Formulário)
      onNextStep({ date: selectedDate, time: selectedTime, doctor: mockDoctorData }); 
    } else {
      alert("Por favor, selecione uma data e um horário.");
    }
  };

  // Função para desabilitar datas passadas no calendário
  const disablePastDates = (date) => {
    return date.isBefore(dayjs(), 'day');
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      {/* Botão Voltar */}
      <Button 
        startIcon={<ArrowBackIcon />} 
        onClick={onGoBack} 
        variant="text"
        sx={{ mb: 2 }}
      >
        Voltar
      </Button>

      <Typography variant="h4" component="h1" fontWeight="bold" sx={{ mb: 3 }}>
        Agende sua consulta
      </Typography>

      <Grid container spacing={4}>
        {/* ------------------- COLUNA ESQUERDA: CALENDÁRIO ------------------- */}
        <Grid item xs={12} md={5}>
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            Selecione uma data
          </Typography>
          
          <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
              <DateCalendar
                value={selectedDate}
                onChange={(newValue) => {
                    setSelectedDate(newValue);
                    setSelectedTime(null); // Limpa o horário ao trocar a data
                }}
                shouldDisableDate={disablePastDates}
                views={['day']} 
                sx={{ 
                  width: '100%', 
                  '& .MuiPickersCalendarHeader-root': { paddingLeft: 0, paddingRight: 0 } 
                }}
              />
            </LocalizationProvider>
          </Paper>
        </Grid>
        
        {/* ------------------- COLUNA CENTRAL: HORÁRIOS E DETALHES ------------------- */}
        <Grid item xs={12} md={7}>
          <Box>
            {/* Horários Disponíveis */}
            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
              Horário disponível ({dayjs(selectedDate).format('DD/MM')})
            </Typography>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4 }}>
              {mockHorarios.map((time) => (
                <Chip
                  key={time}
                  label={time}
                  clickable
                  onClick={() => setSelectedTime(time)}
                  color={selectedTime === time ? 'primary' : 'default'}
                  variant={selectedTime === time ? 'contained' : 'outlined'}
                  sx={{ 
                    px: 1, 
                    py: 2, 
                    fontWeight: 'bold',
                    fontSize: '1rem'
                  }}
                />
              ))}
            </Box>

            {/* Detalhes da Consulta (DoctorCard) */}
            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
              Detalhes da consulta
            </Typography>
            
            <DoctorCard {...mockDoctorData} />

            <Card sx={{ p: 2, mt: 2 }}>
              <Typography variant="body1" fontWeight="bold">
                {dayjs(selectedDate).format('DD [de] MMMM [de] YYYY')}, {selectedTime || '??:??'}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Fuso horário Brasília
              </Typography>
              <Chip label="Consulta Online" color="secondary" size="small" />
            </Card>

            {/* Botão Próximo */}
            <Button 
              onClick={handleNext}
              variant="contained"
              size="large"
              fullWidth
              disabled={!selectedDate || !selectedTime} // Desabilita se não houver data ou hora selecionada
              sx={{ mt: 3 }}
            >
              Próximo
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SelecionarDataPage;
