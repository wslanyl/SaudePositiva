import React from 'react';
import { Box, Typography, Paper, Button, Avatar, Grid } from '@mui/material';

const specialists = [
  { name: 'Dra. Helena Vasconcelos - Cardiologista', desc: 'Especialista em saúde do coração e prevenção de doenças cardiovasculares.', price: 'R$100,00 - 30min', img: '/doctor1.jpg' },
  { name: 'Dr. Rafael Monteiro Leal - Neurologista', desc: 'Atua no diagnóstico e tratamento de distúrbios do sistema nervoso.', price: 'R$160,00 - 30min', img: '/doctor2.jpg' },
  { name: 'Dra. Camila Nogueira Azevedo - Pediatra', desc: 'Cuida da saúde e desenvolvimento de crianças e adolescentes.', price: 'R$130,00 - 30min', img: '/doctor3.jpg' },
  { name: 'Dr. Eduardo Sampaio Farias - Ortopedista', desc: 'Especialista em ossos, articulações e lesões musculoesqueléticas.', price: 'R$200,00 - 30min', img: '/doctor4.jpg' },
  { name: 'Dra. Laura Menezes Cavalcanti - Ginecologista', desc: 'Focada na saúde da mulher, prevenção e bem-estar reprodutivo.', price: 'R$130,00 - 30min', img: '/doctor5.jpg' }
];

export default function Specialists() {
  return (
    <Box sx={{ background: '#f9f9f9', minHeight: '100vh' }}>
      <Box sx={{ background: '#008080', py: 3, textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ color: '#fff', fontWeight: 700 }}>ESPECIALISTAS</Typography>
      </Box>
      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        {specialists.map((doc, i) => (
          <Grid item xs={12} md={8} key={i}>
            <Paper sx={{ display: 'flex', alignItems: 'center', p: 2, mb: 2, border: '1px solid #b2dfdb' }}>
              <Avatar src={doc.img} sx={{ width: 72, height: 72, mr: 2 }} />
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontWeight: 700 }}>{doc.name}</Typography>
                <Typography sx={{ fontSize: 14 }}>{doc.desc}</Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 600, mt: 1 }}>{doc.price}</Typography>
              </Box>
              <Button variant="contained" sx={{ background: '#008080', minWidth: 120 }}>Agendar</Button>
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