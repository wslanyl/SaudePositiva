// src/components/DoctorCard.js
import React from 'react';
import { Card, Box, Typography, Avatar } from '@mui/material';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';

const DoctorCard = ({ name, specialty, price, avatarSrc }) => {
  return (
    <Card sx={{ p: 2, display: 'flex', alignItems: 'center', boxShadow: 3 }}>
      
      {/* 1. Imagem/Avatar do Médico */}
      <Avatar 
        alt={name} 
        src={avatarSrc}
        sx={{ width: 60, height: 60, mr: 2 }}
      >
        {/* Fallback se a imagem não carregar */}
        <MedicalInformationIcon />
      </Avatar>

      {/* 2. Detalhes do Médico */}
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" component="div" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {specialty}
        </Typography>
      </Box>

      {/* 3. Preço da Consulta */}
      <Box sx={{ textAlign: 'right' }}>
        <Typography 
          variant="h6" 
          color="primary" 
          fontWeight="bold"
        >
          {/* Formatação simples do preço */}
          {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </Typography>
      </Box>
    </Card>
  );
};

// Definir valores padrão para as props
DoctorCard.defaultProps = {
  name: "Dr(a). Nome do Médico",
  specialty: "Especialidade",
  price: 0,
  avatarSrc: ""
};

export default DoctorCard;