import React, { useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import Schedule from '../components/Schedule';
import ScheduleForm from '../components/ScheduleForm';
import ScheduleSuccess from '../components/ScheduleSuccess';

export default function SchedulePage() {
  const [step, setStep] = useState(0);
  const location = useLocation();
  
  // Pega o médico enviado via rota. Se não tiver (acesso direto pelo link), volta pra especialistas.
  const doctor = location.state?.doctor;

  // Dados do agendamento (data/hora) que passarão de um passo para o outro
  const [scheduleData, setScheduleData] = useState({
    date: '',
    time: ''
  });

  if (!doctor) {
    return <Navigate to="/specialists" replace />;
  }

  return (
    <>
      {step === 0 && (
        <Schedule 
          doctor={doctor} 
          onNext={(date, time) => {
            setScheduleData({ date, time });
            setStep(1);
          }} 
        />
      )}
      {step === 1 && (
        <ScheduleForm 
          doctor={doctor}
          scheduleData={scheduleData}
          onBack={() => setStep(0)}
          onConfirm={() => setStep(2)} 
        />
      )}
      {step === 2 && (
        <ScheduleSuccess doctor={doctor} scheduleData={scheduleData} />
      )}
    </>
  );
}