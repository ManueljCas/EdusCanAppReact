// src/components/Header.tsx
import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ title }: { title: string }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

export default Header;
