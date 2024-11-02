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
    left: width / 2 - 50,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#fff',
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
  },
  updateButton: {
    backgroundColor: '#4a4a4a',
    paddingVertical: 15,
    borderRadius: 25,
    marginHorizontal: 20,
    marginTop: 30,
    alignItems: 'center',
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  noDataText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default styles;
