import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useRouter } from 'expo-router';

const CreditCardMethodPage = () => {
  const [saveCard, setSaveCard] = useState(false);
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Credit Card Method</Text>
        <Text style={styles.subHeader}>Your New Card</Text>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.cardNumber}>2332 7352 3324 6522</Text>
            <Text style={styles.cardHolder}>HIKMET ATCEKEN</Text>
            <Text style={styles.cardExpiry}>VALID THRU 07/23</Text>
          </View>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Card holder Name"
          placeholderTextColor="#999"
        />
        <View style={styles.expireCvcContainer}>
          <TextInput
            style={[styles.input, styles.expireInput]}
            placeholder="Expire Date"
            placeholderTextColor="#999"
          />
          <TextInput
            style={[styles.input, styles.cvcInput]}
            placeholder="CVC/CVV2"
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={saveCard ? 'checked' : 'unchecked'}
            onPress={() => setSaveCard(!saveCard)}
          />
          <Text style={styles.checkboxText}>Save your card information. It’s confidential</Text>
        </View>
        <TouchableOpacity style={styles.confirmButton}onPress={() => router.push('/verification')}>
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
  cardContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  card: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    backgroundColor: '#4c2a96',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardNumber: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 16,
  },
  cardHolder: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 8,
  },
  cardExpiry: {
    fontSize: 16,
    color: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    color: '#333',
  },
  expireCvcContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expireInput: {
    flex: 1,
    marginRight: 8,
  },
  cvcInput: {
    flex: 1,
    marginLeft: 8,
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

export default CreditCardMethodPage;
