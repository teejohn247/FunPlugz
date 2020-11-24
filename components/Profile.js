import React from 'react';
import { StyleSheet, Dimensions, View, Text, ScrollView, TextInput, Image, SafeAreaView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/HeaderButton';
import CarouselSample from '../../components/CarouselSample';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import auth from '../../store/reducers/auth';
import Grid from '../../components/Grids';



const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');


const HomeScreen = navData => {
  
  const userProfile = useSelector(state => state.profile);
  const dispatch = useDispatch();

  

const styles = StyleSheet.create({

});

export default HomeScreen;
