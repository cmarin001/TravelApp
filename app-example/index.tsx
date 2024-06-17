import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Link } from 'expo-router';

const AuthenticationLayout = () => {
  return (
    <ImageBackground
      source={require('../assets/images/home.png')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>LET'S ENJOY THE BEAUTIFUL WORLD</Text>
          <View style={styles.innerContainer}>
            <Text style={styles.subtitle}>
              Enjoy the breathtaking view of the nature, relax and cherish your dreams to the fullest.
            </Text>
            <TouchableOpacity style={styles.button}>
              <Link href="/authentication/signup" style={styles.linkText}>
                <Text style={styles.buttonText}>GET START NOW</Text>
              </Link>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  innerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 48,
  },
  subtitle: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 20,
    flexShrink: 1,
  },
  button: {
    backgroundColor: '#176FF2',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  linkText: {
    textDecorationLine: 'none',
  },
});

export default AuthenticationLayout;