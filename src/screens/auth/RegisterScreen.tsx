// src/screens/auth/RegisterScreen.tsx
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../css/RegisterScreen.styles';

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigation: any = useNavigation();

  // Clear errors when user starts typing
  const clearError = (field: 'firstName' | 'lastName') => {
    if (errors[field]) {
      setErrors({...errors, [field]: ''});
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {firstName: '', lastName: ''};

    // First name validation
    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    } else if (firstName.trim().length < 2) {
      newErrors.firstName = 'First name is too short';
      isValid = false;
    } else if (firstName.trim().length > 30) {
      newErrors.firstName = 'First name is too long';
      isValid = false;
    } else if (!/^[a-zA-Z\s'-]+$/.test(firstName.trim())) {
      newErrors.firstName = 'First name contains invalid characters';
      isValid = false;
    }

    // Last name validation
    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    } else if (lastName.trim().length < 2) {
      newErrors.lastName = 'Last name is too short';
      isValid = false;
    } else if (lastName.trim().length > 30) {
      newErrors.lastName = 'Last name is too long';
      isValid = false;
    } else if (!/^[a-zA-Z\s'-]+$/.test(lastName.trim())) {
      newErrors.lastName = 'Last name contains invalid characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    Keyboard.dismiss();
    if (validateForm()) {
      setIsSubmitting(true);
      // Log the validated user details
      console.log('Registration details:', {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        timestamp: new Date().toISOString(),
      });
      navigation.navigate('About');
    } else {
      // Show the first error in an alert for accessibility
      const firstError = errors.firstName || errors.lastName;
      if (firstError) {
        Alert.alert('Registration Error', firstError);
      }
    }
    setIsSubmitting(false);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSignIn = () => {
    navigation.navigate('Login');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{flex: 1}}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
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
                accessibilityRole="button">
                <Image
                  source={require('../../../assets/images/back-arrow.png')}
                  style={styles.backIcon}
                />
              </TouchableOpacity>

              <View style={styles.logoContainer}>
                <Image
                  source={require('../../../assets/images/stushlogo.png')}
                  style={styles.logoImage}
                  accessibilityLabel="Stush Logo"
                />
              </View>
              <View style={styles.formContainer}>
                <View style={styles.formSubContainer}>
                  <Text style={styles.heading}>LET'S GET STARTED</Text>

                  <View style={styles.inputContainer}>
                    <TextInput
                      placeholder="First Name"
                      placeholderTextColor="rgba(141, 142, 153, 1)"
                      style={[
                        styles.input,
                        errors.firstName ? styles.inputError : null,
                      ]}
                      value={firstName}
                      onChangeText={text => {
                        setFirstName(text);
                        clearError('firstName');
                      }}
                      autoCapitalize="words"
                      returnKeyType="next"
                      maxLength={30}
                      accessibilityLabel="First Name"
                      accessibilityHint="Enter your first name"
                    />
                    {errors.firstName ? (
                      <Text style={styles.errorText}>{errors.firstName}</Text>
                    ) : null}
                  </View>

                  <View style={styles.inputContainer}>
                    <TextInput
                      placeholder="Last Name"
                      placeholderTextColor="rgba(141, 142, 153, 1)"
                      style={[
                        styles.input,
                        errors.lastName ? styles.inputError : null,
                      ]}
                      value={lastName}
                      onChangeText={text => {
                        setLastName(text);
                        clearError('lastName');
                      }}
                      autoCapitalize="words"
                      returnKeyType="done"
                      maxLength={30}
                      accessibilityLabel="Last Name"
                      accessibilityHint="Enter your last name"
                    />
                    {errors.lastName ? (
                      <Text style={styles.errorText}>{errors.lastName}</Text>
                    ) : null}
                  </View>

                  <TouchableOpacity
                    style={[
                      styles.nextButton,
                      isSubmitting ? styles.nextButtonDisabled : null,
                    ]}
                    activeOpacity={0.8}
                    onPress={handleNext}
                    disabled={isSubmitting}
                    accessibilityLabel="Next button"
                    accessibilityHint="Continue to the next step of registration">
                    {isSubmitting ? (
                      <ActivityIndicator color="#FFFFFF" />
                    ) : (
                      <Text style={styles.nextButtonText}>Next</Text>
                    )}
                  </TouchableOpacity>

                  <View style={styles.signInContainer}>
                    <Text style={styles.signInText}>
                      Already have an account?{' '}
                      <Text
                        style={styles.signInLink}
                        onPress={handleSignIn}
                        accessibilityRole="link"
                        accessibilityHint="Go to sign in screen">
                        Sign In
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;
