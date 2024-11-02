import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Modal, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import styles from './SettingsStyles';

// Define RootStackParamList si no está definido
type RootStackParamList = {
    Login: undefined;
    Perfil: undefined;
    // Agrega otras rutas aquí
};
import { StackNavigationProp } from '@react-navigation/stack';

const SettingsScreen: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [modalVisible, setModalVisible] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleLogout = async () => {
        Alert.alert(
            'Cerrar sesión',
            '¿Estás seguro de que deseas cerrar sesión?',
            [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Cerrar sesión', onPress: async () => {
                    await AsyncStorage.removeItem('currentUser');
                    navigation.navigate('Login');
                }},
            ],
        );
    };

    const handleChangePassword = () => {
        if (newPassword !== confirmNewPassword) {
            Alert.alert('Error', 'Las nuevas contraseñas no coinciden');
            return;
        }
        Alert.alert('Contraseña actualizada', 'Tu contraseña ha sido cambiada exitosamente');
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Configuraciones</Text>

            <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Perfil')}>
                <Icon name="user" size={24} color="#007bff" />
                <Text style={styles.optionText}>Editar Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => setModalVisible(true)}>
                <Icon name="lock" size={24} color="#007bff" />
                <Text style={styles.optionText}>Cambiar Contraseña</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => {/* Navegar a Modo Oscuro */}}>
                <Icon name="moon-o" size={24} color="#007bff" />
                <Text style={styles.optionText}>Modo Oscuro</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => {/* Navegar a Privacidad */}}>
                <Icon name="shield" size={24} color="#007bff" />
                <Text style={styles.optionText}>Privacidad</Text>   
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => {/* Navegar a Ayuda */}}>
                <Icon name="question-circle" size={24} color="#007bff" />
                <Text style={styles.optionText}>Ayuda</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => {/* Navegar a Acerca de la App */}}>
                <Icon name="info-circle" size={24} color="#007bff" />
                <Text style={styles.optionText}>Acerca de la App</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Icon name="sign-out" size={24} color="#fff" />
                <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
            </TouchableOpacity>
            
            

            {/* Modal para cambiar contraseña */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Cambiar Contraseña</Text>
                        <TextInput
                            placeholder="Contraseña actual"
                            secureTextEntry
                            style={styles.input}
                            value={currentPassword}
                            onChangeText={setCurrentPassword}
                        />
                        <TextInput
                            placeholder="Nueva contraseña"
                            secureTextEntry
                            style={styles.input}
                            value={newPassword}
                            onChangeText={setNewPassword}
                        />
                        <TextInput
                            placeholder="Confirmar nueva contraseña"
                            secureTextEntry
                            style={styles.input}
                            value={confirmNewPassword}
                            onChangeText={setConfirmNewPassword}
                        />
                        <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
                            <Text style={styles.buttonText}>Guardar Cambios</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.cancelButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default SettingsScreen;
