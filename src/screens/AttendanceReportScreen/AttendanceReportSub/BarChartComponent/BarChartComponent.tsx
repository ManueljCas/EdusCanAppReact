import React from 'react';
import { View, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import styles from './BarChartComponentStyle';

const screenWidth = Dimensions.get('window').width;

const BarChartComponent: React.FC = () => {
  const data = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'],
    datasets: [
      {
        data: [80, 90, 75, 85, 88],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.chartTitle}>Porcentaje de Asistencia</Text>
      <BarChart
        style={styles.chart}
        data={data}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(63, 81, 181, ${opacity})`,
        }}
        yAxisLabel="%"
        yAxisSuffix=""
        fromZero
      />
    </View>
  );
};

export default BarChartComponent;
