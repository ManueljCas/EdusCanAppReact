import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80, // Puedes aumentar la altura para más espacio
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedIcon: {
    width: 50, // Tamaño fijo para el círculo, ajusta según necesites
    height: 50,
    backgroundColor: '#007bff', // Color de fondo para destacar
    borderRadius: 25, // Hace que sea completamente circular
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8, // Sombra en Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

export default styles;
