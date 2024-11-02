import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Alumno';
import Header from '../../components/Header';
import { useUser } from '../../context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const HomeAlumno = () => {
  const navigation = useNavigation<any>();
  const { user, loadUser } = useUser();
  const [loading, setLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar el acordeón
  const [notifications, setNotifications] = useState([
    { id: '1', title: 'Aplicaciones Móviles...', time: '09:30 am' },
    { id: '2', title: 'Aplicaciones Web...', time: '10:40 am' },
    { id: '3', title: 'Inglés...', time: '11:45 am' },
    { id: '4', title: 'Creación de Videojuegos...', time: '12:10 pm' },
  ]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const savedEmail = await AsyncStorage.getItem('lastUserEmail');
        if (savedEmail) {
          await loadUser(savedEmail); // Carga el usuario específico por su email
        }
      } catch (error) {
        console.error("Error al cargar el usuario:", error);
      } finally {
        setLoading(false); // Termina la carga
      }
    };

    fetchUser();
  }, []);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  const getInitials = (name: string) => name.charAt(0).toUpperCase();

  if (loading) {
    return <ActivityIndicator size="large" color="#007bff" />;
  }

  if (!user) {
    return <Text>No se encontró información del usuario.</Text>;
  }

  return (
    <View style={styles.container}>
      <Header title="" />
      
      {user.university ? (
        <View style={styles.universityContainer}>
          <Icon name="university" style={styles.universityIcon} />
          <Text style={styles.universityText}>{user.university}</Text>
        </View>
      ) : null}
      
      <View style={styles.studentInfo}>
        <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
      </View>

      <Text style={styles.welcomeMessage}>Hi, {user.name}.</Text>
      <Text style={styles.welcomeSubtitle}>Bienvenido a tus clases</Text>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option} onPress={toggleAccordion}>
          <Text style={styles.optionText}>Clases Hoy</Text>
          <Text style={styles.arrow}>{isExpanded ? '˅' : '›'}</Text>
        </TouchableOpacity>
        
        {isExpanded && (
          <View style={styles.notificationContainer}>
            <FlatList
              data={notifications}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.notificationItem}>
                  <View style={styles.initialCircle}>
                    <Text style={styles.initialText}>{getInitials(item.title)}</Text>
                  </View>
                  <View style={styles.notificationContent}>
                    <Text style={styles.notificationText}>{item.title}</Text>
                    <Text style={styles.notificationTime}>{item.time}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        )}

      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate('AttendanceReport')}
      >
        <Text style={styles.optionText}>Reporte de asistencia</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Otros</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeAlumno;
