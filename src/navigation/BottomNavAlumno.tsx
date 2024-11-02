import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import styles from './NavAlumno';

const icons = ['home', 'bell', 'qrcode', 'cog'];

const BottomNav: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [translateY] = useState(new Animated.Value(0));

  const onPressIcon = (index: number, routeName: string) => {
    navigation.navigate(routeName);
    setSelectedIndex(index);

    // Reinicia la animación y eleva el ícono
    Animated.timing(translateY, {
      toValue: -20, // Elevar hacia arriba
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const icon = icons[index];

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => onPressIcon(index, route.name)}
            style={styles.tabButton}
          >
            <Animated.View
              style={[
                selectedIndex === index ? styles.selectedIcon : null,
                {
                  transform: [{ translateY: selectedIndex === index ? translateY : 0 }],
                },
              ]}
            >
              <Icon name={icon} size={24} color={selectedIndex === index ? '#ffffff' : '#222'} />
            </Animated.View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNav;
