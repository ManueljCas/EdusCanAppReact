import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import styles from './PieChartComponentStyle';

const screenWidth = Dimensions.get('window').width;

const PieChartComponent: React.FC = () => {
  const [percentage, setPercentage] = useState(0);
  
  useEffect(() => {
    let timer = setInterval(() => {
      setPercentage((prev) => (prev < 85 ? prev + 1 : prev));
    }, 20);
    return () => clearInterval(timer);
  }, []);

  const data = [
    { name: 'Asistido', population: percentage, color: '#4caf50', legendFontColor: '#333', legendFontSize: 15 },
    { name: 'Ausente', population: 100 - percentage, color: '#f44336', legendFontColor: '#333', legendFontSize: 15 },
  ];

  return (
    <View style={styles.container}>
      <PieChart
        data={data}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: () => '#4caf50',
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        center={[10, 0]}
        hasLegend={false}
      />
      <View style={styles.info}>
        <Text>Total Clases: 120</Text>
        <Text>Días Asistidos: {percentage}</Text>
        <Text>Días de Ausencia: {100 - percentage}</Text>
      </View>
    </View>
  );
};

export default PieChartComponent;
