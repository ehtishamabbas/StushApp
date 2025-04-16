// src/screens/auth/SplashScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

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
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../assets/stush-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* App name */}
      <Text style={styles.appName}>Stush</Text>

      {/* Tagline */}
      <Text style={styles.tagline}>Access your earnings when you need them</Text>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C3E50', // Change to your brand color
    padding: 20,
  },
  logo: {
    width: width * 0.4,
    height: width * 0.4,
    marginBottom: 20,
  },
  appName: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 16,
    color: '#ECEFF1',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default SplashScreen;
