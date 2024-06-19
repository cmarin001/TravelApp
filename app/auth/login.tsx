import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { useRouter } from 'expo-router';
import { Checkbox } from 'react-native-paper';
import { auth, googleProvider, facebookProvider, twitterProvider } from '../../services/firebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, signInWithCredential } from "firebase/auth";
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import googleLogo from "../../assets/images/google.png";
import facebookLogo from "../../assets/images/facebook.png";
import xLogo from "../../assets/images/twitter.png";

WebBrowser.maybeCompleteAuthSession();

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: '888334131410-tt9sp9t874higpc4eq9c3m9n2jipbblm.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const googleCredential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, googleCredential)
        .then(() => {
          router.push('/home');
        })
        .catch((error) => {
          router.push({
            pathname: '/error',
            params: { error: error.message },
          });
        });
    }
  }, [response]);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push('/home');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    promptAsync();
  };

  const handleFacebookLogin = () => {
    signInWithPopup(auth, facebookProvider)
      .then(() => {
        router.push('/home');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleTwitterLogin = () => {
    signInWithPopup(auth, twitterProvider)
      .then(() => {
        router.push('/home');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.largeText}>WELCOME</Text>
        <Text style={styles.smallText}>Log In to your account</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Icon name="mail-outline" type="ionicon" iconStyle={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (error) setError('');
            }}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        {error && <Text style={styles.errorText}>{error}</Text>}
        <View style={styles.inputContainer}>
          <Icon name="lock-open-outline" type="ionicon" iconStyle={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (error) setError('');
            }}
          />
          <TouchableOpacity onPress={toggleShowPassword}>
            <Icon name={showPassword ? "eye-off-outline" : "eye-outline"} type="ionicon" iconStyle={styles.icon} />
          </TouchableOpacity>
        </View>
        {error && <Text style={styles.errorText}>{error}</Text>}
        <View style={styles.rememberMeContainer}>
          <Checkbox
            status={rememberMe ? 'checked' : 'unchecked'}
            onPress={() => setRememberMe(!rememberMe)}
          />
          <Text style={styles.checkBoxText}>Remember Me</Text>
          <TouchableOpacity onPress={() => router.push('/forgotPassword')}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <Button title="Log In" buttonStyle={styles.loginButton} onPress={handleLogin} />
        <View style={styles.divider} />
        <Text style={styles.smallText}>Or Log in with</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity disabled={!request} onPress={handleGoogleLogin}>
            <Image source={googleLogo} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFacebookLogin}>
            <Image source={facebookLogo} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleTwitterLogin}>
            <Image source={xLogo} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.smallText}>
          Don’t have an account? <TouchableOpacity onPress={() => router.push('/auth/signup')}><Text style={styles.signUpText}>Sign up</Text></TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  largeText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
  },
  smallText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
    textAlign: "center"
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 24,
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: 16,
    color: '#333',
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#333',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 12,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkBoxText: {
    fontSize: 16,
    color: '#333',
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#007bff',
  },
  loginButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 16,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: 'gray',
    marginVertical: 16,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  socialIcon: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
  },
  signUpText: {
    color: '#007bff',
    marginLeft: 16,
  },
});

export default LoginPage;
