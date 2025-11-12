// src/components/Input.js
import React from 'react';
import { TextField } from '@mui/material';

// O componente CustomInput deve apenas envolver o TextField do MUI
const CustomInput = (props) => {
  return (
    <TextField 
      {...props} 
      variant="outlined" // Padrão do MUI para input box
      size="medium"      // Altura padrão
    />
  );
};

export default CustomInput;