import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const mockFavorites = [
  {
    place_id: 'fav1',
    display_name: 'Eiffel Tower',
    image_url: 'https://example.com/images/eiffel_tower.png',
  },
  {
    place_id: 'fav2',
    display_name: 'Great Wall of China',
    image_url: 'https://example.com/images/great_wall.png',
  },
];

const FavoritesPage = () => {
  const renderFavoriteItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image_url }} style={styles.image} />
      <Text style={styles.placeName}>{item.display_name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Favorites</Text>
      <FlatList
        data={mockFavorites}
        renderItem={renderFavoriteItem}
        keyExtractor={(item) => item.place_id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  placeName: {
    fontSize: 18,
    marginTop: 10,
  },
  list: {
    paddingBottom: 16,
  },
});

export default FavoritesPage;
