import React, { useState, useCallback } from 'react';
import {
  ScrollView,
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  Dimensions
} from 'react-native';
import { useDispatch } from 'react-redux';

// import Colors from '../constants/Colors';
// import * as placesActions from '../store/places-actions';
import * as vendorActions from '../../store/actions/vendors';
// import ImagePicker from '../../components/ImagePicker';
import LocationPicker from '../../components/LocationPicker';
const {width: screenWidth} = Dimensions.get('window');


const NewPlaceScreen = props => {
  const [titleValue, setTitleValue] = useState('');
  let data = props.navigation.state.params;
  
//   const [selectedImage, setSelectedImage] = useState();
  const [selectedLocation, setSelectedLocation] = useState();
  const [loading, setLoading] = useState(false);


  const dispatch = useDispatch();

  const titleChangeHandler = text => {
    // you could add validation
    setTitleValue(text);
  };

  const imageTakenHandler = imagePath => {
    setSelectedImage(imagePath);
  };

  const locationPickedHandler = useCallback(location => {
    setLoading(true);
    setSelectedLocation(location);
    setLoading(false);

  }, []);

//   const savePlaceHandler = () => {
//     dispatch(placesActions.addPlace(titleValue, selectedImage, selectedLocation));
//     props.navigation.goBack();
//   };

  return (
    <View>
    { loading ? (
      <ActivityIndicator size="large"  color="#1E68EF" style={{
        position:'absolute', left:0, right:0, bottom:0, top:300 }}/>    
      ) : (
    <ScrollView>
      <View style={styles.form}>
        {/* <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
        /> */}
        {/* <ImagePicker onImageTaken={imageTakenHandler} /> */}
      {/* <MapView
      style={styles.map}
      region={mapRegion}>
     
      <Marker coordinate={marker} />
      </MapView> */}
        <LocationPicker
          navigation={props.navigation}
          onLocationPicked={locationPickedHandler}
          Location={data}
        />
        {/* <Button
          title="Save Place"
          color={"green"}
        //   onPress={savePlaceHandler}
        /> */}
      </View>
    </ScrollView>
    )}
    </View>
  );
};

NewPlaceScreen.navigationOptions = {
  headerVisible: false,
  tabBarVisible:false,
  header: () => null
};

const styles = StyleSheet.create({
    map: {
      flex: 1,
      // height: screenWidth + 50,
      // width:screenWidth,
      
    },
  form: {
    // margin: 30
    // height:200
    flex: 1,
      // height: screenWidth + 50,
      // width:screenWidth,
  },
  label: {
    fontSize: 18,
    marginBottom: 15
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2
  }
});

export default NewPlaceScreen;
