import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Specialists from './components/Specialists';
import Schedule from './components/Schedule';
import ScheduleForm from './components/ScheduleForm';
import ScheduleSuccess from './components/ScheduleSuccess';

function App() {
  const [step, setStep] = useState(0);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/specialists" element={<Specialists />} />
        <Route path="/schedule" element={
          step === 0 ? <Schedule onNext={() => setStep(1)} />
          : step === 1 ? <ScheduleForm onConfirm={() => setStep(2)} />
          : <ScheduleSuccess />
        } />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </>
  );
}

export default App;
