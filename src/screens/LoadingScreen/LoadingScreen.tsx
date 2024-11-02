// src/screens/LoadingScreen/LoadingScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';

// Define RootStackParamList if not already defined elsewhere
type RootStackParamList = {
  Login: undefined;
  // Add other routes here if needed
};

const LoadingScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login'); // Navega a la pantalla de inicio de sesión
    }, 3000); // 3000 ms = 3 segundos

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar el componente
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://www.emojiall.com/images/240/telegram/1f44b.gif' }}
        style={styles.logo}
      />
      <Text style={styles.text}>Cargando EduScan...</Text>
    </View>
  );
};

export default LoadingScreen;
