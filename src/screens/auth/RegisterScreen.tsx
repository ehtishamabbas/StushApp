// src/screens/auth/RegisterScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import registerScreenStyles from '../../css/RegisterScreen.styles';


const RegisterScreen = () => {
  return (
    <View style={registerScreenStyles.container}>
      <Text style={registerScreenStyles.text}>Register Screen</Text>
      <Text style={registerScreenStyles.subtext}>Create your account</Text>
    </View>
  );
};


export default RegisterScreen;