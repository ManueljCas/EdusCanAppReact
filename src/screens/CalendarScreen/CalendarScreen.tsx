import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import styles from './Calendar';
import modalStyles from './ModalStyles';
import QRCodeScannerModal from './QRCodeScannerModal'; // Importa el nuevo modal para el escáner

const CalendarScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [qrModalVisible, setQRModalVisible] = useState(false);

  const onDayPress = (day: DateData) => {
    setSelectedDate(day.dateString);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openQRScanner = () => {
    setModalVisible(false); // Cierra la modal actual
    setQRModalVisible(true); // Abre la modal de escáner de QR
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Septiembre 2024</Text>

      <Calendar
        onDayPress={onDayPress}
        markedDates={{
          [selectedDate || '']: { selected: true, marked: true, selectedColor: '#007bff' },
        }}
        style={styles.calendar}
        theme={{
          selectedDayBackgroundColor: '#007bff',
          todayTextColor: '#007bff',
          arrowColor: '#007bff',
          textSectionTitleColor: '#000',
          dayTextColor: '#2d4150',
          monthTextColor: '#000',
          selectedDayTextColor: '#fff',
          dotColor: '#007bff',
          selectedDotColor: '#ffffff',
        }}
      />

      <Text style={styles.noAttendanceText}>¡No se ha pasado lista!</Text>

      <TouchableOpacity style={styles.button} onPress={openModal}>
        <Text style={styles.buttonText}>Pasar lista</Text>
      </TouchableOpacity>

      {/* Modal para mostrar la imagen del QR */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={modalStyles.modalOverlay}>
          <View style={modalStyles.modalContainer}>
            <Text style={modalStyles.modalTitle}>Escanee su código QR</Text>
            <View style={modalStyles.qrCodeContainer}>
              <Image
                source={require('../../../assets/Scan.jpg')}
                style={modalStyles.qrImage}
                resizeMode="contain"
              />
            </View>
            <TouchableOpacity style={modalStyles.scanButton} onPress={openQRScanner}>
              <Text style={modalStyles.scanButtonText}>Scan QR Code</Text>
            </TouchableOpacity>
            <TouchableOpacity style={modalStyles.closeButton} onPress={closeModal}>
              <Text style={modalStyles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal para el escáner de QR */}
      <QRCodeScannerModal
        visible={qrModalVisible}
        onClose={() => setQRModalVisible(false)}
      />
    </View>
  );
};

export default CalendarScreen;
