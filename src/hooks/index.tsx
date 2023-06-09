import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

export default function AppProvider ({ children }) {
  return (
    <View>
      <NavigationContainer>{children}</NavigationContainer>
    </View>
  );
  
};
