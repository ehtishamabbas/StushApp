// src/screens/auth/SplashScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import splashScreenStyles from '../../css/SplashScreen.styles';

type SplashScreenProps = {
  navigation: StackNavigationProp<any>;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if user is already logged in by looking for auth token
    const checkAuthStatus = async () => {
      try {
        // Add a delay to show the splash screen (you can adjust or remove this)
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Check for authentication token
        // const token = await secureGet('auth_token');

        // // Navigate to appropriate screen
        // if (token) {
        //   // If token exists, verify it with your backend and navigate accordingly
        //   // For now, we'll just navigate to Home
        //   navigation.replace('Home');
        // } else {
          // No token found, navigate to Login
          // navigation.replace('Login');
        // }
      } catch (error) {
        console.error('Error during auth check:', error);
        navigation.replace('Login');
      }
    };

    checkAuthStatus();
  }, [navigation, dispatch]);

  return (
    <View style={splashScreenStyles.container}>
      {/* Logo */}
      <Image
        source={require('../../assets/stush-logo.png')}
        style={splashScreenStyles.logo}
        resizeMode="contain"
      />

      {/* App name */}
      <Text style={splashScreenStyles.appName}>Stush</Text>

      {/* Tagline */}
      <Text style={splashScreenStyles.tagline}>Access your earnings when you need them</Text>
    </View>
  );
};


export default SplashScreen;
