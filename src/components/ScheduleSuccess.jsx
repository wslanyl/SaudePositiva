import React from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom'; // IMPORTAÇÃO ADICIONADA

export default function ScheduleSuccess() {
  return (
    <Box sx={{ minHeight: '100vh', background: '#f9f9f9' }}>
      <Box sx={{ maxWidth: 900, mx: 'auto', py: 4 }}>
        {/* BOTÃO CORRIGIDO PARA NAVEGAR DE VOLTA */}
        <Button component={Link} to="/specialists" variant="text" sx={{ mb: 2 }}>&lt; Voltar</Button>
        
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 80, mb: 2 }} />
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>AGENDAMENTO CONFIRMADO</Typography>
          <Typography sx={{ fontWeight: 600, mb: 1 }}>Informações do agendamento</Typography>
          <Typography sx={{ fontWeight: 700 }}>Dra. Helena Vasconcelos Duarte</Typography>
          <Typography sx={{ fontSize: 14 }}>Cardiologista</Typography>
          <Typography sx={{ fontSize: 14, fontWeight: 600, mt: 1 }}>R$100,00 - 30min</Typography>
          <Typography sx={{ fontSize: 14, mt: 1 }}>
            07 de Outubro de 2025, 15:00<br />
            Fuso horário: Brasília
          </Typography>
          <Typography sx={{ fontSize: 14, mt: 1 }}>Consulta Online</Typography>
          <Typography sx={{ fontWeight: 600, mt: 2 }}>Informações de pagamento</Typography>
          <Typography sx={{ fontSize: 14 }}>PAGAR PESSOALMENTE (SESSÃO)</Typography>
        </Paper>
      </Box>
    </Box>
  );
}