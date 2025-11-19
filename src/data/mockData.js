import doctor1 from '../assets/doctor1.jpg';
import doctor2 from '../assets/doctor2.jpg';
import doctor3 from '../assets/doctor3.jpg';
import doctor4 from '../assets/doctor4.jpg';
import doctor5 from '../assets/doctor5.jpg';

export const specialists = [
  { 
    id: 1, 
    name: 'Dra. Helena Vasconcelos Duarte', 
    specialty: 'Cardiologista', 
    price: 'R$100,00', 
    duration: '30min', 
    img: doctor1, // Usamos a variável importada, não mais a string
    desc: 'Especialista em saúde do coração e prevenção de doenças cardiovasculares.' 
  },
  { 
    id: 2, 
    name: 'Dr. Rafael Monteiro Leal', 
    specialty: 'Neurologista', 
    price: 'R$160,00', 
    duration: '30min', 
    img: doctor2, 
    desc: 'Atua no diagnóstico e tratamento de distúrbios do sistema nervoso.' 
  },
  { 
    id: 3, 
    name: 'Dra. Camila Nogueira Azevedo', 
    specialty: 'Pediatra', 
    price: 'R$130,00', 
    duration: '30min', 
    img: doctor3, 
    desc: 'Cuida da saúde e desenvolvimento de crianças e adolescentes.' 
  },
  { 
    id: 4, 
    name: 'Dr. Eduardo Sampaio Farias', 
    specialty: 'Ortopedista', 
    price: 'R$200,00', 
    duration: '30min', 
    img: doctor4, 
    desc: 'Especialista em ossos, articulações e lesões musculoesqueléticas.' 
  },
  { 
    id: 5, 
    name: 'Dra. Laura Menezes Cavalcanti', 
    specialty: 'Ginecologista', 
    price: 'R$130,00', 
    duration: '30min', 
    img: doctor5, 
    desc: 'Focada na saúde da mulher, prevenção e bem-estar reprodutivo.' 
  }
];