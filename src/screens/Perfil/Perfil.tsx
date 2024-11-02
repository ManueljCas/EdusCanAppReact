import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './PerfilStyles';
import { useUser } from '../../context/UserContext';

const Perfil = () => {
  const { user } = useUser();

  return (
    <View style={styles.container}>
      {/* Encabezado con color de fondo */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Editar Perfil</Text>
      </View>

      {/* Imagen de perfil superpuesta */}
      <View style={styles.profileImageContainer}>
        <Image source={{ uri: user?.profileImage }} style={styles.profileImage} />
        <Text style={styles.changePictureText}>Cambiar foto</Text>
      </View>

      {/* Campos de perfil */}
      <View style={styles.form}>
        <Text style={styles.label}>Nombre de usuario</Text>
        <TextInput style={styles.input} value={user?.name} editable={true} />

        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput style={styles.input} value={user?.email} editable={false} />

        <Text style={styles.label}>Universidad</Text>
        <TextInput style={styles.input} value={user?.university} editable={false} />

        <Text style={styles.label}>Grupo</Text>
        <TextInput style={styles.input} value={user?.group} editable={false} />

      </View>

      {/* Botón de actualización */}
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Actualizar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Perfil;
