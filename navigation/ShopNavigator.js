import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer,
  DrawerItems
} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Platform, SafeAreaView, Button, View, Image, ImageBackground, Dimensions, ScrollView, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import HomeScreen from '../screens/shop/HomeScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import AuthScreen from '../screens/user/AuthScreen';
import StartupScreen from '../screens/StartupScreen';
import Colors from '../constants/Colors';
import * as authActions from '../store/actions/auth';
import OnBoardingScreen from '../screens/onBoarding/OnBoarding';
import ImageHeader from '../components/ImageHeader';


const defaultNavOptions = {

  // headerVisible: false,
  // header: () => null

  // headerStyle: {
  //   backgroundColor: 'transparent'
  // },
  // headerBackground: (
  //   <Image
  //      style={{resizeMode:'cover'}}
  //      style={{ width: '100%', height: 200, zIndex:10 }}
  //      source={require('../images/tst1.jpg')}
  //   />
  // ),
  // headerTitleStyle: {
  //   fontFamily: 'montserrat'
  // },
  // headerBackTitleStyle: {
  //   fontFamily: 'open-sans'
  // },
  // headerTintColor: Platform.OS === 'android' ? 'black' : Colors.primary
};




const ProductsNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    // ProductDetail: ProductDetailScreen,
    // Cart: CartScreen
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    navigationOptions: {
      // headerBackground: (
      //   <Image
      //     // style={}
      //     style={{ width: 200, height: 50 }}
      //     source={require('../images/img3.jpg')}
      //   />
      // ),
    },
    defaultNavigationOptions: defaultNavOptions
  }
);



const OrdersNavigator = createStackNavigator(
  {
    Orders: OrdersScreen
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
);

const tabScreenConfig = {
  Home: {
    screen: ProductsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-home" size={25} color={'orange'} />
        );
      },
      tabBarColor: Colors.primaryColor
    }
  },
  Favorites: {
    screen: OrdersNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor
    }
  }
};

const HomeTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'blue',
        shifting: true,
        barStyle: {
          backgroundColor: 'white',
          color:'red',
          elevation: 10
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor
        }
      });
      // vendor
      // game
      // profile 
      // settings
      // feedback 
      // share App 

      const VendorNavigator = createStackNavigator(
        {
          UserProducts: HomeScreen,
          // EditProduct: EditProductScreen
        },
        {
          navigationOptions: {
            drawerIcon: drawerConfig => (
              <Ionicons
                name={Platform.OS === 'android' ? 'ios-apps' : 'ios-apps'}
                size={23}
                color={drawerConfig.tintColor}
              />
            )
          },
          defaultNavigationOptions: defaultNavOptions
        },
       createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'blue',
        shifting: true,
        barStyle: {
          backgroundColor: 'white',
          elevation: 10
        }
      })
    // 
      );


      const GameNavigator = createStackNavigator(
        {
          UserProducts: HomeScreen,
          // EditProduct: EditProductScreen
        },
        {
          navigationOptions: {
            drawerIcon: drawerConfig => (
              <Ionicons
                name={Platform.OS === 'android' ? 'logo-playstation' : 'ios-game-controller'}
                size={23}
                color={drawerConfig.tintColor}
              />
            )
          },
          defaultNavigationOptions: defaultNavOptions
        }
      );

