import React, { useState } from 'react';
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  Alert,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import Colors from '../constants/Colors';
import MapPrev from './MapView';
import { isLoading } from 'expo-font';

const {width: screenWidth} = Dimensions.get('window');
// let autocompleteHeight = autoCompleteValues.length * 65


const LocationPicker = props => {
  const [isFetching, setIsFetching] = useState(false);
  console.log('hello', props.Location);
  const [pickedLocation, setPickedLocation] = useState({
    lat: props.Location.latitude,
    lng: props.Location.longitude
  });


  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION);
    if (result.status !== 'granted') {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant location permissions to use this app.',
        [{ text: 'Okay' }]
      );
      return false;
    }
    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    try {
      setIsFetching(true);
      const location = await Location.getCurrentPositionAsync({
        timeout: 20000
      });
      console.log(location)
      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude
      });
      if(location.coords.latitude != props.Location.latitude && location.coords.longitude != props.Location.longitude){
        Alert.alert(
          'Access Denied!',
          'Vendor not in designated location.',
          [{ text: 'Okay' }]
        );
        // props.navigation.navigate('EditProfile', {
        //   longitude: location.coords.longitude,
        //   latitude: location.coords.latitude
        // });
      }else{
        props.navigation.navigate('EditProfile', {
          longitude: location.coords.longitude,
          latitude: location.coords.latitude
        });

      }
    } catch (err) {
      Alert.alert(
        'Could not fetch location!',
        'Please try again later or pick a location on the map.',
        [{ text: 'Okay' }]
      );
    }
    setIsFetching(false);
  };

  console.log('picked', pickedLocation);

  return (
    <View style={styles.locationPicker}>
      {/* <MapPreview style={styles.mapPreview} location={pickedLocation}>
        {isFetching ? (
          <ActivityIndicator size="large" color={Colors.primary} />
        ) : (
          <Text>No location chosen yet!</Text>
        )}
      </MapPreview> */}
      <View  style={{ justifyContent: 'center',
     alignItems: 'center', marginTop:20, zIndex:1}}  >
         {/* <TouchableHighlight
         delayPressIn={0}
         onPress={getLocationHandler}
        style={{zIndex:1, position: 'absolute',
        top: Dimensions.get('window').height - 200,
        backgroundColor: 'gray', justifyContent: 'center',
        alignItems: 'center', width:'80%', padding:10, borderRadius:10, elevation:6}}>
            <Text style={{ color:'white', fontSize: 18, fontFamily: 'montserrat-regular',
        }}>Confirm Location</Text>
        </TouchableHighlight> */}

        {/* <TouchableOpacity
        onPress={getLocationHandler}
        style={{ marginTop: 50, position: 'absolute',
        top: Dimensions.get('window').height - 200,
        backgroundColor: '#1E68EF', justifyContent: 'center',
        alignItems: 'center', width:'80%', padding:10, borderRadius:10, elevation:6}}>
        <Text style={{ color:'white', fontSize: 18, fontFamily: 'montserrat-regular',
        }}>Save Location</Text>
        </TouchableOpacity> */}
        {/* <Button style={{ width:'60%'}}
        title="Get User Location"
        color={Colors.primary}
        onPress={getLocationHandler}
        /> */}
      </View>
      <MapPrev style={styles.mapPreview} location={pickedLocation}>
        {isFetching ? (
          <ActivityIndicator size="large" color={Colors.primary} />
        ) : (
          <Text>No location chosen yet!</Text>
        )}
         
      </MapPrev>
      <View style={{
            width:'80%',
            position: 'absolute',//use absolute position to show button on top of the map
            top: '80%', //for center align
            alignSelf: 'center' 
        }}
      >
        <TouchableOpacity
          onPress={getLocationHandler}
          style={{ backgroundColor: '#1E68EF', justifyContent: 'center',
          alignItems: 'center', width:'100%', padding:10, borderRadius:10, elevation:6}}>
            <Text style={{ color:'white', fontSize: 18, fontFamily: 'montserrat-regular',
        }}>{isFetching ? 'Loading...' : 'Confirm Location'}</Text>
        </TouchableOpacity>
    </View>

    
     
    </View>
  );
};



const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15
  },

  mapPreview: {
    flex:1,
    marginBottom: 10,
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    borderColor: '#ccc',
    borderWidth: 1
  }
});

export default LocationPicker;
