import React from 'react';
import { Box, Button, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useNavigate } from 'react-router-dom';
import bannerImg from '../assets/fotomedico.jpg';

const features = [
  { icon: <AccessTimeIcon color="primary" />, title: 'Aumenta sua Produtividade', desc: 'Reduza trabalho manual com automações inteligentes e processos digitais' },
  { icon: <ThumbUpIcon color="primary" />, title: 'Melhora a Experiência do Paciente', desc: 'Agendamento FÁCIL, acompanhamento personalizado e gamificação' },
  { icon: <CameraAltIcon color="primary" />, title: 'Integração com SUS', desc: 'Preparado para integração com sistema de saúde pública' }
];
const freeItems = [
  'Até 50 agendamentos/mês',
  'Prontuário eletrônico completo',
  'Garantia para pacientes',
  'Suporte por WhatsApp'
];
const cards = [
  { title: 'Agendamento Inteligente', desc: 'Permite a gestão de consultas e lembretes personalizados.', icon: '📅' },
  { title: 'Prontuário Eletrônico', desc: 'Acesso rápido ao histórico completo por paciente.', icon: '🗂️' },
  { title: 'Gamificação em Saúde', desc: 'Crie programas de fidelidade e engajamento para manter pacientes ativos.', icon: '🏆' },
  { title: 'Triagem via IA', desc: 'Mensagens inteligentes via WhatsApp para triagem inicial e orientação.', icon: '🤖' },
  { title: 'Dashboard Analítico', desc: 'Visualize indicadores de produtividade, atendimento e vendas.', icon: '📊' },
  { title: 'Comunicação Automatizada', desc: 'Envio de mensagens automáticas de acompanhamento.', icon: '💬' }
];

export default function Home() {
  const navigate = useNavigate();

   return (
    <Box>
      <Box sx={{ 
        width: '100%', 
        height: { xs: 250, md: 450 }, 
        background: `linear-gradient(rgba(0,150,136,0.6),rgba(0,150,136,0.6)), url(${bannerImg})`,
        backgroundPosition: 'center 25%',
        backgroundSize: 'cover',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        px: { xs: 4, md: 10 } 
      }}>
        <Typography variant="h3" sx={{ 
          color: '#fff', 
          fontWeight: 600, 
          textAlign: 'left', 
          maxWidth: 450 
        }}>
          CONECTAMOS VOCÊ AO CUIDADO QUE MERECE, COM CONFORTO E CONFIANÇA.
        </Typography>
      </Box>
     
      <Grid container spacing={2} sx={{ mt: 4, mb: 2, justifyContent: 'center', px: 2 }}>
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Por que escolher Saúde Positiva?</Typography>
          <List>
            {features.map((f, i) => (
              <ListItem key={i} sx={{ pl: 0 }}>
                <ListItemIcon>{f.icon}</ListItemIcon>
                <ListItemText primary={<Typography sx={{ fontWeight: 600, fontSize: 15 }}>{f.title}</Typography>} secondary={<Typography sx={{ fontSize: 13 }}>{f.desc}</Typography>} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#388e3c', mb: 1 }}>Grátis para começar</Typography>
          <List>
            {freeItems.map((item, i) => (
              <ListItem key={i} sx={{ pl: 0 }}>
                <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                <ListItemText primary={<Typography sx={{ fontSize: 14 }}>{item}</Typography>} />
              </ListItem>
            ))}
          </List>
          
          <Button 
            variant="contained" 
            sx={{ mt: 2, background: '#008080' }}
            onClick={() => navigate('/specialists')}
          >
            Agendar consulta
          </Button>
        </Grid>
      </Grid>
      
      <Box sx={{ textAlign: 'center', mt: 6, mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Funcionalidades que <span style={{ color: '#8BC34A' }}>Transformam</span>
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ justifyContent: 'center', mb: 6, px: 2 }}>
        {cards.map((card, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Paper elevation={2} sx={{ p: 2, minHeight: 120 }}>
              <Typography variant="h5" sx={{ mb: 1 }}>{card.icon}</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{card.title}</Typography>
              <Typography sx={{ fontSize: 14 }}>{card.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}