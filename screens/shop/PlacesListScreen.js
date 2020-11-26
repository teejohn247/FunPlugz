import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import HeaderButton from '../../components/HeaderButton';
import PlaceItem from '../../components/PlaceItem';
import Grid from '../../components/Grids';
import * as vendorActions from '../../store/actions/vendors';

const PlacesListScreen = props => {
  const vendors = useSelector(state => state.vendors.data);
  console.log(vendors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(vendorActions.vendors());
  }, [dispatch]);

  return (
    <FlatList
      data={vendors}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <Grid
          // image={itemData.item.imageUri}
          title={itemData.item.business_name}
          address={null}
          onSelect={() => {
            props.navigation.navigate('PlaceDetail', {
              placeTitle: itemData.item.business_name,
              placeId: itemData.item.id
            });
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
