import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Not Found"
        onPress={() => navigation.navigate('not-found')}
      />
    </View>
  );
};

export default HomeScreen;
