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
      <FlatList
        data={ENTRIES1}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <View style={{flexDirection: 'column', width:'50%', padding:5, elevation:10}}>
            <Image
              source={{uri: item.illustration}}
              style={styles.image}
              
            />
             
            
             <View style={{flexDirection:'column', width:'100%', alignItems:'center', justifyContent:'center', justifyContent:'space-between', backgroundColor:'white', elevation:10, paddingVertical:20, borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
            <View >
            <Text numberOfLines={1} style={{textAlign:'left', padding:0, alignItems:'center'}}>
              {item.title}
            </Text>
            </View>
            <View>
            {/* <Rating
              type='star'
              ratingCount={5}
              imageSize={12}
            /> */}
            </View>
            </View>
    
    </View>
        )}
        numColumns={2}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

    width:'100%',
    height:100,
    borderTopRightRadius:2,
    borderTopLeftRadius:2,
    // marginBottom:20
    // padding:10,
    // margin:5
  },
});