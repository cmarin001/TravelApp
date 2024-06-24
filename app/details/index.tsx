import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

const DetailsPage = () => {
  const { place } = useLocalSearchParams();
  const router = useRouter();
  const placeData = place ? JSON.parse(Array.isArray(place) ? place[0] : place) : null;

  if (!placeData) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Place not found</Text>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: `https://location-app-sigma.vercel.app${placeData.image_url}` }} style={styles.image} />
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{placeData.display_name}</Text>
          <Text style={styles.reviews}>★ {placeData.rating} (355 Reviews)</Text>
          <Text style={styles.description}>
            {placeData.description}
          </Text>
          <Text style={styles.readMore}>Read more</Text>
          <View style={styles.facilities}>
            <View style={styles.facilityItem}>
              <Text style={styles.facilityIcon}>🍽</Text>
              <Text style={styles.facilityText}>Dinner</Text>
            </View>
            <View style={styles.facilityItem}>
              <Text style={styles.facilityIcon}>🏊</Text>
              <Text style={styles.facilityText}>Pool</Text>
            </View>
            <View style={styles.facilityItem}>
              <Text style={styles.facilityIcon}>🚴</Text>
              <Text style={styles.facilityText}>Cycling</Text>
            </View>
            <View style={styles.facilityItem}>
              <Text style={styles.facilityIcon}>🏋</Text>
              <Text style={styles.facilityText}>Gym</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.priceContainer}>
              <Text style={styles.priceLabel}>Price</Text>
              <Text style={styles.price}>$199</Text>
            </View>
            <TouchableOpacity style={styles.bookButton} onPress={() => router.push('/datepicker')}>
              <Text style={styles.bookButtonText}>Book Now →</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  },
  imageContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    margin: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 300,
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
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  reviews: {
    fontSize: 14,
    color: '#888',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  readMore: {
    fontSize: 14,
    color: '#007bff',
    marginBottom: 16,
  },
  facilities: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  facilityItem: {
    alignItems: 'center',
  },
  facilityIcon: {
    fontSize: 24,
  },
  facilityText: {
    fontSize: 12,
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  priceContainer: {
    flexDirection: 'column',
  },
  priceLabel: {
    fontSize: 14,
    color: '#888',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1c9d1a',
  },
  bookButton: {
    backgroundColor: '#176FF2',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookButtonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default DetailsPage;
