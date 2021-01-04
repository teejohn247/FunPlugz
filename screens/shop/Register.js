
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image,
TouchableWithoutFeedback, Keyboard, SafeAreaView, KeyboardAvoidingView, ImageBackground} from 'react-native';
// import Myform from './LoginForm';

import Myform from './SignUp';


// export default function Login() {
const Register = ({navigation}) => {

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{flex: 1, flexDirection: "column"}}>
        <ImageBackground source={require('../../assets/bg.jpg')} style={styles.headerbg}>
        <View style={styles.gheader}>
            <View style={styles.iheader}>
            <Image source={require('../../assets/log.png')} style={styles.logo}/>
            <Text style={styles.name}>My App</Text>
            </View>
            
        </View>
        <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end', paddingRight:20,position:'relative', top:-200}}>
            <Text style={{color:'white', fontWeight:'bold', fontSize:16}}>Register</Text>
        </View>
        </ImageBackground>
        <ScrollView style={styles.myform}>
         <Myform />
        </ScrollView> 
    {/* <View style={styles.container}>
        <View style={styles.logoContainer}>
            {/* <Image style={styles.logo}
            source={require('../assets/banner.png')}/> */}
            {/* <Image source={require('../assets/log.png')} style={styles.logo}/>
            <Text style={styles.text}>A simple Login App</Text> */}
        {/* </View>
        <View style={styles.myform}>
         <Myform />
        </View> */}
    </View> 
    </TouchableWithoutFeedback>
  );
}

Register.navigationOptions = navData => {
    return {
      headerVisible: false,
      header: () => null
    };
};

const styles = StyleSheet.create({
    headerbg:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        // marginTop:20,

    //  width:'100%',
    //  height:Dimensions.get('window').height / 2,
    //  position:'relative',
    //  alignSelf: 'auto',
    //  borderRadius:100
    },
    gheader:{
        position: 'relative',
        top:-200,
        // height:'100%',
        flexDirection:'column',
        justifyContent:'center',

        alignItems:'center'
        // alignItems:'center',
        // backgroundColor: 'rgba(0,0,0,0.6)'
    },
    name:{
        color:'#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '10%',
    }, 
    iheader:{
        width:160,
        height:160,
        marginTop:'10%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        // flex: 1,
        width:65,
        height:95,
        marginLeft:20,
        marginTop:'60%',
        borderRadius:100,
        
        
        // borderRadius:100,
        // borderColor:'#fff',
        // borderWidth:5
    },
  container: {
    flex: 1,
    // backgroundColor: '#282830',
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer:{
      flexGrow:1,
      alignItems:'center',
      justifyContent:'center',
      width: Dimensions.get('window').width,
      backgroundColor: '#3379EC',
      borderBottomLeftRadius:200
  }, 
//   logo:{
//       width:100,
//       height:100,
//   },
logo:{
    // flex: 1,
    width:65,
    height:95,
    marginLeft:20,
    marginTop:'10%'
    // borderRadius:100,
    // borderColor:'#fff',
    // borderWidth:5
},
  myform:{
      position: 'absolute',
      top:'40%',
      height:'100%',
      width:'100%',
      flex: 1,
  },
  text:{
      color: '#fff'
  }
});


export default Register;





// import React from 'react';
// import { StyleSheet, Text, View, ScrollView, Dimensions, Image,
// TouchableWithoutFeedback, Keyboard, SafeAreaView, KeyboardAvoidingView, ImageBackground} from 'react-native';
// // import Myform from './SignUp';
// import Myform from './LoginForm';


// // export default function SignUp() {
// const Register = () =>  {
//   return (
//     <KeyboardAvoidingView
//     behavior="padding"
//   >
// <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
//         <View style={{flex: 1, flexDirection: "column"}}>
//         <ImageBackground source={require('../../assets/top2.jpg')} style={styles.headerbg}>
//         <View style={styles.gheader}>
//             <View style={styles.iheader}>
//             <Image source={require('../../assets/log.png')} style={styles.logo}/>
//             <Text style={styles.name}>My App</Text>
//             </View>
          
