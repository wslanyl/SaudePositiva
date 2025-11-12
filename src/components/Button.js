// src/components/Button.js
import React from 'react';
import { Button } from '@mui/material';

// O componente CustomButton deve apenas envolver o Button do MUI
const CustomButton = (props) => {
  return (
    <Button 
      {...props} 
      // Por padrão, use as configurações do tema (cor primary, variant contained)
    />
  );
};

export default CustomButton;