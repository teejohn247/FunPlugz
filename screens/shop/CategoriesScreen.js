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

const CategoriesScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const selectGame = useSelector(state => state.game.data);

  const selectItemHandler = (id, title) => {
    console.log('hereee')
    setIsLoading(true);
    dispatch(gameActions.selectGame(id))
    .then(() => {
    console.log('hh')
    props.navigation.navigate('Question', {
      Id: id,
      Title: title
    });
  })
  setIsLoading(false);
  };

  const colors = ['orange', '#800000', '#008080']



  useEffect(() => {
    setIsLoading(true);
    dispatch(gameActions.viewGame())
    .then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  console.log(selectGame)
    var array = [];
    for (let i = 0; i < selectGame.length; i++) {
      console.log('test', selectGame[i].id)
      array.push(selectGame[i].id)
    }
    console.log('array', array)

  // const renderGridItem = (itemData) => {
    
  //   return (
  //     <View>
  //     {isLoading ? (
  //       <ActivityIndicator size="small" color='red' />
  //     ) : (
          
  //     //   <CategoryGridTile
  //     //   title={itemData.item.name}
  //     //   color={itemData.item.color}
  //     //   onSelect={() => {
  //     //     dispatch(gameActions.selectGame(array.id));
  //     //   }}
  //     //   // onSelect={() => {
  //     //   //   props.navigation.navigate({
  //     //   //     routeName: 'CategoryMeals',
  //     //   //     params: {
  //     //   //       categoryId: itemData.item.id
  //     //   //     }
  //     //   //   });
  //     //   // }}
  //     // />

  //     // )}
  //     // </View>
  //   );
  // };

  // <View style={styles.buttonContainer}>
  //             {isLoading ? (
  //               <ActivityIndicator size="small" color={Colors.primary} />
  //             ) : (
  //               <Button
  //                 title={isSignup ? 'Sign Up' : 'Login'}
  //                 color={Colors.primary}
  //                 onPress={authHandler}
  //               />
  //             )}
  //           </View>

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={selectGame}
      renderItem={({item, index}) => 
       <CategoryGridTile
        title={item.game_name}
        color={colors[index % colors.length]}
          onSelect={() => {
            setIsLoading(true);
            selectItemHandler(item.id, item.game_name);
          }}
          // dispatch(gameActions.selectGame(item.id));
      />
        }
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Game'
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;
