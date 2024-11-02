import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f9fc', // Fondo suave para mayor contraste
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  profileContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#4facfe',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
  university: {
    fontSize: 16,
    color: '#4facfe', // Color azul para el nombre de la universidad
    fontWeight: '600',
    marginBottom: 25,
    textAlign: 'center',
  },
  qrContainer: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
    marginBottom: 20,
  },
  scanMessage: {
    fontSize: 14,
    color: '#666',
    marginTop: 15,
    textAlign: 'center',
    width: '80%',
    lineHeight: 18,
  },
});

export default styles;
