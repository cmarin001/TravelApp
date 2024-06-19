import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useRouter } from 'expo-router';

const PaymentMethodPage = () => {
  const [rememberSelection, setRememberSelection] = useState(false);
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Checkout</Text>
        <Text style={styles.subHeader}>Choose a payment method</Text>
        <Text style={styles.description}>Please select a payment method most convenient to you.</Text>
        
        <View style={styles.paymentOptions}>
          <TouchableOpacity style={styles.paymentOption} onPress={() => router.push('/creditCardMethod')}>
            <Text style={styles.paymentText}>💳 Credit Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentOption}>
            <Text style={styles.paymentText}>📱 App payment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentOption}>
            <Text style={styles.paymentText}>💼 Wallet</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.methodButton}>
          <Text style={styles.methodText}>Google Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.methodButton}>
          <Text style={styles.methodText}>Apple Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.methodButton}>
          <Text style={styles.methodText}>Amazon Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.methodButton}>
          <Text style={styles.methodText}>PayPal</Text>
        </TouchableOpacity>

        <View style={styles.checkboxContainer}>
          <Checkbox
            status={rememberSelection ? 'checked' : 'unchecked'}
            onPress={() => setRememberSelection(!rememberSelection)}
          />
          <Text style={styles.checkboxText}>Remember selection for further trips</Text>
        </View>

        <TouchableOpacity style={styles.confirmButton} onPress={() => router.push('/creditcardmethod')}>
          <Text style={styles.confirmButtonText}>Confirm →</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 50,
  },
  backButtonText: {
    fontSize: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
  },
  paymentOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  paymentOption: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2,
  },
  paymentText: {
    fontSize: 16,
    color: '#333',
  },
  methodButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2,
  },
  methodText: {
    fontSize: 16,
    color: '#333',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: 8,
  },
  confirmButton: {
    backgroundColor: '#176FF2',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 16,
  },
  confirmButtonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default PaymentMethodPage;
