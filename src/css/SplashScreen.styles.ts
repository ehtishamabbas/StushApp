import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const splashScreenStyles = StyleSheet.create({
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

export default splashScreenStyles;
