import React, { useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import Schedule from '../components/Schedule';
import ScheduleForm from '../components/ScheduleForm';
import ScheduleSuccess from '../components/ScheduleSuccess';

export default function SchedulePage() {
  const [step, setStep] = useState(0);
  const location = useLocation();
  
  // Pega o médico vindo da navegação
  const doctor = location.state?.doctor;

  // Guarda os dados (Data e Hora) para passar entre as telas
  const [scheduleData, setScheduleData] = useState({
    date: '',
    time: ''
  });

  // Proteção: Se não tiver médico, volta para a lista
  if (!doctor) {
    return <Navigate to="/specialists" replace />;
  }

  return (
    <>
      {/* PASSO 0: CALENDÁRIO */}
      {step === 0 && (
        <Schedule 
          doctor={doctor} 
          onNext={(dateString, timeString) => {
            // Salva os dados recebidos do calendário
            setScheduleData({ date: dateString, time: timeString });
            // AVANÇA PARA O FORMULÁRIO (Passo 1)
            setStep(1); 
          }} 
        />
      )}

      {/* PASSO 1: FORMULÁRIO DE PAGAMENTO */}
      {step === 1 && (
        <ScheduleForm 
          doctor={doctor}
          scheduleData={scheduleData}
          onBack={() => setStep(0)} // Volta para o calendário
          onConfirm={() => setStep(2)} // Avança para o Sucesso
        />
      )}

      {/* PASSO 2: SUCESSO */}
      {step === 2 && (
        <ScheduleSuccess doctor={doctor} scheduleData={scheduleData} />
      )}
    </>
  );
}