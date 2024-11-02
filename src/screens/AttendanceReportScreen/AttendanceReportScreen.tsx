import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView, Dimensions } from 'react-native';
import { BarChart, PieChart } from 'react-native-chart-kit';
import styles from './AttendanceReportScreenStyle';
import { useUser } from '../../context/UserContext';

const AttendanceReport = () => {
  const screenWidth = Dimensions.get('window').width;
  const { user } = useUser();

  // Datos para la gráfica de barras
  const barData = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'],
    datasets: [
      {
        data: [80, 90, 75, 85, 88],
      },
    ],
  };

  // Datos para la gráfica circular
  const pieData = [
    {
      name: 'Días Asistidos',
      population: 9,
      color: '#4FC3F7',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Días Ausentes',
      population: 3,
      color: '#B3E5FC',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        
        <View style={styles.studentInfo}>
          {user && (
            <Image
              source={{
                uri: user.profileImage,
              }}
              style={styles.profilePic}
            />
          )}
          <View style={styles.studentDetails}>
            {user && <Text style={styles.studentName}>{user.name}</Text>}
            {user && <Text style={styles.studentEmail}>{user.email}</Text>}
          </View>
        </View>
      </View>

      {/* Reporte de Asistencia */}
      <Text style={styles.title}>Reporte de asistencias</Text>

      {/* Resumen de clase */}
      <View style={styles.classSummary}>
        <View style={styles.classIcon}>
          <Text style={styles.classIconText}>A</Text>
        </View>
        <View style={styles.classInfo}>
          <Text style={styles.className}>Aplicaciones Móviles Integrales</Text>
        </View>
      </View>

      <Text style={styles.attendanceText}>
        Porcentaje total de Asistencia: <Text style={styles.percentageText}>85.6%</Text>
      </Text>

      {/* Gráfico de Barras */}
      <View style={styles.chartContainer}>
        <BarChart
          data={barData}
          width={screenWidth - 40} // Ancho total de la pantalla con padding
          height={220}
          yAxisLabel=""
          yAxisSuffix="%"
          chartConfig={{
            backgroundColor: '#f1f1f1',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(63, 81, 181, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
        />
      </View>

      {/* Gráfico Circular */}
      <View style={styles.chartContainer}>
        <PieChart
          data={pieData}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>

      {/* Información adicional */}
      <View style={styles.donutInfo}>
        <Text style={styles.infoText}>Total Clases: 12</Text>
        <Text style={styles.infoText}>Días Asistidos: 8</Text>
        <Text style={styles.infoText}>Días de Ausencia: 4</Text>
        <Text style={styles.infoText}></Text>
        <Text style={styles.infoText}></Text>
        <Text style={styles.infoText}></Text>
      </View>
    </ScrollView>
  );
};

export default AttendanceReport;
