import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
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
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://www.brabbu.com/en/inspiration-and-ideas/wp-content/uploads/2016/03/10-Beautiful-Living-Room-Ideas-By-Interior-Designers-kelly-hoppen1.jpg',
  },
  {
    title: 'IKEJA',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://www.asianpaints.com/content/dam/asian_paints/services/beautiful-homes-service/beautiful-homes-testimonials-sudarshan-tandon-asian-paints.jpg',
  },
  {
    title: 'IKORODU',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2018/10/16191124/bright-and-beautiful-living-room-750x500.jpg',
  },
  {
    title: 'VICTORIA ISLAND',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://img.freepik.com/free-photo/beautiful-interior-design-with-empty-check-counter_9083-1240.jpg?size=626&ext=jpg',

  },
  {
    title: 'AJAH',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2019/08/17221214/cleo-county-living-cum-dining-room.jpg',
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

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          
          {...parallaxProps}
        />
         <View style={{flexDirection:'column', color: 'white', backgroundColor:'black', opacity:0.7, justifyContent:'center', position:'relative', top:-screenWidth +150, alignItems: 'center', padding:20,}}>
        <View >
        <Text numberOfLines={2} style={{color:'white', fontFamily: 'montserrat', fontSize: 22, opacity:1, zIndex:99}}>
          {item.title}
        </Text>
        </View>
        <View>
        <Rating
          type='star'
          ratingCount={5}
          imageSize={20}
          // ratingBackgroundColor='black'
          ratingColor='blue'
          selectedColor="blue"
          // tintColor= 'white'

          // tintColor='transparent'
       
        />
        </View>

</View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goForward}>
        {/* <Text>go to next slide</Text> */}
      </TouchableOpacity>
      <Carousel
      // layout={'tinder'} layoutCardOffset={`9`}
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        enableMomentum = {false}
        lockScrollWhileSnapping = {true}
        autoplay ={true}
        renderItem={renderItem}
        hasParallaxImages={true}
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
    height: screenWidth,
    // backgroundColor: 'black',
    borderRadius: 20,

  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'black',
    opacity: 0.9,
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    opacity: 0.4
  },
});