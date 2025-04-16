// src/screens/employee/HomeScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import homeScreenStyles from '../../css/HomeScreen.styles';

const HomeScreen = () => {
  return (
    <View style={homeScreenStyles.container}>
      <Text style={homeScreenStyles.text}>Home Screen</Text>
      <Text style={homeScreenStyles.subtext}>Welcome to Stush App</Text>
    </View>
  );
};


export default HomeScreen;