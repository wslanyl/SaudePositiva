// src/pages/ConfirmacaoPage.js
import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Card, 
  Divider, 
  Button 
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoctorCard from '../components/DoctorCard'; 
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'; // Importa o locale para formatação em português

// Configura o dayjs para usar português
dayjs.locale('pt-br'); 

const ConfirmacaoPage = ({ appointmentData, onGoHome }) => {
  const { date, time, doctor, nome, email, paymentMethod } = appointmentData;
  
  // Formatando a data
  const formattedDate = dayjs(date).format('DD [de] MMMM [de] YYYY');

  // Texto da forma de pagamento
  let paymentText = 'PAGAMENTO PENDENTE';
  if (paymentMethod === 'pix') {
      paymentText = 'PIX (AGUARDANDO PAGAMENTO)';
  } else if (paymentMethod === 'cartao') {
      paymentText = 'PAGO (CARTÃO DE CRÉDITO)';
  } else if (paymentMethod === 'presencial') {
      paymentText = 'PAGAR PESSOALMENTE (SESSÃO)';
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <Grid container spacing={4}>
        
        {/* ------------------- COLUNA ESQUERDA: ÍCONE DE SUCESSO ------------------- */}
        <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ textAlign: 'center', py: 5 }}>
            <CheckCircleIcon 
              sx={{ 
                color: 'secondary.main', // Verde brilhante do protótipo
                fontSize: 150, 
                mb: 2 
              }} 
            />
            <Typography variant="h3" component="h1" fontWeight="bold" sx={{ color: 'text.primary' }}>
              AGENDAMENTO CONFIRMADO
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>
              Sua consulta foi agendada com sucesso!
            </Typography>
          </Box>
        </Grid>

        {/* ------------------- COLUNA DIREITA: DETALHES DA CONSULTA ------------------- */}
        <Grid item xs={12} md={5}>
          <Typography variant="h6" component="h2" fontWeight="bold" sx={{ mb: 2 }}>
            Informações do agendamento
          </Typography>
          
          <DoctorCard {...doctor} />

          <Card sx={{ p: 2, mt: 2, boxShadow: 3 }}>
            <Typography variant="body1" fontWeight="bold">
              {formattedDate}, {time}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Fuso horário Brasília
            </Typography>
            <Divider sx={{ my: 2 }} />
            
            <Typography variant="h6" component="h3" fontWeight="bold">
              Informações de pagamento
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {paymentText}
            </Typography>
            
            <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
              Você receberá todos os detalhes da consulta em seu email ({email}).
            </Typography>
          </Card>
          
          <Button 
            onClick={onGoHome}
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{ mt: 3, py: 1.5 }}
          >
            Voltar para a Home
          </Button>

        </Grid>
      </Grid>
    </Container>
  );
};

export default ConfirmacaoPage;