const ProfileNavigator = createStackNavigator(
  {
    UserProducts: HomeScreen,
    // EditProduct: EditProductScreen
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'ios-copy' : 'ios-create'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
);

const SettingsNavigator = createStackNavigator(
  {
    UserProducts: HomeScreen,
    // EditProduct: EditProductScreen
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'ios-settings' : 'ios-create'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
);


const ShareNavigator = createStackNavigator(
  {
    UserProducts: HomeScreen,
    // EditProduct: EditProductScreen
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-share' : 'ios-create'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
);

const FeedbackNavigator = createStackNavigator(
  {
    UserProducts: HomeScreen,
    // EditProduct: EditProductScreen
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'ios-archive' : 'ios-create'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
);

const CustomDrawerContentComponent = (props) => (
  <ScrollView style={{marginTop:20, marginBottom:20, paddingBottom:100, fontFamily:'montserrat-regular'}}>
    <ImageBackground style={{  backgroundColor:'black'}} source={require('../images/tst1.jpg')} imageStyle={{opacity: 0.1}} >
    {/* <View style={{,}}> */}

    <SafeAreaView style={{flex: 1 , backgroundColor : 'transparent'}} forceInset={{ top: 'always', horizontal: 'never' }}>
     <Image style={{width:100, height:100, borderRadius:50, marginLeft:'auto', marginRight:'auto', marginTop:15}}source={require('../images/tst1.jpg')}/>
      <View style={{marginLeft:'auto', marginRight:'auto', margin:5, }}>
      <Text style={{color:'white', textAlign:'center', fontSize:18 }}>Tolu Johnson</Text>
      <Text style={{color:'white', textAlign:'center', fontSize:15 }}>teejohn247@gmail.com</Text>
      <Text style={{color:'white', textAlign:'center', fontSize:15, marginBottom:10}}>08161582774</Text>

      </View>
    </SafeAreaView>
    {/* </View> */}
    </ImageBackground>
    <DrawerItems {...props} />

  </ScrollView>

    // {/* <Image style={{flex: 1 , position : 'absolute' , top : 0 , height :Dimensions.get('window').height  , width : Dimensions.get('window').width}}source={require('../images/tst1.jpg')}/> */}
    
);

const ShopNavigator = createDrawerNavigator(
  {
    Vendors: HomeTabNavigator,
    game: GameNavigator,
    Profile: ProfileNavigator,
    Settings: SettingsNavigator,
    Share: ShareNavigator,
    Feedback: FeedbackNavigator,

  },
  {
      // initialRouteName:'Library',
      drawerWidth: Dimensions.get('window').width,
      // drawerHeight: Dimensions.get('window').height ,

      drawerPosition: 'left',
      useNativeAnimations : true,
      // drawerBackgroundColor : 'transparent',
      contentComponent: CustomDrawerContentComponent,
      contentOptions: {
        activeTintColor: 'white',
        activeBackgroundColor : 'orange',
        inactiveTintColor : '#383838',
        
        itemsContainerStyle: {
          marginVertical: 0,
          // backgroundColor:'gray',
          fontFamily:'montserrat-regular',
          padding:10,
          margin:10,
          marginTop:20,
          marginBottom:50,
          paddingBottom:20,

        },
      
        iconContainerStyle: {
          opacity: 7,
        },
        itemStyle :{
          height : 50,
          // backgroundColor:'#DCDCDC',
          borderRadius:5,
          elevation:2,
          fontFamily:'montserrat-regular',
        
          // paddingBottom:5,
          marginBottom:5,
          // borderBottomColor: 'gray',
          // borderBottomWidth: 1,
        }

      },

    // contentOptions: {
    //   activeTintColor: Colors.primary
    // },
    // contentComponent: props => {
    //   const dispatch = useDispatch();
    //   return (
    //     <View style={{ flex: 1, paddingTop: 20, padding:10 }}>
    //       <SafeAreaView forceInset={{ top: 'always', horizontal: 'never',  padding:10 }}>
    //         <DrawerItems {...props} />
    //         <Button
    //           title="Logout"
    //           color={Colors.primary}
    //           onPress={() => {
    //             dispatch(authActions.logout());
    //             // props.navigation.navigate('Auth');
    //           }}
    //         />
    //       </SafeAreaView>
    //     </View>
    //   );
    // }
  }
);


const OnBoardingNavigator = createStackNavigator(
  {
    OnBoarding: OnBoardingScreen
  },
);

const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen
  },
  {
    // defaultNavigationOptions: defaultNavOptions
  }
);

const MainNavigator = createSwitchNavigator({
  Startup: StartupScreen,
  OnBoarding:OnBoardingNavigator,
  Auth: AuthNavigator,
  Shop: ShopNavigator
});

export default createAppContainer(MainNavigator);
