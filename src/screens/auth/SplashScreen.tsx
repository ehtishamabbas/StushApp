import React, { useEffect, useRef } from 'react';
import { Text, Image, ImageBackground, useWindowDimensions, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

type SplashScreenProps = {
  navigation: StackNavigationProp<any>;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const { width, height } = useWindowDimensions();
  // Dynamically import styles with current dimensions
  const styles = require('../../css/SplashScreen.styles').default(width, height);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [navigation, dispatch, fadeAnim]);

  return (
    <ImageBackground
      source={require('../../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <SafeAreaView style={styles.container}>
        <Animated.View style={[styles.contentContainer, { opacity: fadeAnim }]}>
          <Image
            source={require('../../../assets/images/stush-logo.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
          <Text style={styles.tagline}>
            Because Life Doesn't Wait{'\n'}for Payday
          </Text>
        </Animated.View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SplashScreen;
