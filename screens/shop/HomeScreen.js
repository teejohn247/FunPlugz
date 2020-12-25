import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, View, Text, ScrollView, FlatList, TextInput, Image, SafeAreaView,
    StatusBar, Button,
    ActivityIndicator, AsyncStorage, RefreshControl } from 'react-native';
    import { Ionicons } from '@expo/vector-icons';
// import {AsyncStorage} from '@react-native-async-storage/async-storage';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/HeaderButton';
import CarouselSample from '../../components/CarouselSample';
import { useSelector, useDispatch } from 'react-redux';
// import { Ionicons } from '@expo/vector-icons';
import * as vendorActions from '../../store/actions/vendors';
import auth from '../../store/reducers/auth';
import Grid from '../../components/Grids';

import SearchHeader from 'react-native-search-header';


const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');

const DEVICE_WIDTH = Dimensions.get(`window`).width;



const HomeScreen = props => {

  const userProfile = useSelector(state => state.profile);
  const vendors = useSelector(state => state.vendors.data);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  // const wait = (timeout) => {
  //   return new Promise(resolve => {
  //     setTimeout(resolve, timeout);
  //   });
  // }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // setLoading(true);
    dispatch(vendorActions.vendors())
    .then(() => {
      // setLoading(false);
      setRefreshing(false)
    });
    // wait(2000).then(() => setRefreshing(false));
  }, []);


  const searchHeaderRef = React.useRef(null);



  
  const selectItemHandler = async (business_name, id, longitude, latitude) => {
    try{
      console.log('hereee2', id)
      await AsyncStorage.setItem('vendor_id', `${id}`)
       // AsyncStorage.setItem('Data', token)
      //  console.log('test',AsyncStorage.getItem('vendor_id'))
       setLoading(true);
       props.navigation.navigate('Map', {
         placeTitle: business_name,
         placeId: id,
         longitude: longitude,
         latitude: latitude
       });
     setLoading(false);
    } catch (err) {
      console.log(err);
    }
    
  }

  // useEffect(() => {
  //   dispatch(vendorActions.vendors());
  // }, [dispatch]);

  useEffect(() => {
    setLoading(true);
    dispatch(vendorActions.vendors())
    .then(() => {
      setLoading(false);
    });
  }, [dispatch]);

  useEffect(() => {
    setSearching(true);
    props.navigation.navigate('Place')
    setSearching(false);
  }, [searching]);
  console.log(userProfile);

  const IoniconsHeaderButton = (props) => (
    // the `props` here come from <Item ... />
    // you may access them and pass something else to `HeaderButton` if you like
    <HeaderButton IconComponent={Ionicons} iconSize={23} color="blue" {...props} />
  );

  return (
    // <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }} forceInset={{ top: 'always', horizontal: 'never' }}>

      <View>
      {/* { loading && vendors.length == 0 ? <Text>No Data</Text> } */}
      { loading ? (
      <ActivityIndicator size="large"  color="#1E68EF" style={{
        position:'absolute', left:0, right:0, bottom:0, top:300 }}/>    
      ) : (
      
      <ScrollView contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>

        {/* <HeaderSearchBar onChangeText={text => console.log(text)} /> */}
        <StatusBar barStyle = 'light-content' />
            <View style = { styles.status }/>
            {/* <View style = { styles.header }>
                <Text style = { styles.label }> Demo </Text>
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                    props.navigation.toggleDrawer();
                    }}
                    color="blue"
                />
                </HeaderButtons>

                <Button
                    title = 'Search'
                    color = 'black'
                    onPress = {() => searchHeaderRef.current.show()}
                />
            </View> */}
            <View style = { styles.header }>
                {/* <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                    props.navigation.toggleDrawer();
                    }}
                    // color="blue"
                />
                </HeaderButtons> */}
                

                <View style={{marginLeft:10}}>
                <Ionicons name="md-menu" size={23} color="grey"  onPress={() => props.navigation.toggleDrawer()} />
                </View>


                <Text style = { styles.label }> FunPlugz </Text>

                <View style={{marginRight:10}}>
                <Ionicons name="ios-search" size={23} color="grey"  onPress = {() => searchHeaderRef.current.show()} />
                </View>

            </View>

            
            <SearchHeader
                ref = { searchHeaderRef }
                placeholder = 'Search...'
                placeholderColor = 'gray'
                dropShadowed = {true}
                // pinnedSuggestions = {[ `react-native-search-header`, `react-native`, `javascript` ]}
                onClear = {() => {
                    console.log(`Clearing input!`);
                }}
                onGetAutocompletions = {async (text) => {
                    if (text) {
                        const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&q=${text}`, {
                            method: `get`
                        });
                        const data = await response.json();
                        return data[1];
                    } else {
                        return [];
                    }
                }}
                onSearch = {async (text) => {
                  console.log('hello2',text.nativeEvent.text)
                  setSearching(true);
                  dispatch(vendorActions.search(text.nativeEvent.text))
                  .then(() => {
                    setSearching(false);
                  });
              }}
              onEnteringSearch = {async (text) => {
                console.log('hello2',text.nativeEvent.text)
                setSearching(true);
                dispatch(vendorActions.search(text.nativeEvent.text))
                .then(() => {
                  setSearching(false);
                });
            }}
            />
        <View style={{ flexDirection: 'row', zIndex: 99, marginTop: 40, color:"black" }}>
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName="ios-menu"
              onPress={() => {
                props.navigation.toggleDrawer();
              }}
              color="black"
            />
          </HeaderButtons>
          {/* <Text style={{ color: 'white', marginTop: 2, fontSize: 20, backgroundColor: 'black', padding: 5, fontFamily: 'montserrat' }}>FunPlugz</Text> */}
        </View>

        <View style={{textAlign: 'left',color: 'black', padding: 20, fontFamily: 'montserrat-regular', position: 'relative', top:-80  , zIndex:1,  height: 0 }}>
            <Text style={{ fontFamily: 'montserrat', marginBottom: 2, textAlign:'left', fontSize: 18, }}> POPULAR PLACES</Text>
          </View>

        <View style={{ flex: 1, justifyContent: 'center', height: height, alignItems: 'center', position: 'relative', top: -50, backgroundColor: 'white' }}>
          {/* <View >

            <Image
              style={{ resizeMode: "contain", width: width, height: 350, marginTop: 350 }}
              source={require('../../images/tst1.jpg')}
            />

          </View> */}
{/* 
          <View style={{ width: width - 50, backgroundColor: 'white', position: 'relative', top: -150, height: 150, zIndex: 99, borderRadius: 20, elevation: 10 }}>
            <TextInput
              // placeholder 
              style={{ height: 40, backgroundColor: '#DCDCDC', color: '#A6A6A6', width: width - 100, borderRadius: 20, padding: 20, justifyContent: 'center', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
            />

                
            
            <View style={{
              width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between',
              paddingLeft: 50, paddingRight: 50, paddingTop: 10, marginLeft: 'auto', marginRight: 'auto'
            }}>
              <View style={{ alignItems: 'center', paddingRight: 30 }}>
                <Ionicons
                  name={'ios-apps'}
                  size={30}
                  color={'#3900E6'}
                />
                <Text style={{ textAlign: 'center', fontFamily: 'montserrat-regular' }}>Vendors</Text>
              </View>
              <View style={{ alignItems: 'center', paddingRight: 30, elevation: 2 }}>
                <Ionicons
                  name={'logo-xbox'}
                  size={30}
                  color={'#3900E6'}
                  style={{ elevation: 9 }}

                />
                <Text style={{ textAlign: 'center', fontFamily: 'montserrat-regular' }}>Game</Text>
              </View>
              <View style={{ alignItems: 'center', paddingRight: 30 }}>
                <Ionicons
                  name={'md-share'}
                  size={30}
                  color={'#3900E6'}

                />
                <Text style={{ textAlign: 'center', fontFamily: 'montserrat-regular' }}>Share</Text>
              </View>
            </View>



          </View> */}
          
          <View style={{ position: 'relative' }}>
            <CarouselSample />
          </View>




        </View>
        <View style={{flexDirection:'row', alignItems:'space-between', width:'100%', marginTop:20, padding:20, justifyContent:'space-between',  color: 'black',fontFamily: 'montserrat-regular', fontSize: 22, height: 0,
        position:'relative', top: -440 }}>
          <Text style={{ fontFamily: 'montserrat', marginBottom: 2, textAlign: 'left' }}> VENDORS </Text>
          <Text style={{ fontFamily: 'montserrat-regular', marginBottom: 2, textAlign: 'left',color:'#3B1B5F' }}> MORE </Text>

        </View>
        {vendors.length == 0 ? <View style={{height: 100}}>
          <Text style={{ fontFamily: 'montserrat', textAlign: 'center' , position:'relative', top: -460,}} >No Data</Text>
          <Text style={{ fontFamily: 'montserrat-regular', textAlign: 'center', position:'relative', top: -460,}} >Swipe up to refresh</Text>
          </View>:
        <View style={{ position:'relative', top: -460, justifyContent:'center' }}>
          {/* <Grid /> */}
          <FlatList
            data={vendors}
            keyExtractor={item => item.id.toString()}
            renderItem={itemData => (
              <Grid
                title={itemData.item.business_name}
                address={null}
                onSelect={() => {
                  setLoading(true);
                  console.log('itt',itemData)
                  selectItemHandler(itemData.item.business_name, itemData.item.id, itemData.item.longitude, itemData.item.latitude);
                 
                }}
              />
            )}
            numColumns={1}
          />
        </View>
       }
      </ScrollView>
    )}
      </View>

    // </SafeAreaView>

  )
};

HomeScreen.navigationOptions = navData => {
  return {
    headerVisible: false,
    header: () => null
    // headerTitle: 'FunPlugz',
    //   headerLeft: (
    // <HeaderButtons HeaderButtonComponent={HeaderButton}>
      // <Item
      //   title="Menu"
      //   iconName="ios-menu"
      //   onPress={() => {
      //     navData.navigation.toggleDrawer();
      //   }}
      //   color="blue"
      // />
    //     </HeaderButtons>
    //   )
  };
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
},
status: {
    zIndex: 10,
    elevation: 6,
    width: DEVICE_WIDTH,
    // height: 21,
    backgroundColor: 'black'
},
header: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: DEVICE_WIDTH,
    height: 56,
    marginBottom: 6,
    backgroundColor: '#fff',
    elevation:2

},
label: {
  fontFamily: 'montserrat-regular',
    flexGrow: 1,
    fontSize: 20,
    fontWeight: `500`,
    textAlign: `left`,
    marginVertical: 8,
    paddingVertical: 3,
    color: `black`,
    backgroundColor: `transparent`
},
button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    height: 40,
    marginTop: 40,
    borderRadius: 2,
    backgroundColor: `#ff5722`
}
  //   home: {
  //     width: width,    
  //   },
  //   articles: {
  //     width: width - theme.SIZES.BASE * 2,
  //     paddingVertical: theme.SIZES.BASE,
  //   },
});

export default HomeScreen;
