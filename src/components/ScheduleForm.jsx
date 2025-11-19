import React from 'react';
import { Box, Typography, TextField, Button, Paper, Grid, Checkbox, FormControlLabel } from '@mui/material';

export default function ScheduleForm({ onConfirm }) {
  return (
    <Box sx={{ minHeight: '100vh', background: '#f9f9f9' }}>
      <Box sx={{ maxWidth: 900, mx: 'auto', py: 4 }}>
        <Button variant="text" sx={{ mb: 2 }}>&lt; Voltar</Button>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>Formulário de agendamento</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography sx={{ fontWeight: 600, mb: 1 }}>Dados do cliente</Typography>
              <TextField label="Nome" fullWidth sx={{ mb: 2 }} />
              <TextField label="Email" fullWidth sx={{ mb: 2 }} />
              <TextField label="Telefone" fullWidth sx={{ mb: 2 }} />
              <TextField label="Data de Nascimento" fullWidth sx={{ mb: 2 }} />
              <TextField label="Adicione uma mensagem" fullWidth sx={{ mb: 2 }} />
              <Typography sx={{ fontWeight: 600, mb: 1 }}>Forma de pagamento</Typography>
              <TextField label="Número do cartão" fullWidth sx={{ mb: 2 }} />
              <TextField label="Validade" fullWidth sx={{ mb: 2 }} />
              <TextField label="CVV" fullWidth sx={{ mb: 2 }} />
              <FormControlLabel control={<Checkbox />} label="Pagar pessoalmente | R$100,00 por sessão" />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
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
              <Button
                variant="contained"
                sx={{ mt: 2, background: '#008080' }}
                onClick={onConfirm}
              >
                Agendar
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
