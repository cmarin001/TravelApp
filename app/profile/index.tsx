import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { auth } from '../../services/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useRouter } from 'expo-router';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';

const ProfilePage = () => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleLogout = () => {
    signOut(auth).then(() => {
      router.push('/');
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome back,</Text>
      <Text style={styles.userName}>John Doe</Text>

      <View style={styles.reservationContainer}>
        <Text style={styles.reservationText}>
          🎉🎉 You have a reservation. If you wish to explore the details regarding your reservation, the hotel, the tours, or any other related information, please click on{' '}
          <Text style={styles.seeMore}>See More</Text>.
        </Text>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option}>
          <FontAwesome name="credit-card" size={24} color="#176FF2" />
          <Text style={styles.optionText}>Payment</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <FontAwesome name="heart" size={24} color="#176FF2" />
          <Text style={styles.optionText}>Favorites</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="settings-outline" size={24} color="#176FF2" />
          <Text style={styles.optionText}>Settings</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="globe-outline" size={24} color="#176FF2" />
          <Text style={styles.optionText}>Language</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.option}>
          <Ionicons name="moon-outline" size={24} color="#176FF2" />
          <Text style={styles.optionText}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkMode ? "#176FF2" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleDarkMode}
            value={isDarkMode}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  welcomeText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 40,
  },
  userName: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  reservationContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2,
  },
  reservationText: {
    fontSize: 14,
    color: '#333',
  },
  seeMore: {
    color: '#007bff',
  },
  optionsContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: '#176FF2',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default ProfilePage;
