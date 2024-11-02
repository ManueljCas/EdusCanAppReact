import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Register';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../context/UserContext';

const RegisterScreen = () => {
  const navigation = useNavigation<any>();
  const { registerUser } = useUser();
  const [selectedRole, setSelectedRole] = useState('');
  const [group, setGroup] = useState('');
  const [university, setUniversity] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profileImage, setProfileImage] = useState('https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png');

  const validateForm = () => {
    if (!name || !email || !password || !confirmPassword || !selectedRole || !university || (selectedRole === 'alumno' && !group)) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return false;
    }

    // Validar correo electrónico (sin mayúsculas y sin espacios)
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)) {
      Alert.alert('Error', 'Por favor, ingresa un correo válido en minúsculas y sin espacios.');
      return false;
    }

    // Validar longitud de la contraseña
    if (password.length < 8) {
      Alert.alert('Error', 'La contraseña debe tener al menos 8 caracteres.');
      return false;
    }

    // Validar coincidencia de contraseñas
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return false;
    }

    return true;
  };

  const handleRegister = async () => {
    if (validateForm()) {
      try {
        const existingUser = await AsyncStorage.getItem(`user_${email}`);
        if (existingUser) {
          Alert.alert('Registro fallido', 'Este correo ya está registrado.');
        } else {
          const newUser = {
            email,
            password,
            role: selectedRole,
            name,
            university,
            profileImage,
            ...(selectedRole === 'alumno' && { group }),
          };
          await AsyncStorage.setItem(`user_${email}`, JSON.stringify(newUser));
          Alert.alert('Registro exitoso', 'Tu cuenta ha sido creada. Ahora inicia sesión.');
          navigation.navigate('Login');
        }
      } catch (error) {
        console.error('Error al registrar usuario:', error);
      }
    }
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} // Ajuste para Android
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <Text style={styles.title}>Crea una cuenta</Text>
          <Text style={styles.subtitle}>Únete y accede a contenido educativo exclusivo</Text>

          <View style={styles.inputContainer}>
            <Icon name="user" size={20} color="#007bff" style={styles.icon} />
            <TextInput
              placeholder="Ingresa tu nombre completo"
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="envelope" size={20} color="#007bff" style={styles.icon} />
            <TextInput
              placeholder="Ingresa tu correo electrónico"
              style={styles.input}
              value={email.trim().toLowerCase()} // Convierte el correo a minúsculas y sin espacios
              onChangeText={(text) => setEmail(text.trim().toLowerCase())}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="university" size={20} color="#007bff" style={styles.icon} />
            <TextInput
              placeholder="Ingresa tu universidad"
              style={styles.input}
              value={university}
              onChangeText={setUniversity}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="#007bff" style={styles.icon} />
            <TextInput
              placeholder="Ingresa tu contraseña"
              secureTextEntry={!passwordVisible}
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Icon name={passwordVisible ? 'eye-slash' : 'eye'} size={20} color="#333" style={styles.icon} />
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="#007bff" style={styles.icon} />
            <TextInput
              placeholder="Confirma tu contraseña"
              secureTextEntry={!confirmPasswordVisible}
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
              <Icon name={confirmPasswordVisible ? 'eye-slash' : 'eye'} size={20} color="#333" style={styles.icon} />
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <Icon name="id-badge" size={25} color="#007bff" style={styles.icon} />
            <View style={{ flex: 1 }}>
              <Picker
                selectedValue={selectedRole}
                onValueChange={(itemValue) => setSelectedRole(itemValue)}
                style={[styles.input, styles.pickerStyle]}
              >
                <Picker.Item label="Seleccione su rol" value="" />
                <Picker.Item label="Alumno" value="alumno" />
                <Picker.Item label="Maestro" value="maestro" />
              </Picker>
            </View>
          </View>

          {selectedRole === 'alumno' && (
            <View style={styles.inputContainer}>
              <Icon name="group" size={20} color="#007bff" style={styles.icon} />
              <TextInput
                placeholder="Ingresa tu grupo"
                style={styles.input}
                value={group}
                onChangeText={setGroup}
              />
            </View>
          )}

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Regístrate</Text>
          </TouchableOpacity>

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>¿Ya tienes una cuenta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginLink}>Iniciar sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
