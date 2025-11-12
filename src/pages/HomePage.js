// src/pages/HomePage.js
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Button, 
  Card, 
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme 
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

// Ícones para as funcionalidades (ex: Agendamento, Prontuário, etc.)
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BarChartIcon from '@mui/icons-material/BarChart';
import MessageIcon from '@mui/icons-material/Message';

// Assumindo que você tem uma imagem de banner na pasta 'public' ou 'src'
import heroImage from '../../fotomedico.jpg'; 
import logoImage from '../../saudepositivalogo.png'; 

// Componente para o layout do Header/Footer (que será reutilizado)
const Header = () => (
  <Box sx={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    py: 2, 
    px: { xs: 2, md: 5 } 
  }}>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img src={logoImage} alt="Logo" style={{ height: 32, marginRight: 2 }} />
        <Typography variant="h6" color="primary" fontWeight="bold" sx={{ display: { xs: 'none', sm: 'block' } }}>
            SAÚDE POSITIVA
        </Typography>
    </Box>
    <Box>
        {/* Você pode substituir estes por um componente de navegação se quiser */}
        <Button component={RouterLink} to="/marketplace" sx={{ mr: 1, color: 'text.primary' }}>Marketplace</Button>
        <Button component={RouterLink} to="/agendamento" sx={{ mr: 1, color: 'text.primary' }}>Agendar</Button>
        <Button component={RouterLink} to="/login" variant="outlined" sx={{ mr: 1 }}>Login</Button>
        <Button component={RouterLink} to="/cadastro" variant="contained" color="secondary">Começar Grátis</Button>
    </Box>
  </Box>
);

// Componente para um Card de Funcionalidade
const FunctionalityCard = ({ icon: Icon, title, description }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ height: '100%', border: '1px solid #e0e0e0' }}>
      <CardContent>
        <Icon sx={{ color: 'primary.main', fontSize: 40, mb: 1.5 }} />
        <Typography variant="h6" component="div" fontWeight="bold" sx={{ color: 'primary.main' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);


const HomePage = () => {
  const theme = useTheme();
  
  // Dados de Vantagens (Por que escolher...)
  const advantages = [
    { icon: AccessTimeIcon, title: 'Aumenta sua Produtividade', text: 'Reduza trabalho manual com automações inteligentes e processos digitais' },
    { icon: ThumbUpAltIcon, title: 'Melhore a Experiência do Paciente', text: 'Agendamento FÁCIL, acompanhamento personalizado e gamificação engajadora' },
    { icon: IntegrationInstructionsIcon, title: 'Integração com SUS', text: 'Preparado para integração com sistema de saúde pública' },
  ];

  // Dados de Funcionalidades (Funcionalidades que Transformam)
  const functionalities = [
    { icon: CalendarMonthIcon, title: 'Agendamento Inteligente', description: 'Permite a gestão de agenda de forma automática e lembretes personalizados.' },
    { icon: DescriptionIcon, title: 'Prontuário Eletrônico', description: 'Acesso rápido ao histórico completo por paciente (padrão HL7, DICOM e TISS).' },
    { icon: MilitaryTechIcon, title: 'Gamificação em Saúde', description: 'Crie programas de fidelidade e engajamento para manter pacientes em sua jornada.' },
    { icon: SmartToyIcon, title: 'Triagem via IA', description: 'Mensagens inteligentes via Whatsapp para triagem inicial e orientação de pacientes.' },
    { icon: BarChartIcon, title: 'Dashboard Analítico', description: 'Métricas em tempo real de produtividade, maturidade digital e vendas online.' },
    { icon: MessageIcon, title: 'Comunicação Automatizada', description: 'Lembretes, dicas de saúde e acompanhamento personalizado via WhatsApp.' },
  ];

  return (
    <Box>
      <Header />

      {/* ------------------- 1. HERO/BANNER PRINCIPAL ------------------- */}
      <Box 
        sx={{ 
          bgcolor: theme.palette.secondary.main, // Verde brilhante
          color: 'white', 
          py: 8, 
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" fontWeight="bold" sx={{ mb: 3 }}>
                CONECTAMOS VOCÊ AO CUIDADO QUE MERECE, COM CONFORTO E CONFIANÇA.
              </Typography>
              {/* Box abaixo para a imagem do médico (no lado direito no layout desktop) */}
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box 
                    component="img"
                    src={heroImage}
                    alt="Médico sorrindo em um laptop"
                    sx={{
                        maxWidth: '100%',
                        height: 'auto',
                        borderRadius: 2,
                        boxShadow: 8,
                        display: { xs: 'none', md: 'block' } // Esconder no mobile
                    }}
                />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ------------------- 2. SEÇÃO "POR QUE ESCOLHER..." E GRÁTIS ------------------- */}
      <Container maxWidth="lg" sx={{ mt: 5, mb: 8 }}>
        <Grid container spacing={4}>
          
          {/* VANTAGENS DO PRODUTO (Lado Esquerdo) */}
          <Grid item xs={12} md={7}>
            <Typography variant="h5" component="h3" color="primary" fontWeight="bold" sx={{ mb: 3 }}>
              Por que escolher Saúde Positiva?
            </Typography>
            <Grid container spacing={3}>
              {advantages.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <item.icon sx={{ color: 'primary.main', fontSize: 30, mr: 2, mt: 0.5 }} />
                    <Box>
                      <Typography variant="h6" fontWeight="bold">
                        {item.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {item.text}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* OPÇÃO GRÁTIS PARA COMEÇAR (Lado Direito) */}
          <Grid item xs={12} md={5}>
            <Typography variant="h5" component="h3" color="secondary" fontWeight="bold" sx={{ mb: 3 }}>
              Grátis para começar
            </Typography>
            <List>
              {[
                'Até 50 agendamento/mês',
                'Prontuário eletrônico completo',
                'Garantia para pacientes',
                'Suporte por WhatsApp'
              ].map((text, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Button 
              component={RouterLink}
              to="/cadastro"
              variant="contained" 
              color="primary"
              size="large"
              fullWidth
              sx={{ mt: 3, py: 1.5 }}
            >
              Começar Agora
            </Button>
          </Grid>
        </Grid>
      </Container>
      
      {/* ------------------- 3. FUNCIONALIDADES QUE TRANSFORMAM ------------------- */}
      <Box sx={{ py: 8, bgcolor: theme.palette.background.default }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" align="center" sx={{ mb: 6 }}>
            Funcionalidades que <Box component="span" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>Transformam</Box>
          </Typography>
          
          <Grid container spacing={4}>
            {functionalities.map((func, index) => (
              <FunctionalityCard 
                key={index}
                icon={func.icon}
                title={func.title}
                description={func.description}
              />
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ------------------- 4. FOOTER (Rodapé Simples) ------------------- */}
      <Box sx={{ bgcolor: '#B2D9E6', py: 2, textAlign: 'center' }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.primary">
            © 2025 Saúde Positiva | CNPJ - 21.341.389/0001-09
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Link href="#" color="inherit" sx={{ mx: 1 }}>Política de Privacidade</Link> | 
            <Link href="#" color="inherit" sx={{ mx: 1 }}>Termos e Condições</Link> |
            <Link href="#" color="inherit" sx={{ mx: 1 }}>Política de Cookies</Link>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;