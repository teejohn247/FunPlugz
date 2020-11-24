import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import ReduxThunk from 'redux-thunk';
import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { TouchableOpacity } from "react-native-gesture-handler";
// import productsReducer from './store/reducers/products';
// import cartReducer from './store/reducers/cart';
// import ordersReducer from './store/reducers/orders';
import authReducer from './store/reducers/auth';
import questionReducer from './store/reducers/game';
import gameReducer from './store/reducers/game';
import NavigationContainer from './navigation/NavigationContainer';



const rootReducer = combineReducers({
  auth: authReducer,
  game: gameReducer,
  question: questionReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)));

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'montserrat': require('./assets/fonts/Montserrat-Bold.ttf'),
    'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf')

  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
}