import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewPlaceScreen = props => {
  return (
    <View>
      <Text>NewPlaceScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default NewPlaceScreen;


// import React, { useState } from 'react';
// import {
//   ScrollView,
//   View,
//   Button,
//   Text,
//   TextInput,
//   StyleSheet
// } from 'react-native';
// import { useDispatch } from 'react-redux';

// import Colors from '../constants/Colors';
// import * as vendorActions from '../../store/actions/vendors';
// import ImagePicker from '../../components/ImagePicker';
// import LocationPicker from '../../components/LocationPicker';

// const NewPlaceScreen = props => {
//   const [titleValue, setTitleValue] = useState('');
//   const [selectedImage, setSelectedImage] = useState();

//   const dispatch = useDispatch();

//   const titleChangeHandler = text => {
//     // you could add validation
//     setTitleValue(text);
//   };

//   const imageTakenHandler = imagePath => {
//       setSelectedImage(imagePath);
//   };

//   const savePlaceHandler = () => {
//     dispatch(vendorActions.addPlace(titleValue, selectedImage));
//     props.navigation.goBack();
//   };

//   return (
//     <ScrollView>
//       <View style={styles.form}>
//         <Text style={styles.label}>Title</Text>
//         <TextInput
//           style={styles.textInput}
//           onChangeText={titleChangeHandler}
//           value={titleValue}
//         />
//         <ImagePicker onImageTaken={imageTakenHandler} />
//         <LocationPicker />
//         <Button
//           title="Save Place"
//           color={Colors.primary}
//           onPress={savePlaceHandler}
//         />
//       </View>
//     </ScrollView>
//   );
// };

// NewPlaceScreen.navigationOptions = {
//   headerTitle: 'Add Place'
// };

// const styles = StyleSheet.create({
//   form: {
//     margin: 30
//   },
//   label: {
//     fontSize: 18,
//     marginBottom: 15
//   },
//   textInput: {
//     borderBottomColor: '#ccc',
//     borderBottomWidth: 1,
//     marginBottom: 15,
//     paddingVertical: 4,
//     paddingHorizontal: 2
//   }
// });

// export default NewPlaceScreen;
