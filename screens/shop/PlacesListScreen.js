import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform, FlatList, ScrollView, ActivityIndicator, } from 'react-native';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import HeaderButton from '../../components/HeaderButton';
import PlaceItem from '../../components/PlaceItem';
import Grid from '../../components/Grids';
import * as vendorActions from '../../store/actions/vendors';

const PlacesListScreen = props => {
  const vendors = useSelector(state => state.vendors.data);
  const [loading, setLoading] = useState(false);

  const selectItemHandler = async (business_name, id) => {
    console.log('hereee')
   await AsyncStorage.setItem('vendor_id', id)
    // AsyncStorage.setItem('Data', token)
    console.log('test',AsyncStorage.getItem('vendor_id'))

    
    setLoading(true);
    props.navigation.navigate('PlaceDetail', {
      placeTitle: business_name,
      placeId: id
    });
  setLoading(false);
  };
  // useEffect(() => {
  //   setLoading(true);
    // dispatch(gameActions.viewGame())
    // .then(() => {
    //   setLoading(false);
    // });
  // }, [dispatch]);

  console.log(vendors);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(vendorActions.vendors())
    .then(() => {
      setLoading(false);
    });
  }, [dispatch]);

  return (
    <View>

    { loading ? (
      <ActivityIndicator size="large"  color="black" style={{
        position:'absolute', left:0, right:0, bottom:0, top:0 }}/>    
    ) : (
    <FlatList
      data={vendors}
      keyExtractor={item => item.id.toString()}
      renderItem={itemData => (
        <Grid
          // image={itemData.item.imageUri}
          title={itemData.item.business_name}
          address={null}
          onSelect={() => {
            setLoading(true);
            selectItemHandler(itemData.item.business_name, itemData.item.id);
            // props.navigation.navigate('PlaceDetail', {
            //   placeTitle: itemData.item.business_name,
            //   placeId: itemData.item.id
            // });
          }}
        // <PlaceItem
        //   // image={itemData.item.imageUri}
        //   title={itemData.item.business_name}
        //   address={null}
        //   onSelect={() => {
        //     props.navigation.navigate('PlaceDetail', {
        //       placeTitle: itemData.item.business_name,
        //       placeId: itemData.item.id
        //     });
        //   }}
        />

      )}
      numColumns={2}

    />
      )}
      </View>
  );
};

PlacesListScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Places',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add Place"
          iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
          onPress={() => {
            navData.navigation.navigate('NewPlace');
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({});

export default PlacesListScreen;
