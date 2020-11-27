// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import MapView, { Marker } from 'react-native-maps';

// const {width: screenWidth} = Dimensions.get('window');

// const MapView = (props) => {

// //   const [selectedLocation, setSelectedLocation] = useState();


//   const mapRegion = {
//     latitude: Number(props.location.lat),
//     longitude: Number(props.location.lng),
//     latitudeDelta: 0.0043,
//     longitudeDelta: 0.0034
//   };
//   const marker = {
//     latitude: Number(data.latitude),
//     longitude: Number(data.longitude),
//   };

//   return (
//     <MapView
//       style={styles.map}
//       region={mapRegion}
//     >
     
//       <Marker coordinate={marker} />
//     </MapView>
//   );
// };

// const styles = StyleSheet.create({
//   map: {
//     flex: 1,
//     height: screenWidth - 100,
//     width:screenWidth
//   }
// });

// export default MapView;

import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// import Colors from '../constants/Colors';

const MapPrev = props => {
  console.log('for_props', props)
  console.log('number', props.location.lat)

  const [selectedLocation, setSelectedLocation] = useState({ 
      lat:  Number(props.location.lat),
      lng: Number(props.location.lng)
   })

  const mapRegion = {
    latitude: Number(props.location.lat),
    longitude: Number(props.location.lng),
    latitudeDelta: 0.043,
    longitudeDelta: 0.0034
  };

  const selectLocationHandler = event => {
    setSelectedLocation({
    //   lat: event.nativeEvent.coordinate.latitude,
    //   lng: event.nativeEvent.coordinate.longitude
    lat: props.location.lat,
    lng: props.location.lng
    });
  };

  console.log('correct', selectedLocation)

//   const savePickedLocationHandler = useCallback(() => {
//     if (!selectedLocation) {
//       // could show an alert!
//       return;
//     }
//     // props.navigation.navigate('NewPlace', { pickedLocation: selectedLocation });
//   }, [selectedLocation]);

//   useEffect(() => {
//     props.navigation.setParams({ saveLocation: savePickedLocationHandler });
//   }, [savePickedLocationHandler]);

  let markerCoordinates;

  if (selectedLocation) {
    markerCoordinates = {
      latitude: props.location.lat,
      longitude: props.location.lng,
      latitudeDelta: 0.043,
      longitudeDelta: 0.0034
    };
  }

  return (
    <View style={{ ...styles.map, ...props.style }}>
    {
    props.location ? (
      <MapView
      style={styles.map}
      region={mapRegion}
      onPress={selectLocationHandler}
    >
      {markerCoordinates && (
        <Marker title="Picked Location" coordinate={markerCoordinates} />
      )}
    </MapView>
      ) : (
        props.children
      )}
    </View>
    // <MapView
    //   style={styles.map}
    //   region={mapRegion}
    //   onPress={selectLocationHandler}
    // >
    //   {markerCoordinates && (
    //     <Marker title="Picked Location" coordinate={markerCoordinates} />
    //   )}
    // </MapView>
  );
};

{/* <View style={{ ...styles.mapPreview, ...props.style }}>
      {props.location ? (
        <Image style={styles.mapImage} source={{ uri: imagePreviewUrl }} />
      ) : (
        props.children
      )}
    </View> */}



const styles = StyleSheet.create({
  map: {
    flex: 1
  },

});

export default MapPrev;

