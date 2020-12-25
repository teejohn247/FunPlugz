import React from 'react';
import {
    Dimensions,
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Button,
    StatusBar
} from 'react-native';
import SearchHeader from 'react-native-search-header';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/HeaderButton';

 
const DEVICE_WIDTH = Dimensions.get(`window`).width;
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    },
    status: {
        zIndex: 10,
        elevation: 2,
        width: DEVICE_WIDTH,
        height: 21,
        backgroundColor: 'black'
    },
    header: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: DEVICE_WIDTH,
        height: 56,
        marginBottom: 6,
        backgroundColor: '#00bcd4'
    },
    label: {
        flexGrow: 1,
        fontSize: 20,
        fontWeight: `600`,
        textAlign: `left`,
        marginVertical: 8,
        paddingVertical: 3,
        color: `#f5fcff`,
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
});
 
const HeadScreen = (props) => {
    const searchHeaderRef = React.useRef(null);
    return (
        <View style = { styles.container }>
            <StatusBar barStyle = 'light-content' />
            <View/>
            <View style = { styles.header }>
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
            </View>

            
            <SearchHeader
                ref = { searchHeaderRef }
                placeholder = 'Search...'
                placeholderColor = 'gray'
                pinnedSuggestions = {[ `react-native-search-header`, `react-native`, `javascript` ]}
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
            />
          
        </View>
    );
}

HeadScreen.navigationOptions = navData => {
    return {
      headerTitle: 'All Places',
      headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Add Place"
            iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
            onPress={() => {
              navData.navigation.navigate('NewPlace');
            }}
          />
        </HeaderButtons>
      )
    };
  };
export default HeadScreen;

// AppRegistry.registerComponent('Demo', () => Demo);