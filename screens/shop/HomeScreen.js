import React from 'react';
import { StyleSheet, Dimensions, View, Text, ScrollView, TextInput, Image, SafeAreaView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/HeaderButton';
import CarouselSample from '../../components/CarouselSample';
import { Ionicons } from '@expo/vector-icons';
import auth from '../../store/reducers/auth';
import Grid from '../../components/Grids';



const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');


const HomeScreen = navData => {
  

  return(
    <SafeAreaView style={{flex: 1 , backgroundColor : 'transparent'}} forceInset={{ top: 'always', horizontal: 'never' }}>

  <ScrollView>

     {/* <Text style={{ flex: 1, marginTop:30, zIndex:99, color:'white'}}>This is Home</Text> */}
     <View style={{flexDirection:'row', zIndex:99, marginTop:40}}>
     <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
          color="blue"
        />
        </HeaderButtons>
        <Text style={{color:'white', marginTop:2, fontSize:20, backgroundColor:'black', padding:5, fontFamily: 'montserrat'}}>FunPlugz</Text>
        </View>

     <View style={{ flex: 1, justifyContent: 'center', height:height, alignItems: 'center', position:'relative', top:-50, backgroundColor:'white'}}>
      <View >
     
      <Image
      style={{  resizeMode: "contain", width: width, height: 350, marginTop:350}}
      source={require('../../images/tst1.jpg')}
      />

      </View>

      <View style={{width: width - 50, backgroundColor: 'white', position:'relative', top:-150, height: 150,  zIndex:99, borderRadius:20, elevation:10}}>
      <TextInput
      // placeholder 
      style={{  height:40, backgroundColor: '#DCDCDC', color:'#A6A6A6', width: width - 100,  borderRadius:20, padding:20, justifyContent:'center', alignItems:'center', marginLeft: 'auto', marginRight:'auto', marginTop: 20 }}
      />

      {/* <AirbnbRating
        count={5}
        // reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
        defaultRating={5}
        size={20}
        isDisabled={true}
      /> */}
      
      {/* <View>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />;
      <Ionicons name="md-checkmark-circle" size={32} color="green" />;
      <Ionicons name="md-checkmark-circle" size={32} color="green" />;
      <Ionicons name="md-checkmark-circle" size={32} color="green" />;
      </View> */}
      <View style={{width: '100%',flexDirection:'row',justifyContent:'space-between',alignContent:'space-between',
        paddingLeft:50, paddingRight:50, paddingTop:10, marginLeft:'auto', marginRight:'auto'}}>
         <View style={{alignItems:'center', paddingRight:30}}>
         <Ionicons
          name={'ios-apps'}
          size={30}
          color={'orange'}
      />
      <Text style={{textAlign:'center'}}>Vendors</Text>
         </View>
      <View style={{alignItems:'center',  paddingRight:30, elevation:2}}>
       <Ionicons
          name={'logo-playstation'}
          size={30}
          color={'orange'}
          style={{elevation:9}}

      />
      <Text style={{textAlign:'center'}}>Game</Text>
      </View>
      <View style={{alignItems:'center',  paddingRight:30}}>
       <Ionicons
          name={'md-share'}
          size={30}
          color={'orange'}

      />
      <Text style={{textAlign:'center'}}>Share</Text>
      </View>
      </View>
     


      </View>
      <View style={{color:'black', padding:20, fontFamily:'montserrat-regular',position:'relative', top:-150, fontSize:18, height:0}}>
      <Text style={{fontFamily:'montserrat-regular', marginBottom:2}}> Popular Places</Text>
      </View>
      <View style={{position:'relative', top:-140,}}>
      <CarouselSample />
      </View>
      

     
      
      </View>
      <View style={{color:'black', padding:20, marginLeft:'auto', marginRight:'auto', fontFamily:'montserrat-regular', fontSize:18, height:0}}>
      <Text style={{fontFamily:'montserrat-regular', marginBottom:2}}> Popular Places</Text>
      </View>
      <View>
        <Grid />
      </View>


     </ScrollView>
     </SafeAreaView>

  )
};

HomeScreen.navigationOptions = navData => {
  return {
    headerVisible: false,
    header: () => null
    // headerTitle: 'FunPlugz',
  //   headerLeft: (
      // <HeaderButtons HeaderButtonComponent={HeaderButton}>
      //   <Item
      //     title="Menu"
      //     iconName="ios-menu"
      //     onPress={() => {
      //       navData.navigation.toggleDrawer();
      //     }}
      //     // color="blue"
      //   />
  //     </HeaderButtons>
  //   )
  };
};

const styles = StyleSheet.create({
//   home: {
//     width: width,    
//   },
//   articles: {
//     width: width - theme.SIZES.BASE * 2,
//     paddingVertical: theme.SIZES.BASE,
//   },
});

export default HomeScreen;
