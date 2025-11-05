import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import AgendarScreen from '../screens/AgendarScreen';
import SelecionarDataScreen from '../screens/SelecionarDataScreen';
import FormularioAgendamentoScreen from '../screens/FormularioAgendamentoScreen';
import ConfirmacaoScreen from '../screens/ConfirmacaoScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Agendar" component={AgendarScreen} />
        <Stack.Screen name="SelecionarData" component={SelecionarDataScreen} />
        <Stack.Screen name="FormularioAgendamento" component={FormularioAgendamentoScreen} />
        <Stack.Screen name="Confirmacao" component={ConfirmacaoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
