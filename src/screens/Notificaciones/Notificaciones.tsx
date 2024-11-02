import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './NotificacionesStyles';
import { useUser } from '../../context/UserContext';

const Notificaciones: React.FC = () => {
  const { user } = useUser();

  // Datos ficticios de ejemplo para las notificaciones
  const notifications = [
    { id: 1, title: 'Nueva tarea', time: '08:30 am', description: 'Tienes una nueva tarea asignada en Matemáticas' },
    { id: 2, title: 'Recordatorio', time: '09:15 am', description: 'Próxima clase de Física en 15 minutos' },
    { id: 3, title: 'Actualización', time: '11:00 am', description: 'La clase de Química se reprogramó para el próximo lunes' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: user?.profileImage }}
          style={styles.profilePic}
        />
        <View style={styles.userDetails}>
          <Text numberOfLines={1} style={styles.userName}>{user?.name}</Text>
          <Text numberOfLines={1} style={styles.userEmail}>{user?.email}</Text>
        </View>
      </View>

      <Text style={styles.title}>Notificaciones</Text>

      {notifications.map((notification) => (
        <View key={notification.id} style={styles.notificationCard}>
          <View style={styles.notificationDetails}>
            <Text numberOfLines={1} style={styles.notificationTitle}>{notification.title}</Text>
            <Text numberOfLines={2} style={styles.notificationDescription}>{notification.description}</Text>
          </View>
          <Text style={styles.notificationTime}>{notification.time}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Notificaciones;
