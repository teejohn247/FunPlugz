import React, { useEffect, useState } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import * as authActions from '../store/actions/auth';
// import onBoarding from '../screens/onBoarding/OnBoarding'




const StartupScreen = props => {
  const dispatch = useDispatch();

  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    tryLogin();
  }, []);

  const tryLogin = async () => {
    // await AsyncStorage.removeItem('alreadyLaunched');
    // var isLarger = new Date("2-11-2012 13:40:00") > new Date("01-11-2012 10:40:00");
    const onBoardData = await AsyncStorage.getItem('alreadyLaunched');
    console.log('confirm',onBoardData)
    if (onBoardData == null) {
      console.log('null')
      AsyncStorage.setItem('alreadyLaunched', 'true'); 
      setIsFirstLaunch(true);
      // props.navigation.navigate('OnBoarding');
      props.navigation.navigate('Auth');
    } 
    
    else if(onBoardData){
      try{
        const userData =await AsyncStorage.getItem('Data');
        // console.log('data');
        console.log('chk', JSON.stringify(userData))
        if (!userData) {
          console.log(!userData);
          props.navigation.navigate('Auth');
          return;
        }else{
          // props.navigation.navigate('Shop');
          props.navigation.navigate('Auth');

          dispatch(authActions.authenticate(userData));
        }
      } catch (err) {
        console.log(err);
      }
    console.log('data');

    
    
    // console.log('here');
    // props.navigation.navigate('Auth');


 

    // }

  };
}

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default StartupScreen;
