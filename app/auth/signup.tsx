import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { auth } from '../../services/firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import googleLogo from "../../assets/images/google.png";
import facebookLogo from "../../assets/images/facebook.png";
import xLogo from "../../assets/images/twitter.png";

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const handleSignup = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('User signed up!');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/auth/login')}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.welcomeText}>WELCOME !</Text>
      <Text style={styles.subtitleText}>Create your account</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={24} color="#176FF2" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={24} color="#176FF2" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={24} color="#176FF2" />
        <TextInput
          style={styles.input}
          placeholder="Confirm password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          placeholderTextColor="#999"
        />
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Sign in</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <Text style={styles.orText}>Or Sign in with</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image source={googleLogo} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={facebookLogo} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={xLogo} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    padding: 10,
    borderRadius: 50,
  },
  backButtonText: {
    fontSize: 20,
    color: '#333',
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: 'gray',
    marginVertical: 16,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 32,
    color: '#666',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
    color: '#333',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
  },
  signupButton: {
    backgroundColor: '#176FF2',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  orText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialIcon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
});

export default SignupScreen;
