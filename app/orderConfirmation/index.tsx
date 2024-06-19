import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import checkLogo from "../../assets/images/check.png";

const OrderConfirmationPage = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={checkLogo} style={styles.icon} />
      </View>
      <Text style={styles.congratulations}>Congratulations</Text>
      <Text style={styles.message}>Your order has been placed successfully</Text>
      <TouchableOpacity style={styles.homeButton} onPress={() => router.push('/home')}>
        <Text style={styles.homeButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  iconContainer: {
    marginBottom: 32,
  },
  icon: {
    width: 290,
    height: 290,
  },
  congratulations: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  message: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
  },
  homeButton: {
    backgroundColor: '#176FF2',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
  },
  homeButtonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default OrderConfirmationPage;
