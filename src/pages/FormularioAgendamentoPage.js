// src/pages/FormularioAgendamentoPage.js
import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Button, 
  Card, 
  Divider,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import DoctorCard from '../components/DoctorCard'; 
import CustomInput from '../components/Input';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import dayjs from 'dayjs';

const FormularioAgendamentoPage = ({ appointmentData, onNextStep, onGoBack }) => {
  const { date, time, doctor } = appointmentData;
  const [paymentMethod, setPaymentMethod] = useState('pix'); // Pode ser 'pix', 'cartao', 'presencial'
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    // Dados de cartão de crédito podem ser adicionados aqui
  });

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula a finalização e avança para a confirmação
    onNextStep({ ...appointmentData, ...formData, paymentMethod });
  };

  const renderPaymentFields = () => {
    if (paymentMethod === 'cartao') {
      return (
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <CustomInput label="Número do cartão" fullWidth required />
          </Grid>
          <Grid item xs={6}>
            <CustomInput label="Nome no cartão" fullWidth required />
          </Grid>
          <Grid item xs={3}>
            <CustomInput label="Validade (MM/AA)" fullWidth required />
          </Grid>
          <Grid item xs={3}>
            <CustomInput label="CVV" fullWidth required />
          </Grid>
        </Grid>
      );
    }
    return null;
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <Button 
        startIcon={<ArrowBackIcon />} 
        onClick={onGoBack} 
        variant="text"
        sx={{ mb: 2 }}
      >
        Voltar
      </Button>

      <Typography variant="h4" component="h1" fontWeight="bold" sx={{ mb: 3 }}>
        Formulário de agendamento
      </Typography>

      <Grid container spacing={4}>
        {/* ------------------- COLUNA ESQUERDA: FORMULÁRIO DE DADOS ------------------- */}
        <Grid item xs={12} md={7}>
          
          <Card component="form" onSubmit={handleSubmit} sx={{ p: 3, boxShadow: 3 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                Dados do cliente
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <CustomInput 
                  label="Nome" 
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  fullWidth required 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomInput 
                  label="Email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  fullWidth required 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomInput 
                  label="Telefone" 
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  fullWidth required 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomInput label="CPF" fullWidth required />
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            {/* --- SEÇÃO FORMA DE PAGAMENTO --- */}
            <FormControl component="fieldset" fullWidth>
              <FormLabel component="legend" sx={{ mb: 1, fontWeight: 'bold', color: 'text.primary' }}>
                Forma de pagamento
              </FormLabel>
              <RadioGroup
                name="forma-pagamento"
                value={paymentMethod}
                onChange={handlePaymentChange}
                row
              >
                <FormControlLabel value="pix" control={<Radio />} label="PIX" />
                <FormControlLabel value="cartao" control={<Radio />} label="Cartão de Crédito" />
                <FormControlLabel value="presencial" control={<Radio />} label="Pagar pessoalmente (sessão)" />
              </RadioGroup>
            </FormControl>

            {renderPaymentFields()}

          </Card>
          
          {/* Botão Finalizar Agendamento */}
          <Button 
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{ mt: 3, py: 1.5 }}
          >
            Agendar
          </Button>

        </Grid>

        {/* ------------------- COLUNA DIREITA: INFORMAÇÕES DO AGENDAMENTO ------------------- */}
        <Grid item xs={12} md={5}>
          <Typography variant="h6" component="h2" fontWeight="bold" sx={{ mb: 2 }}>
            Informações de agendamento
          </Typography>
          
          <DoctorCard {...doctor} />

          <Card sx={{ p: 2, mt: 2 }}>
            <Typography variant="body1" fontWeight="bold">
              {dayjs(date).format('DD [de] MMMM [de] YYYY')}, {time}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Fuso horário Brasília
            </Typography>
            <Divider sx={{ my: 2 }} />
            
            <Typography variant="h6" component="h3" fontWeight="bold">
              Informações de pagamento
            </Typography>
            <Typography variant="body2" color="text.secondary">
              PAGAR PESSOALMENTE (SESSÃO)
              {/* O texto acima é um placeholder, na realidade seria dinâmico baseado em 'paymentMethod' */}
            </Typography>
            
            <Typography variant="caption" color="error" sx={{ mt: 2, display: 'block' }}>
              Ao clicar em AGENDAR, você concorda com nossos termos e condições.
            </Typography>

          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FormularioAgendamentoPage;