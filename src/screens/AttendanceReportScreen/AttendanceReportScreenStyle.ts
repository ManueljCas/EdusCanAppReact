import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4FC3F7',
    textAlign: 'center',
  },
  studentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  studentDetails: {
    justifyContent: 'center',
  },
  studentName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  studentEmail: {
    fontSize: 14,
    color: '#777',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  classSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  classIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4caf50',
    marginRight: 15,
  },
  classIconText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  classInfo: {
    flex: 1,
  },
  className: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  attendanceText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  percentageText: {
    color: '#4FC3F7',
    fontWeight: 'bold',
  },
  chartContainer: {
    marginVertical: 10,
    borderRadius: 16,
    alignItems: 'center',
  },
  donutInfo: {
    marginTop: 20,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
});

export default styles;
