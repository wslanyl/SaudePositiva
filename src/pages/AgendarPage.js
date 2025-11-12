// src/pages/AgendarPage.js (CÓDIGO FINAL DO FLUXO)
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa para navegação
import SelecionarDataPage from './SelecionarDataPage';
import FormularioAgendamentoPage from './FormularioAgendamentoPage';
import ConfirmacaoPage from './ConfirmacaoPage'; // NOVO IMPORT
import { Box } from '@mui/material';

// Etapas do fluxo
const STEPS = {
  DATE_SELECTION: 1,
  FORM_DETAILS: 2,
  CONFIRMATION: 3,
};

const AgendarPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(STEPS.DATE_SELECTION);
  const [appointmentData, setAppointmentData] = useState({}); 

  // Função para avançar de etapa e salvar dados
  const handleNextStep = (data) => {
    setAppointmentData(prev => ({ ...prev, ...data }));
    setCurrentStep(currentStep + 1);
  };

  // Função para voltar à etapa anterior
  const handleGoBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      // Se estiver na primeira etapa, volta para a home
      navigate('/');
    }
  };

  // Função chamada na tela de confirmação para voltar à home
  const handleGoHome = () => {
    navigate('/');
  };

  const renderStep = () => {
    switch (currentStep) {
      case STEPS.DATE_SELECTION:
        return (
          <SelecionarDataPage 
            onNextStep={handleNextStep} 
            onGoBack={handleGoBack}
          />
        );
      case STEPS.FORM_DETAILS:
        return (
          <FormularioAgendamentoPage 
            appointmentData={appointmentData} 
            onNextStep={handleNextStep} 
            onGoBack={handleGoBack}
          />
        );
      case STEPS.CONFIRMATION:
        return (
          <ConfirmacaoPage 
            appointmentData={appointmentData} 
            onGoHome={handleGoHome}
          />
        );
      default:
        return <Box sx={{ p: 5 }}>Erro: Etapa não encontrada. Utilize a rota /agendamento.</Box>;
    }
  };

  return (
    <Box>
      {renderStep()}
    </Box>
  );
};

export default AgendarPage;