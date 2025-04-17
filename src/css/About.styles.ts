import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';

const {width, height} = Dimensions.get('window');

const baseWidth = 414;
const baseHeight = 896;

const widthScale = width / baseWidth;
const heightScale = height / baseHeight;
const scale = Math.min(widthScale, heightScale);

const normalize = (size: number) => Math.round(size * scale);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#091522',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  logoContainer: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: normalize(140),
    height: normalize(80),
    marginTop: normalize(5),
  },
  formOuterContainer: {
    width: '100%',
    height: '80%',
    justifyContent: 'flex-start',
  },
  formContainer: {
    width: '100%',
    backgroundColor: 'rgba(9, 22, 37, 0.51)',
    borderTopLeftRadius: normalize(30),
    borderTopRightRadius: normalize(30),
    paddingHorizontal: normalize(45),
    paddingTop: normalize(50),
    paddingBottom: normalize(20),
    height: '100%',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.15)',
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  heading: {
    fontSize: normalize(25),
    fontWeight: '900',
    letterSpacing: 1.2,
    color: '#FFFFFF',
    marginBottom: normalize(30),
    textAlign: 'left',
    flexWrap: 'wrap',
    width: '100%',
    fontFamily: 'Aquire',
    lineHeight: normalize(32),
  },
  header:{
      textAlign: 'center',
      fontWeight: '400',
      fontSize: normalize(12),
      color: '#FFFFFF',
      lineHeight: normalize(24),

  },
  headerr:{
    textAlign: 'center',
    fontWeight: '400',
    fontSize: normalize(12),
    color: '#FFFFFF',
    lineHeight: normalize(37),

},
  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: normalize(25),
    height: normalize(50),
    paddingHorizontal: normalize(20),
    color: '#FFFFFF',
    marginBottom: normalize(15),
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  nextButton: {
    backgroundColor: '#1F75FE',
    borderRadius: normalize(25),
    height: normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(110),
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: normalize(16),
    fontWeight: '600',
  },
  signInContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: '20%',
    marginBottom: normalize(30),
  },
  signInText: {
    color: '#AAAAAA',
    fontSize: normalize(16),
  },
  signInLink: {
    color: '#1F75FE',
    fontWeight: '600',
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
});

export default styles;
