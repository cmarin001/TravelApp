import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { auth } from "../../services/firebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from "expo-router";
import Carousel from "react-native-reanimated-carousel";
import { fetchCountryPlaces } from "@/services/locationService";

type Place = {
  place_id: string;
  display_name: string;
  image_url: string;
};

const HomePage = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [recommendedPlaces, setRecommendedPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    loadPlaces();
    loadRecommendedPlaces();
  }, []);

  const loadPlaces = async (isLoadMore = false) => {
    try {
      if (isLoadMore) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }

      const country = "USA";
      const placesData = await fetchCountryPlaces(country);
      const flattenedPlaces: Place[] = Object.values(placesData).flat();

      if (isLoadMore) {
        setPlaces((prevPlaces) => [...prevPlaces, ...flattenedPlaces]);
      } else {
        setPlaces(flattenedPlaces);
      }
    } catch (error) {
      console.error("Error fetching places:", error);
    } finally {
      if (isLoadMore) {
        setLoadingMore(false);
      } else {
        setLoading(false);
      }
    }
  };

  const loadRecommendedPlaces = async () => {
    try {
      setLoading(true);
      const country = "Germany";
      const placesData = await fetchCountryPlaces(country);
      const flattenedPlaces: Place[] = Object.values(placesData).flat();
      setRecommendedPlaces(flattenedPlaces);
    } catch (error) {
      console.error("Error fetching recommended places:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      router.push("/");
    });
  };

  const renderCarouselItem = ({ item }: { item: Place }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/details",
            params: { place: JSON.stringify(item) },
          })
        }
      >
        <View style={styles.card}>
          <Image
            source={{
              uri: `https://location-app-sigma.vercel.app` + item.image_url,
            }}
            style={styles.image}
          />
          <Text style={styles.placeName}>{item.display_name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderGridItem = ({ item }: { item: Place }) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() =>
          router.push({
            pathname: "/details",
            params: { place: JSON.stringify(item) },
          })
        }
      >
        <Image
          source={{
            uri: `https://location-app-sigma.vercel.app${item.image_url}`,
          }}
          style={styles.gridImage}
        />
        <Text style={styles.gridPlaceName}>{item.display_name}</Text>
      </TouchableOpacity>
    );
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    loadPlaces(true);
  };

  if (loading && !loadingMore) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) {
          handleLoadMore();
        }
      }}
      scrollEventThrottle={400}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.userName}>John Doe</Text>
        </View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search destinations..."
          placeholderTextColor="#999"
        />
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular</Text>
          <Text style={styles.sectionAction}>See all</Text>
        </View>
        <Carousel
          width={Dimensions.get("window").width}
          height={300}
          autoPlay={true}
          data={places}
          renderItem={renderCarouselItem}
          scrollAnimationDuration={1000}
          style={styles.carousel}
        />
        <View style={styles.recommendedContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommended</Text>
          </View>
          <FlatList
            data={recommendedPlaces}
            renderItem={renderGridItem}
            keyExtractor={(item) => item.place_id}
            numColumns={2}
            columnWrapperStyle={styles.gridColumn}
            scrollEnabled={false}
          />
        </View>
        {loadingMore && <ActivityIndicator size="small" color="#0000ff" />}
        {/* <Button title="Logout" onPress={handleLogout} /> */}
      </View>
    </ScrollView>
  );
};

const isCloseToBottom = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}: any) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
    marginTop: 60,
  },
  welcomeText: {
    fontSize: 32,
    color: "#333",
  },
  userName: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#333",
  },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    color: "#333",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  sectionAction: {
    fontSize: 14,
    color: "#007bff",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    height: 250,
    padding: 16,
    marginLeft: 25,
    marginRight: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  placeName: {
    fontSize: 18,
    marginTop: 10,
  },
  recommendedContainer: {
    marginTop: 20,
  },
  gridItem: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    margin: 8,
    alignItems: "center",
  },
  gridImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },
  gridPlaceName: {
    fontSize: 16,
    marginTop: 8,
    textAlign: "center",
  },
  gridColumn: {
    justifyContent: "space-between",
  },
  carousel: {
    marginBottom: 10,
  },
});

export default HomePage;
