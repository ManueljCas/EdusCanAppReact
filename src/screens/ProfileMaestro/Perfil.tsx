import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PerfilMaestro: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil del Maestro</Text>
            {/* Aquí puedes agregar más componentes y lógica para el perfil del maestro */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default PerfilMaestro;