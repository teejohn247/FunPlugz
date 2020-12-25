import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, TextInput, Dimensions,
  TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback,
  SafeAreaView, Keyboard, ScrollView, Alert, AsyncStorage
} from 'react-native';
import { connect, useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useForm, Controller, } from 'react-hook-form';
import { Input } from 'react-native-elements';
import * as Actions from '../../store/actions/vendors';




const EditProfileScreen = () => {

  // const { control, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const vendor = useSelector(state => state.vendors.data);
  const profile = useSelector(state => state.auth);
  


  // const getUserId = async () => {
  //   let vendor_id = '';
  //   try {
  //      vendor_id = AsyncStorage.getItem('vendor_id');
  //   } catch (error) {
  //     // Error retrieving data
  //     console.log(error.message);
  //   }
  //   console.log('chk23',vendor_id)

  //   return vendor_id;
  // }

  var vend;
  var vend_;

  const [isFetching, setIsFetching] = useState(false);
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [workplace, setWorkPlace] = useState('');
  const [homeaddress, setHomeAddress] = useState('');
  const [businessemail, setBusinessEmail] = useState("");
  const [businessphone, setBusinessPhone] = useState("");
  const [businessname, setBusinessName] = useState("");
  const [businessaddress, setBusinessAddress] = useState("");
  const [gender, setGender] = useState("");
  const [state, setState] = useState("");
  const [lga, setLga] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [hometown, setHomeTown] = useState("");
  const [search_keywords, setSearch_keywords] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      let vendor_id = '';
      try {
         vendor_id = await AsyncStorage.getItem('vendor_id');
         var id = vendor.filter((a,i) => a.id == vendor_id);
         vend = id;
         vend_ = vend[0].business_name;
         console.log('chk24',vendor_id)
         console.log('chk25',vend[0].business_name)
         setBusinessAddress(vend[0].business_address)
         setBusinessName(vend[0].business_name)
         setFirstName(profile.firstname)
         setLastName(profile.lastname)
         setBusinessPhone(profile.mobiles)
         setBusinessEmail(profile.email)

        //setBusinessName(vend[0].business_name)

      } catch (error) {
        // Error retrieving data
        console.log(error.message);
      }
      // console.log('chk23',vendor_id)
  
      // return vendor_id;
      // let vendo_id = await getUserId();
      // console.log('chk24',vendo_id)
      // vend = vendor.filter((a,i) => a.id == vendo_id);
   }
   fetchData();
  }, []);


  console.log('chk77', vend_)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true)

    let data = {"firstname":`${firstname}`,"lastname":`${lastname}`,"workplace":`${workplace}`,"homeaddress":`${homeaddress}`,"business_email":`${businessemail}`, "business_phone":`${businessphone}`, "business_address":`${businessaddress}`, "gender":`${gender}`, "state":`${state}`, "lga":`${lga}`,
    "middlename":`${middlename}`,"hometown":`${hometown}`, "search_keywords":`${search_keywords}` }
    // alert(data)
    dispatch(Actions.edit_vendor(data))
    setIsFetching(false)

   }


  // const onSubmit = async (data, e) => {
  //   e.preventDefault();
  //   alert(JSON.stringify(data))
  //   console.log('hereee')
  //   dispatch(Actions.edit_vendor(data))
  //   // .then(() => {
  //   // props.navigation.navigate('Home', {
  //   //   Id: id,
  //   //   Title: title
  //   // });
  //   // })
  //   // login(data)
  // }

  return (
    // <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled keyboardVerticalOffset={100}>
    <SafeAreaView>
      <ScrollView style={styles.container}>

        <Input
          inputContainerStyle={{ borderBottomWidth: 0 }} placeholder="first Name" placeholderTextColor="#999999"
          containerStyle={styles.campusInputContainer}
          onChangeText={text => setFirstName(text)}
          value={firstname}
          leftIcon={
            <Icon
              name='person'
              size={18}
              color='#999999'
              style={{ marginRight: 10 }}
            />
          } />


        <Input
          inputContainerStyle={{ borderBottomWidth: 0 }} placeholder="Last Name" placeholderTextColor="#999999"
          containerStyle={styles.campusInputContainer}
          onChangeText={text => setLastName(text)}
          value={lastname}
          leftIcon={
            <Icon
              name='person-add'
              size={18}
              color='#999999'
              style={{ marginRight: 10 }}
            />
          } />



        {/* <Input
          inputContainerStyle={{ borderBottomWidth: 0 }} placeholder="Work Place" placeholderTextColor="#999999"
          containerStyle={styles.campusInputContainer}
          onChangeText={text => setWorkPlace(text)}
          value={workplace}
          leftIcon={
            <Icon
              name='home-work'
              size={18}
              color='#999999'
              style={{ marginRight: 10 }}
            />

          } /> */}
        <Input
          inputContainerStyle={{ borderBottomWidth: 0 }} placeholder="Home Address" placeholderTextColor="#999999"
          containerStyle={styles.campusInputContainer}
          onChangeText={text => setHomeAddress(text)}
          value={homeaddress}
          leftIcon={
            <Icon
              name='home'
              size={18}
              color='#999999'
              style={{ marginRight: 10 }}
            />

          } />
        <Input
          inputContainerStyle={{ borderBottomWidth: 0 }} 
          placeholder = {businessname} 
          placeholderTextColor="#999999"
          containerStyle={styles.campusInputContainer}
          onChangeText={text => setBusinessName(text)}
          value={businessname}
          leftIcon={
            <Icon
              name='work'
              size={18}
              color='#999999'
              style={{ marginRight: 10 }}
            />

          } />
        <Input
          inputContainerStyle={{ borderBottomWidth: 0 }} placeholder="Business Email" placeholderTextColor="#999999"
          containerStyle={styles.campusInputContainer}
          onChangeText={text => setBusinessEmail(text)}
          value={businessemail}
          leftIcon={
            <Icon
              name='email'
              size={18}
              color='#999999'
              style={{ marginRight: 10 }}
            />


          } />

        <Input
          inputContainerStyle={{ borderBottomWidth: 0 }} placeholder="Business Phone" placeholderTextColor="#999999"
          containerStyle={styles.campusInputContainer}
          onChangeText={text => setBusinessPhone(text)}
          value={businessphone}
          leftIcon={
            <Icon
              name='local-phone'
              size={18}
              color='#999999'
              style={{ marginRight: 10 }}
            />

          } />

<Input
          inputContainerStyle={{ borderBottomWidth: 0 }} placeholder="Business Address" placeholderTextColor="#999999"
          containerStyle={styles.campusInputContainer}
          onChangeText={text => setBusinessAddress(text)}
          value={businessaddress}
          leftIcon={
            <Icon
              name='map'
              size={18}
              color='#999999'
              style={{ marginRight: 10 }}
            />

          } />

        <TouchableOpacity
          onPress={handleSubmit}
          style={{ backgroundColor: '#1E68EF', justifyContent: 'center',
          alignItems: 'center', width:'100%', padding:10, borderRadius:10, elevation:6, marginTop: '5%'}}>
            <Text style={{ color:'white', fontSize: 18, fontFamily: 'montserrat-regular',
        }}>{isFetching ? 'Loading...' : 'Edit Details'}</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.button} onPress={handleSubmit}>

          <Text style={styles.buttontext}>Edit Details</Text>
        </TouchableOpacity> */}

      </ScrollView>
    </SafeAreaView>
    // </KeyboardAvoidingView>
  );
};

EditProfileScreen.navigationOptions = {
  headerTitle: 'Edit Profile'
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: '0%',
    paddingHorizontal: 20,
    marginBottom: 0
  },
  input: {
    //   width: Dimensions.get('window').width - 70,
    //   height: 40,
    // paddingVertical:5,
    //   backgroundColor: 'rgba(255,255,255, 0.8)',
    //   marginBottom:10,
    //   paddingLeft:10,
    //   borderColor:'black',
    //   borderRadius:30, 
    //   elevation:3
  },
  campusInputContainer: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    marginVertical: 15,
    height: 50,
    padding: -20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 0
  },
  button: {
    backgroundColor: '#3379EC',
    paddingVertical: 6,
    // width: Dimensions.get('window').width - 70,
    paddingLeft: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginVertical: 5,
    marginTop: '5%',
    height: 40,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3

  },
  buttontext: {
    color: 'white',
    textAlign: 'center',
    marginTop: '2%'
  }

});

export default EditProfileScreen;
