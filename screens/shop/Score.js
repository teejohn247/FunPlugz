import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator

} from 'react-native';

import { CATEGORIES } from '../../data/dummy-data';
import { useSelector, useDispatch } from 'react-redux';
import * as gameActions from '../../store/actions/game';
import CategoryGridTile from '../../components/CategoryGridTile';

const ScoreScreen = props => {
 

  return (
<Text>Score</Text>
  );
};

ScoreScreen.navigationOptions = {
  headerTitle: 'Game'
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ScoreScreen;