//         </View>
//         <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end', paddingRight:20, marginTop:'10%'}}>
//             <Text style={{color:'white', fontWeight:'bold', fontSize:16}}>Login</Text>
//         </View>
//         </ImageBackground>
//         <ScrollView style={styles.myform}>
//          <Myform />
//         </ScrollView> 
//     {/* <View style={styles.container}>
//         <View style={styles.logoContainer}>
//             {/* <Image style={styles.logo}
//             source={require('../assets/banner.png')}/> */}
//             {/* <Image source={require('../assets/log.png')} style={styles.logo}/>
//             <Text style={styles.text}>A simple Login App</Text> */}
//         {/* </View>
//         <View style={styles.myform}>
//          <Myform />
//         </View> */}
//     </View> 

// {/* 
//           <ScrollView style={{position:'absolute', zIndex:99}}>
//          <Myform />
//         </ScrollView> */}
      
//     {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
//         <View style={{flex: 1, backgroundColor: '#f8f8f8', flexDirection: "column"}}>
    
        
//         <ImageBackground source={require('../../assets/bg.jpg')} style={styles.headerbg}>
//         <View style={styles.gheader}>
//             <View style={styles.iheader}>
//             <Image source={require('../../assets/log.png')} style={styles.logo}/>
//             <Text style={styles.name}>FunPlugz</Text>
//             </View>
          
//         </View>
//         <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end', paddingRight:20, marginTop:'10%'}}>
//             <Text style={{color:'white', fontWeight:'bold', fontSize:16}}>Register</Text>
//         </View>
        
        
//         </ImageBackground> */}
//         {/* <ScrollView style={{position:'absolute', zIndex:99}}>
//          <Myform />
//         </ScrollView> */}
        
//     {/* <View style={styles.container}>
//         <View style={styles.logoContainer}>
//             {/* <Image style={styles.logo}
//             source={require('../assets/banner.png')}/> */}
//             {/* <Image source={require('../assets/log.png')} style={styles.logo}/>
//             <Text style={styles.text}>A simple Login App</Text> */}
//         {/* </View>
//         <View style={styles.myform}>
//          <Myform />
//         </View> */}
//     {/* </View>  */}
//     </TouchableWithoutFeedback>
//      </KeyboardAvoidingView>
//   );
// }


// const styles = StyleSheet.create({
//     // headerbg:{
//     //     flex: 1,
//     //     resizeMode: "cover",
//     //     justifyContent: "center",
//     //     // marginTop:20,

//     // //  width:'100%',
//     // //  height:Dimensions.get('window').height / 2,
//     // //  position:'relative',
//     // //  alignSelf: 'auto',
//     // //  borderRadius:100
//     // },
//     headerbg:{
//         flex: 1,
//         resizeMode: "cover",
//         justifyContent: "center",
//         // marginTop:20,

//     //  width:'100%',
//      height:Dimensions.get('window').height / 2,
//     //  position:'relative',
//     //  alignSelf: 'auto',
//     //  borderRadius:100
//     },
//     gheader:{
//         // height:'100%',
//         flexDirection:'column',
//         justifyContent:'center',
//         alignItems:'center'
//         // alignItems:'center',
//         // backgroundColor: 'rgba(0,0,0,0.6)'
//     },
//     name:{
//         color:'#fff',
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginLeft: '10%',
//     }, 
//     iheader:{
//         width:160,
//         height:160,
//         marginTop:'10%',
//         flexDirection:'column',
//         justifyContent:'center',
//         alignItems:'center'
//     },
//     logo:{
//         width:65,
//         height:95,
//         marginLeft:20,
//         marginTop:'60%',
//         borderRadius:100,
//     },
//   container: {
//     flex: 1,
//     width: Dimensions.get('window').width,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logoContainer:{
//       flexGrow:1,
//       alignItems:'center',
//       justifyContent:'center',
//       width: Dimensions.get('window').width,
//       backgroundColor: '#3379EC',
//       borderBottomLeftRadius:200
//   }, 
// logo:{
//     // flex: 1,
//     width:65,
//     height:95,
//     marginLeft:20,
//     marginTop:'10%'
//     // borderRadius:100,
//     // borderColor:'#fff',
//     // borderWidth:5
// },
//   myform:{
//       zIndex:999,
//     //   height:'100%',
//     //   flex: 2,
//       marginTop:70,
//       position:'absolute',
//       width:'100%',
//       top:200,
//     //   bottom:0
//   },
//   text:{
//       color: '#fff'
//   }
// });

// Register.navigationOptions = navData => {
//     return {
//       headerVisible: false,
//       header: () => null
//     };
//   };
// export default Register;