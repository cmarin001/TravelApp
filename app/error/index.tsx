// app/error/index.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

const ErrorPage = () => {
  const { error } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{error}</Text>
      <Button title="Go Back" onPress={() => router.push('/auth/login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    marginBottom: 12,
  },
});

export default ErrorPage;
