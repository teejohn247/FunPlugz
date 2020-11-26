import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

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
    <MapView
      style={styles.map}
      region={mapRegion}
    >
     
      <Marker coordinate={marker} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default MapScreen;
