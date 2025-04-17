import React from 'react';
import { StatusBar, ImageBackground, SafeAreaView, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../css/About.styles.ts';
import { useNavigation } from '@react-navigation/native';

const About: React.FC = () => {
  const navigation: any = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
   <>
   <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity
                style={styles.backButton}
                activeOpacity={0.8}
                onPress={handleBack}
                accessibilityLabel="Go back"
                accessibilityRole="button"
              >
                <Image
                  source={require('../../../assets/images/back-arrow.png')}
                  style={styles.backIcon}
                />
              </TouchableOpacity>
            <View style={styles.logoContainer}>
              <Image
                source={require('../../../assets/images/stushlogo.png')}
                style={styles.logoImage}
                resizeMode="contain"
              />
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.heading}>TELL US ABOUT YOURSELF</Text>

              <TextInput
                placeholder="Date of Birth"
                placeholderTextColor="#8D8E99"
                style={styles.input}
              />

              <TextInput
                placeholder="Home Address"
                placeholderTextColor="#8D8E99"
                style={styles.input}
              />

              <TouchableOpacity style={styles.nextButton}>
                <Text style={styles.nextButtonText}>Next</Text>
              </TouchableOpacity>

              <View style={styles.signInContainer}>
                <Text style={styles.signInText}>
                  Already have an account?{' '}
                  <Text
                    style={styles.signInLink}
                    onPress={() => navigation?.navigate('Login')}>
                    Sign In
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
      </>
  );
};

export default About;
