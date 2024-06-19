import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { auth } from '../../services/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useRouter } from 'expo-router';

const ProfilePage = () => {
  const router = useRouter();

  const handleLogout = () => {
    signOut(auth).then(() => {
      router.push('/');
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>User Profile</Text>
      <Text style={styles.subText}>John Doe</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  subText: {
    fontSize: 18,
    marginBottom: 40,
  },
});

export default ProfilePage;
