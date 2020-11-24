import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Platform,
  TouchableNativeFeedback
} from 'react-native';

const CategoryGridTile = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  // <FlatList
  //     keyExtractor={(item, index) => item.id}
  //     data={selectGame}
  //     renderItem={({item, index}) => <CategoryGridTile
  //       title={item.game_name}
  //       color={colors[index % colors.length]}
  //         onSelect={() => {
  //           selectItemHandler(item.id, item.game_name);
  //         }}
  //         // dispatch(gameActions.selectGame(item.id));
  //     />}
  const imgs = ['../images/tst1.jpg', '../images/tst2.jpg', '../images/tst3.jpg']
  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1, elevation:6, width:'50%'}} onPress={props.onSelect}>
    <ImageBackground style={{  ...styles.container, backgroundColor:props.color, }} source={require('../images/tst3.jpg')} imageStyle={{opacity: 0.2}}>

        {/* <View
          style={{ ...styles.container, ...{ backgroundColor: props.color, opacity:9, elevation:6 } }}
        > */}

          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        {/* </View> */}
      </ImageBackground>

      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden'
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 1,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right',
    color:'white',
    // textShadowColor:'gray'
  }
});

export default CategoryGridTile;
