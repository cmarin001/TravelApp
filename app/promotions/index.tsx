import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const mockPromotions = [
  {
    promo_id: 'promo1',
    title: '50% Off on All Destinations',
    image_url: 'https://example.com/images/promo1.png',
  },
  {
    promo_id: 'promo2',
    title: 'Buy One Get One Free',
    image_url: 'https://example.com/images/promo2.png',
  },
];

const PromotionsPage = () => {
  const renderPromotionItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image_url }} style={styles.image} />
      <Text style={styles.promoTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Current Promotions</Text>
      <FlatList
        data={mockPromotions}
        renderItem={renderPromotionItem}
        keyExtractor={(item) => item.promo_id}
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
  promoTitle: {
    fontSize: 18,
    marginTop: 10,
  },
  list: {
    paddingBottom: 16,
  },
});

export default PromotionsPage;
