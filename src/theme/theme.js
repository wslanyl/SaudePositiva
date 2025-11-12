import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // 🎨 Paleta de Cores baseada no Protótipo
  palette: {
    primary: {
      // Verde Escuro/Ciano do Header e Botões Principais
      main: '#1D838B', 
    },
    secondary: {
      // Verde Brilhante para Sucesso e Destaques
      main: '#7CB342', 
    },
    background: {
      // Fundo geral do Body (pode ser um cinza bem claro)
      default: '#F5F5F5', 
    },
  },
  
  // ✒️ Tipografia
  typography: {
    fontFamily: [
      'Roboto', // Fonte padrão do Material-UI, adequada para interfaces
      'sans-serif',
    ].join(','),
    h4: {
      fontWeight: 600, // Deixa títulos como 'Agende sua consulta' mais fortes
    }
  },

  // 🧱 Customização de Componentes
  components: {
    MuiButton: {
      defaultProps: {
        // Aplica a cor primária por padrão
        variant: 'contained', 
      },
      styleOverrides: {
        root: {
          borderRadius: '8px', // Deixa os botões com cantos ligeiramente arredondados
          textTransform: 'none', // Mantém o texto como digitado, não maiúsculo
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)', // Sombra sutil
        },
      },
    },
  },
});

export default theme;