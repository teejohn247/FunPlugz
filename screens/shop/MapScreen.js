import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';

const {width: screenWidth} = Dimensions.get('window');

const MapScreen = (props) => {
  console.log('latt1',props)
  console.log('latt',props.navigation.state.params)
  let data = props.navigation.state.params;
  console.log(data)
  console.log(data.latitude)


  const [selectedLocation, setSelectedLocation] = useState();


  const mapRegion = {
    latitude: Number(data.latitude),
    longitude: Number(data.longitude),
    latitudeDelta: 0.0043,
    longitudeDelta: 0.0034
  };
  const marker = {
    latitude: Number(data.latitude),
    longitude: Number(data.longitude),
  };

  return (
    <ScrollView>
    <MapView
      style={styles.map}
      region={mapRegion}
    >
     
      <Marker coordinate={marker} />
    </MapView>
    <View>
    <Button
    title="Get User Location"
    color={'green'}
    onPress={() => {
      // props.navigation.navigate('EditLocation');
      props.navigation.navigate('EditLocation', {
        latitude: Number(data.latitude),
        longitude: Number(data.longitude),
      });
      
    }}
  />
  </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    height: screenWidth - 100,
    width:screenWidth
  }
});

export default MapScreen;
