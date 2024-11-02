import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import styles from './AddScreenStyles';
import { RootTabParamList } from './RootTabParamList'; // Importa el tipo de tus Tabs

type AddScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, 'Add'>;

const AddScreen: React.FC = () => {
  const navigation = useNavigation<AddScreenNavigationProp>();
  const [groupName, setGroupName] = useState('');
  const [subject, setSubject] = useState('');
  const [students, setStudents] = useState('');
  const [sessions, setSessions] = useState('');

  const handleSaveGroup = async () => {
    if (!groupName || !subject || !students || !sessions) {
      Alert.alert('Error', 'Por favor, completa todos los campos');
      return;
    }

    const newGroup = { groupName, subject, students, sessions };

    try {
      const storedGroups = await AsyncStorage.getItem('groups');
      const groups = storedGroups ? JSON.parse(storedGroups) : [];

      groups.push(newGroup);
      await AsyncStorage.setItem('groups', JSON.stringify(groups));
      Alert.alert('Éxito', 'Grupo creado correctamente');

      // Limpia los campos después de la creación
      setGroupName('');
      setSubject('');
      setStudents('');
      setSessions('');

      // Navega a la pestaña 'Home'
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error al guardar el grupo:', error);
      Alert.alert('Error', 'No se pudo crear el grupo');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar un grupo</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre del Grupo"
        value={groupName}
        onChangeText={setGroupName}
      />
      <TextInput
        style={styles.input}
        placeholder="Materia"
        value={subject}
        onChangeText={setSubject}
      />
      <TextInput
        style={styles.input}
        placeholder="Cantidad de estudiantes"
        keyboardType="numeric"
        value={students}
        onChangeText={setStudents}
      />
      <TextInput
        style={styles.input}
        placeholder="Duración de sesiones"
        keyboardType="numeric"
        value={sessions}
        onChangeText={setSessions}
      />

      <TouchableOpacity style={styles.button} onPress={handleSaveGroup}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddScreen;
