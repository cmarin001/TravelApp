import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const VerificationPage = () => {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Verification</Text>
        <Text style={styles.description}>
          Please confirm and submit your order. By clicking confirm, you agree to our 
          <Text style={styles.link} onPress={() => alert('Terms of Use clicked')}> Terms of Use </Text>
          and 
          <Text style={styles.link} onPress={() => alert('Privacy Policy clicked')}> Privacy Policy</Text>. 
          Please review these policies carefully. Once payment is made, your order will be placed.
        </Text>

        <View style={styles.paymentContainer}>
          <View style={styles.paymentHeader}>
            <Text style={styles.paymentTitle}>Payment</Text>
            <Text style={styles.edit} onPress={() => router.push('/creditCardMethod')}>Edit</Text>
          </View>
          <View style={styles.cardDetails}>
            <Text>💳 VISA **** 6522</Text>
            <Text>07/23</Text>
          </View>
        </View>

        <View style={styles.orderSummaryContainer}>
          <Text style={styles.orderSummaryTitle}>Order Summary</Text>
          <View style={styles.orderItem}>
            <Text>Subtotal</Text>
            <Text>$150.00</Text>
          </View>
          <View style={styles.orderItem}>
            <Text>Facilities</Text>
            <Text>$12.00</Text>
          </View>
          <View style={styles.orderItem}>
            <Text>Tours</Text>
            <Text>$120.00</Text>
          </View>
          <View style={styles.orderItem}>
            <Text>Food</Text>
            <Text>$48.00</Text>
          </View>
          <View style={styles.totalContainer}>
            <Text>Total</Text>
            <Text>$492.00</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.confirmButton} onPress={() => router.push('/orderConfirmation')}>
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
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
  },
  link: {
    color: '#176FF2',
    textDecorationLine: 'underline',
  },
  paymentContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginVertical: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2,
  },
  paymentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  edit: {
    color: '#176FF2',
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderSummaryContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginVertical: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2,
  },
  orderSummaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 8,
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

export default VerificationPage;
