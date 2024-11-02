import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import modalStyles from './ModalStyles';

interface QRCodeScannerModalProps {
  visible: boolean;
  onClose: () => void;
}

const QRCodeScannerModal: React.FC<QRCodeScannerModalProps> = ({ visible, onClose }) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    const requestCameraPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
      if (status !== 'granted') {
        Alert.alert('Permiso denegado', 'Se necesita acceso a la cámara para escanear códigos QR.');
      }
    };

    requestCameraPermission();
  }, []);

  if (hasPermission === null) {
    return <Text>Solicitando permisos...</Text>;
  }

  if (hasPermission === false) {
    return <Text>Se requiere acceso a la cámara.</Text>;
  }

  return (
    <Modal animationType="slide" transparent={false} visible={visible} onRequestClose={onClose}>
      <View style={modalStyles.modalOverlay}>
        <BarCodeScanner style={modalStyles.qrCodeContainer} onBarCodeScanned={(e: BarCodeScannerResult) => {
          console.log('Código QR escaneado:', e.data);
          onClose();
        }}>
          <TouchableOpacity style={modalStyles.closeButton} onPress={onClose}>
            <Text style={modalStyles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </BarCodeScanner>
      </View>
    </Modal>
  );
};

export default QRCodeScannerModal;
