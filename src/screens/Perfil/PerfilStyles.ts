import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
  },
  header: {
    backgroundColor: '#007bff',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    // Eliminamos los bordes redondeados para que el fondo azul ocupe todo el ancho
    // borderBottomLeftRadius: 40,
    // borderBottomRightRadius: 40,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  profileImageContainer: {
    position: 'absolute',
    top: 140,
    left: width / 2 - 50, // Centrado horizontalmente
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  changePictureText: {
    marginTop: 10,
    color: '#007bff',
    fontSize: 14,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  form: {
    marginTop: 90,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    color: '#555',
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f0f4f8',
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  updateButton: {
    backgroundColor: '#4a4a4a',
    paddingVertical: 15,
    borderRadius: 25,
    marginHorizontal: 20,
    marginTop: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default styles;
