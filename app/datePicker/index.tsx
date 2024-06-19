import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useRouter } from 'expo-router';

const DatePickerPage = () => {
  const [selectedDates, setSelectedDates] = useState({});
  const router = useRouter();

  const onDayPress = (day: { dateString: any; }) => {
    const dateString = day.dateString;
    setSelectedDates((prevDates) => ({
      ...prevDates,
      [dateString]: { selected: true, marked: true, selectedColor: '#176FF2' },
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Select Dates</Text>
        <Calendar
          onDayPress={onDayPress}
          markedDates={selectedDates}
          theme={{
            selectedDayBackgroundColor: '#176FF2',
            arrowColor: '#176FF2',
          }}
          style={styles.calendar}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.sectionHeader}>Book and Dates</Text>
          <View style={styles.datesContainer}>
            <View style={styles.dateBox}>
              <Text style={styles.dateLabel}>Check-in</Text>
              <Text style={styles.dateValue}>Tuesday, 15 Sep</Text>
            </View>
            <View style={styles.dateBox}>
              <Text style={styles.dateLabel}>Check-Out</Text>
              <Text style={styles.dateValue}>Thursday, 17 Sep</Text>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Adults</Text>
              <Text style={styles.infoValue}>02</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Staying</Text>
              <Text style={styles.infoValue}>2 Night</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Room</Text>
              <Text style={styles.infoValue}>01</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.bookButton} onPress={() => alert('Proceed to check!')}>
          <Text style={styles.bookButtonText}>Go to check →</Text>
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
  calendar: {
    borderRadius: 16,
    marginBottom: 16,
  },
  detailsContainer: {
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
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  datesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  dateBox: {
    flex: 1,
    alignItems: 'center',
  },
  dateLabel: {
    fontSize: 14,
    color: '#888',
  },
  dateValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoBox: {
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 14,
    color: '#888',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  bookButton: {
    backgroundColor: '#176FF2',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 16,
  },
  bookButtonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default DatePickerPage;
