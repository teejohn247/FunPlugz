import React from 'react';
import { Platform, SafeAreaView, Button, View, Image } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const ImageHeader = props => (
    <View style={{ backgroundColor: '#eee' }}>
      <Image
        // style={}
        source={require('../images/img3.jpg')}
      />
      <Header {...props} style={{ backgroundColor: 'transparent' }}/>
    </View>
  );

  export default ImageHeader