import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

const { width: screenWidth } = Dimensions.get('window');

const MapScreen = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
      if(props.navigation.state.params){
        setLoading(false);
      }
  }, []);
  console.log('latt1', props)
  console.log('latt', props.navigation.state.params)
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
    <View>
    { loading ? (
    <ActivityIndicator size="large"  color="#1E68EF" style={{
      position:'absolute', left:0, right:0, bottom:0, top:300 }}/>    
    ) : (
    <ScrollView>
      <MapView
        style={styles.map}
        region={mapRegion}
      >

        <Marker coordinate={marker} />
      </MapView>
      <View style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20, elevation: 6, backgroundColor: 'red' }}>
        {/* Select user location */}
        {/* <Button
    title="Get User Location"
    color={'green'}
    onPress={() => {
      // props.navigation.navigate('EditLocation');
      props.navigation.navigate('EditLocation', {
        latitude: Number(data.latitude),
        longitude: Number(data.longitude),
      });
      
    }}
  /> */}
      </View>
      <View style={{
        borderTopLeftRadius: 40, borderTopRightRadius: 40, elevation: 10, backgroundColor: 'white',
        height: 200
      }}>
        <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20, elevation: 6 }}>
          <Image style={{ width: 110, height: 120, borderRadius: 15 }} source={require('../../images/tst1.jpg')}
          />
          <View style={{ flexDirection: 'column', }}>
            <Text style={{ fontFamily: 'montserrat', fontSize: 18, width: '70%', marginLeft: 20 }}>Blue Cafe Nigeria Limited</Text>
            <View style={{ flexDirection: 'row', paddingTop: 5 }}>
              <Ionicons style={{ marginLeft: 20 }} name={'md-navigate'} size={23}
                color="gray"
              />
              <Text style={{ fontFamily: 'montserrat-regular', marginLeft: 5, marginTop: 3, width: '60%', flexWrap: 'wrap' }}>15, Toyin Street, Opebi, Ikeja, Lagos</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 5 }}>
              <Ionicons style={{ marginLeft: 20 }} name={'md-time'} size={23}
                color="gray"
              />
              <Text style={{ fontFamily: 'montserrat-regular', marginLeft: 5, marginTop: 3, width: '60%', flexWrap: 'wrap' }}>Open now: 9am-5pm</Text>
            </View>
          </View>
        </View>


        <View style={{
          justifyContent: 'center',
          marginTop:'-4%',
          alignItems: 'center', padding: 20
        }}  >
          <TouchableOpacity
            onPress={() => {
              setLoading(true);
              props.navigation.navigate('EditLocation', {
                latitude: Number(data.latitude),
                longitude: Number(data.longitude),
              })
            }}
            style={{
              backgroundColor: '#1E68EF', justifyContent: 'center',
              alignItems: 'center', width: '100%', padding: 10, borderRadius: 10, elevation: 6
            }}>
            <Text style={{
              color: 'white', fontSize: 18, fontFamily: 'montserrat-regular',
            }}>Edit Details</Text>
          </TouchableOpacity>


        </View>
      </View>

    </ScrollView>
    )}
    </View>
  );
};


MapScreen.navigationOptions = {
  headerVisible: false,
  tabBarVisible: false,
  header: () => null

};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    height: screenWidth + 50,
    width: screenWidth,

  }
});

export default MapScreen;
