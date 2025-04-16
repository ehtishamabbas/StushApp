// src/screens/auth/LoginScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import loginScreenStyles from '../../css/LoginScreen.styles';

const LoginScreen = () => {
  return (
    <View style={loginScreenStyles.container}>
      <Text style={loginScreenStyles.text}>Login Screen</Text>
      <Text style={loginScreenStyles.subtext}>Enter your credentials to continue</Text>
    </View>
  );
};


export default LoginScreen;