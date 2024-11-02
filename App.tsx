import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoadingScreen from './src/screens/LoadingScreen/LoadingScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen/RegisterScreen';
import HomeAlumno from './src/screens/HomeAlumno/HomeAlumno';
import AttendanceReportScreen from './src/screens/AttendanceReportScreen/AttendanceReportScreen'; // Nueva pantalla de reporte de asistencia
import HomeMaestro from './src/screens/HomeMaestro/HomeMaestro';
import BottomNavAlumno from './src/navigation/BottomNavAlumno';
import BottomNavMaestro from './src/navigation/BottomNavMaestro';
import CalendarScreen from './src/screens/CalendarScreen/CalendarScreen';
import Perfil from './src/screens/Perfil/Perfil';
import CerrarSesion from './src/screens/Settings/Settings';
import QRScreen from './src/screens/QRScreen/QRScreen';
import AddScreen from './src/screens/AddScreen/AddScreen';
import { UserProvider } from './src/context/UserContext';
import Notificaciones from './src/screens/Notificaciones/Notificaciones';
import ProfileMaestro from './src/screens/ProfileMaestro/Perfil';

type RootStackParamList = {
  Loading: undefined;
  Login: undefined;
  Register: undefined;
  HomeTabs: { userRole: string };
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
const HomeAlumnoStack = createStackNavigator(); // Stack exclusivo para HomeAlumno

function AlumnoStack() {
  return (
    <HomeAlumnoStack.Navigator>
      <HomeAlumnoStack.Screen name="HomeAlumno" component={HomeAlumno} options={{ headerShown: false }}/>
      <HomeAlumnoStack.Screen name="AttendanceReport" component={AttendanceReportScreen} options={{
              title: '',
              headerStyle: {
                elevation: 0,
              },
            }} />
      <HomeAlumnoStack.Screen 
    name="Perfil" 
    component={Perfil} 
    options={{ 
        title: '', 
        headerTransparent: true, // Hace que el encabezado sea transparente
    }} 
/>

    </HomeAlumnoStack.Navigator>
  );
}

function HomeTabs({ route }: { route: RouteProp<RootStackParamList, 'HomeTabs'> }) {
  const { userRole } = route.params;

  return userRole === 'alumno' ? (
    <Tab.Navigator tabBar={(props) => <BottomNavAlumno {...props} />}>
      <Tab.Screen name="Home" component={AlumnoStack} options={{ title: 'Inicio', headerShown: false }} />
      <Tab.Screen name="Notifications" component={Notificaciones} options={{ title: 'Notificaciones', headerShown: false }} />
      <Tab.Screen name="QR" component={QRScreen} options={{ title: 'QR', headerShown: false }} />
      <Tab.Screen name="Logout" component={CerrarSesion} options={{ title: 'Salir', headerShown: false }} />
    </Tab.Navigator>
  ) : (
    <Tab.Navigator tabBar={(props) => <BottomNavMaestro {...props} />}>
      <Tab.Screen name="Home" component={HomeMaestro} options={{ title: 'Inicio', headerShown: false }} />
      <Tab.Screen name="Calendar" component={CalendarScreen} options={{ title: 'Calendario', headerShown: false }} />
      <Tab.Screen name="Add" component={AddScreen} options={{ title: 'Agregar', headerShown: false }} />
      <Tab.Screen name="Logout" component={CerrarSesion} options={{ title: 'Salir', headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Loading">
          <Stack.Screen
            name="Loading"
            component={LoadingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: 'Iniciar sesión', headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#f9f9f9', 
                elevation: 0,
              },
            }}
          />
          <Stack.Screen
            name="HomeTabs"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
