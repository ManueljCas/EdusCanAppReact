import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    paddingHorizontal: 20,
    paddingTop: 90,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderBottomWidth: 3,
    borderBottomColor: '#4facfe',
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#4facfe',
    marginRight: 15,
  },
  userDetails: {
    justifyContent: 'center',
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    flexShrink: 1,
  },
  userEmail: {
    fontSize: 14,
    color: '#666666',
    flexShrink: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    borderLeftWidth: 4,
    borderLeftColor: '#4facfe',
  },
  notificationDetails: {
    flex: 1,
    marginRight: 10,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4facfe',
    marginBottom: 5,
  },
  notificationDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
    minWidth: 60,
  },
});

export default styles;
