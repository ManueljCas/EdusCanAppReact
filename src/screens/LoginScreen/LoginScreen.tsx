import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import styles from './Login';

const registerUser = (email: string, password: string, role: string, name: string, profileImage: string) => {
  // Implement the function logic here
  console.log('User registered:', { email, password, role, name, profileImage });
};

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const savedEmail = await AsyncStorage.getItem('email');
        const savedPassword = await AsyncStorage.getItem('password');
        const rememberMe = await AsyncStorage.getItem('rememberMe');
        
        if (rememberMe === 'true') {
          setEmail(savedEmail || '');
          setPassword(savedPassword || '');
          setIsChecked(true);
        }
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };
    loadUserData();
  }, []);

  const handleLogin = async () => {
    try {
      const storedUser = await AsyncStorage.getItem(`user_${email}`);
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
          if (isChecked) {
            await AsyncStorage.setItem('email', email);
            await AsyncStorage.setItem('password', password);
            await AsyncStorage.setItem('rememberMe', 'true');
          } else {
            await AsyncStorage.removeItem('email');
            await AsyncStorage.removeItem('password');
            await AsyncStorage.setItem('rememberMe', 'false');
          }
          await AsyncStorage.setItem('lastUserEmail', email);
          navigation.navigate('HomeTabs', { userRole: user.role });
        } else {
          Alert.alert('Error', 'Contraseña incorrecta.');
        }
      } else {
        Alert.alert('Error', 'El usuario no está registrado.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      Alert.alert('Error', 'Hubo un problema al iniciar sesión.');
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola, Bienvenido de nuevo! 👋</Text>

      <Text style={styles.label}>Email</Text>
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#007bff" style={styles.icon} />
        <TextInput
          placeholder="example@gmail.com"
          style={styles.input}
          value={email.trim().toLowerCase()}
          onChangeText={setEmail}
        />
      </View>

      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#007bff" style={styles.icon} />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry={!isPasswordVisible}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)}>
          <Icon name={isPasswordVisible ? 'eye-slash' : 'eye'} size={20} color="#333" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.rememberMeContainer}>
        <TouchableOpacity onPress={() => setIsChecked(!isChecked)} style={styles.checkBox}>
          {isChecked ? <Text>✔️</Text> : <Text>⬜</Text>}
        </TouchableOpacity>
        <Text style={styles.rememberMeText}>Recuérdame</Text>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>¿No tienes una cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.signupLink}>Regístrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
