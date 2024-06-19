const API_URL = 'https://location-app-sigma.vercel.app';

const fetchCountries = async () => {
  try {
    const response = await fetch(`${API_URL}/countries`);
    if (!response.ok) {
      throw new Error("Failed to fetch countries.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};

const fetchCities = async (country: string) => {
  try {
    const response = await fetch(`${API_URL}/cities?country=${country}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch cities for country: ${country}.`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching cities for country: ${country}.`, error);
    throw error;
  }
};

const fetchPlaces = async (country: string, city: string) => {
  try {
    const response = await fetch(`${API_URL}/places?country=${country}&city=${city}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch places for city: ${city} in country: ${country}.`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching places for city: ${city} in country: ${country}.`, error);
    throw error;
  }
};

const fetchCountryPlaces = async (country: string): Promise<{ [city: string]: { place_id: string, display_name: string, image_url: string }[] }> => {
  try {
    const response = await fetch(`${API_URL}/country-places?country=${country}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch places for country: ${country}.`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching places for country: ${country}.`, error);
    throw error;
  }
};



export { fetchCountries, fetchCities, fetchPlaces, fetchCountryPlaces };
