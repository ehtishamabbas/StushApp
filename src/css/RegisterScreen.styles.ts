// src/css/RegisterScreen.styles.ts
import { StyleSheet, Dimensions, Platform } from 'react-native';

const { height } = Dimensions.get('window');

const registerScreenStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#091522',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 40,
    left: 16,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 1)',
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 60 : 80, // Adjusted based on Figma spacing
  },
  logoImage: {
    width: 140, // Exact width from Figma
    height: 45, // Exact height from Figma
    resizeMode: 'contain',
  },
  formContainer: {
    marginTop: height * 0.15, // Positioned about 15% down from the logo
    paddingHorizontal: 16,
    backgroundColor: 'rgba(9, 21, 34, 0.16)',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 4,
    paddingTop: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.15)',
  },
  formSubContainer: {
    width: '90%',
    marginHorizontal: 'auto',
    alignSelf: 'center', // Added to center the container
  },
  heading: {
    fontSize: 24,
    fontFamily: 'Aquire',
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 30,
    textAlign: 'left',
    letterSpacing: 1.5,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 56,
    backgroundColor: 'rgba(41, 45, 50, 0.5)', // Dark semi-transparent as per Figma
    borderRadius: 44,
    paddingHorizontal: 16,
    color: '#FFFFFF',
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)', // Subtle border
  },
  inputError: {
    borderColor: '#FF3B30', // Red color for error
    borderWidth: 1,
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 16,
  },
  nextButton: {
    height: 56,
    backgroundColor: 'rgba(31, 117, 254, 1)',
    borderRadius: 44,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.15, // Adjusted spacing
    shadowColor: '#2E5CFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  nextButtonDisabled: {
    backgroundColor: 'rgba(31, 117, 254, 0.6)', // Lighter blue for disabled state
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  signInContainer: {
    marginTop: height * 0.04,
    alignItems: 'center',
    marginBottom: 30, // Added bottom margin for better spacing
  },
  signInText: {
    color: 'rgba(255, 255, 255, 1)', // Slightly transparent white
    fontSize: 14,
  },
  signInLink: {
    color: 'rgba(31, 117, 254, 1)',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});

export default registerScreenStyles;
