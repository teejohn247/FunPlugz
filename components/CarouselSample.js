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
    illustration: 'https://images.flyinstatic.com/preprodhotels/ebtranet-images/77801/01.jpg',
  },
  {
    title: 'IKEJA',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://images.flyinstatic.com/preprodhotels/ebtranet-images/77801/01.jpg',
  },
  {
    title: 'IKORODU',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i1.wp.com/blog.wakanow.com/wp-content/uploads/2019/02/manor-house-2359884_1280.jpg?resize=740,480',
  },
  {
    title: 'VICTORIA ISLAND',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://netstorage-legit.akamaized.net/images/vllkyt7m6g2vne4su.jpg?imwidth=900',

  },
  {
    title: 'AJAH',
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
         <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'white', elevation:10, padding:20, borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
        <View >
        <Text numberOfLines={2}>
          {item.title}
        </Text>
        </View>
        <View>
        <Rating
          type='star'
          ratingCount={5}
          imageSize={20}
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
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});