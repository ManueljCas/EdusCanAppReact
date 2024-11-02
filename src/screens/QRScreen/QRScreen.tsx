import React from 'react';
import { View, Text, Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import styles from './QR';
import { useUser } from '../../context/UserContext';

const QRScreen: React.FC = () => {
  const { user } = useUser();

  // Concatenar los datos en formato JSON para el código QR
  const qrValue = JSON.stringify({
    name: user?.name,
    email: user?.email,
    group: user?.group,
  });

  return (
    <View style={styles.container}>
      {/* Contenedor estilizado de la imagen de perfil */}
      <View style={styles.profileContainer}>
        <Image source={{ uri: user?.profileImage }} style={styles.profileImage} />
      </View>

      {/* Información del usuario */}
      <Text style={styles.name}>{user?.name}</Text>
      <Text style={styles.university}>Universidad Tecnológico de Cancún</Text>

      {/* Contenedor del Código QR */}
      <View style={styles.qrContainer}>
        <QRCode value={qrValue} size={180} />
      </View>

      {/* Mensaje para escanear el código */}
      <Text style={styles.scanMessage}>Escanea este código para obtener la información del usuario</Text>
    </View>
  );
};

export default QRScreen;
