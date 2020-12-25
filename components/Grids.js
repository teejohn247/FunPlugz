import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {FlatList, Image} from 'react-native';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Rating, AirbnbRating } from 'react-native-ratings';


const ENTRIES1 = [
  {
    title: 'LEKKI',
    id: 1,
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://images.flyinstatic.com/preprodhotels/ebtranet-images/77801/01.jpg',
  },
  {
    title: 'IKEJA',
    id: 2,
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://images.flyinstatic.com/preprodhotels/ebtranet-images/77801/01.jpg',
  },
  {
    title: 'IKORODU',
    id: 3,
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i1.wp.com/blog.wakanow.com/wp-content/uploads/2019/02/manor-house-2359884_1280.jpg?resize=740,480',
  },
  {
    title: 'VICTORIA ISLAND',
    id: 4,
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://netstorage-legit.akamaized.net/images/vllkyt7m6g2vne4su.jpg?imwidth=900',

  },
  {
    title: 'AJAH',
    id: 5,
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://ocdn.eu/images/pulscms/YzA7MDA_/49b5defbe83c83458a960759c942e7db.jpeg',
  },
  
];
const {width: screenWidth} = Dimensions.get('window');
// const [loading, setLoading] = useState(false);


const MyCarousel = props => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

 

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goForward}>
        {/* <Text>go to next slide</Text> */}
      </TouchableOpacity>
      
      {/* <Image style={styles.image} source={{ uri: props.image }} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.address}>{props.address}</Text>
      </View> */}

      {}

      <TouchableOpacity onPress={props.onSelect} style={{ flexDirection: 'column', width: '95%', padding: 5,backgroundColor:'white', padding:10, margin:10,
        elevation:4, justifyContent:'center' }}>
        <View style={{flexDirection:'row', width:'100%'}}>
          {/* <Image
            source={{ uri: ENTRIES1[0].illustration }}
            style={styles.image}
          /> */}
          {/* <View style={{ flexDirection: 'row', width: '60%', justifyContent:'space-between', alignItems:'space-between', backgroundColor: 'white', paddingVertical: 20}}>
            <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems:'space-between'}}>
              <Text>
                {props.title}
              </Text>
              <Text>
                2.4KM
              </Text>
            </View>
            <View>

            </View>
          </View> */}
          <View style={{flexDirection: 'row',  width:'100%', }}>
          <Image style={{ width:110, height:120,  borderRadius: 15, }} source={{ uri: ENTRIES1[0].illustration }}
          />
          <View style={{flexDirection: 'column', }}>
          <Text style={{fontFamily: 'montserrat', fontSize:18, width:'70%', marginLeft:20}}>{props.title}</Text>
          <View style={{flexDirection: 'row', paddingTop:5}}>
          <Ionicons style={{ marginLeft: 20}} name={'md-navigate'}size={23}
            color="gray"
            /> 
            <Text style={{fontFamily: 'montserrat-regular', marginLeft:5, marginTop: 3, width:'60%', flexWrap: 'wrap'}}>15, Toyin Street, Opebi, Ikeja, Lagos</Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop:5, marginLeft: 30}}>
          {/* <Ionicons style={{ marginLeft: 20}} name={'md-time'}size={23}
            color="gray"
            />  */}
          <Rating
          type='star'
          ratingCount={5}
          imageSize={20}
          ratingColor='#3498db'
          selectedColor='red'
          ratingBackgroundColor='#c8c7c8'
          tintColor= 'white'
          />
            </View>
            </View>
          </View>

        </View>
      </TouchableOpacity>


      {/* <FlatList
        data={ENTRIES1}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
      <TouchableOpacity onPress={props.onSelect} style={{flexDirection: 'column', width:'50%', padding:5, elevation:10}}>
          <View >
              <Image
                source={{uri: item.illustration}}
                style={styles.image}
          />
          <View style={{flexDirection:'column', width:'100%', alignItems:'center', justifyContent:'center', justifyContent:'space-between', backgroundColor:'white', elevation:10, paddingVertical:20, borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
          <View >
          <Text numberOfLines={1} style={{textAlign:'left', padding:0, alignItems:'center'}}>
          {props.title}
          </Text>
          </View>
          <View>
          
            </View>
            </View>
    
          </View>
    </TouchableOpacity>

        )}
        numColumns={2}
      /> */}
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    // ...StyleSheet.absoluteFillObject,
    // flex:1,
    resizeMode: 'cover',

    width:'40%',
    height:120,
    borderRadius:20
    // borderTopRightRadius:20,
    // borderTopLeftRadius:20,
    // marginBottom:20
    // padding:10,
    // margin:5
  },
});