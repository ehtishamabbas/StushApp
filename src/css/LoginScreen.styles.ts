import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';

const {width, height} = Dimensions.get('window');

const baseWidth = 414;
const baseHeight = 896;

 const widthScale = width / baseWidth;
const heightScale = height / baseHeight;
const scale = Math.min(widthScale, heightScale);

const normalize = (size: number): number => Math.round(size * scale);

const loginScreenStyles = StyleSheet.create({
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
    height: '40%',
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
    height: '60%',
  },
  formContainer: {
    width: '100%',
    backgroundColor: 'rgba(9, 21, 34, 0.6)',
    borderTopLeftRadius: normalize(30),
    borderTopRightRadius: normalize(30),
    paddingHorizontal: normalize(25),
    paddingTop: normalize(30),
    paddingBottom: normalize(20),
    height: '100%',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.15)',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 8,
    elevation: 5,
  },
  heading: {
    fontFamily: 'Aquire',
    fontSize: normalize(32),
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: normalize(25),
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
  inputError: {
    borderColor: 'rgba(255, 59, 48, 0.7)', // Red border for errors
  },
  errorText: {
    color: 'rgba(255, 59, 48, 0.9)',
    fontSize: 12,
    marginTop: -12,
    marginBottom: 12,
    marginLeft: 4,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-start',
    marginBottom: normalize(15),
  },
  forgotPassword: {
    fontFamily: 'Aquire',
    color: '#11DCE8',
    fontSize: normalize(14),
    fontWeight: '400',
  },
  signInButton: {
    backgroundColor: '#1F75FE',
    borderRadius: normalize(25),
    height: normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#FFFFFF',
    fontSize: normalize(17),
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: normalize(25),
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  dividerText: {
    paddingHorizontal: normalize(10),
    color: '#8D8E99',
    fontSize: normalize(14),
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginVertical: normalize(15),
  },
  socialIconWrap: {
    marginHorizontal: normalize(8),
  },
  socialIconButton: {
    width: normalize(30),
    height: normalize(30),
    borderRadius: normalize(15),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  twitterButton: {
    backgroundColor: 'transparent',
  },
  twitterIcon: {
    color: '#1DA1F2',
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
  facebookButton: {
    backgroundColor: 'transparent',
  },
  facebookIcon: {
    color: '#4267B2',
    fontSize: normalize(22),
    fontWeight: 'bold',
    marginTop: normalize(-2),
  },
  googleButton: {
    backgroundColor: 'transparent',
  },
  googleIcon: {
    color: '#DB4437',
    fontSize: normalize(18),
    fontWeight: 'bold',
  },
  tiktokButton: {
    backgroundColor: 'transparent',
  },
  tiktokIcon: {
    color: '#FF0050',
    fontSize: normalize(20),
    fontWeight: 'bold',
  },
  instagramButton: {
    backgroundColor: 'transparent',
  },
  instagramIcon: {
    width: normalize(16),
    height: normalize(16),
    borderRadius: normalize(5),
    backgroundColor: '#E1306C',
  },
  signUpContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: normalize(15),
    marginTop: 'auto',
    marginBottom: normalize(110),
  },
  signUpText: {
    color: '#8D8E99',
    fontSize: normalize(14),
  },
  signUpLink: {
    color: '#1F75FE',
    fontWeight: '600',
  },
});

export default loginScreenStyles;
