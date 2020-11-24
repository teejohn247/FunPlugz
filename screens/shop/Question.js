import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  ActivityIndicator,
  Button

} from 'react-native';

import { CATEGORIES } from '../../data/dummy-data';
import { useSelector, useDispatch } from 'react-redux';
import * as gameActions from '../../store/actions/game';
import CategoryGridTile from '../../components/CategoryGridTile';


const QuestionScreen = props => {

const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');

    
//   const [isLoading, setIsLoading] = useState(true);


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctScore, setCorrectScore] = useState(0);
  const [color, setColor] = useState('white');
  const [selected, setSelected] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [textColor, setTextColor] = useState('');

//   const [answer, setAwswer] = useState('false');




//   const dispatch = useDispatch();
//   const questionId = props.navigation.getParam('Id');
//   const questionTitle = props.navigation.getParam('Title');

    // useEffect(() => {
    //     console.log('here2');
    //     dispatch(gameActions.selectGame(questionId))
    //     .then(() => {
    //     console.log('hello2');
    //     setIsLoading(false);
    //     });
    // }, []);

    const question = useSelector(state => state.game.question);
    // if(question){
    //     setIsLoading(false);
    // }
    console.log(currentQuestion);
    console.log(question.length);

    if (currentQuestion == question.length) {
        return (
          <View style={{flex:1, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
            <Text>Game Over</Text>
            <Text>Total Score: {correctScore}/{question.length}</Text>
          </View>
        );
      }


    var selected_1 = question[currentQuestion].game_option

    function nextquestion() {
        setColor('white');
        setTextColor('black')
        setCurrentQuestion(currentQuestion + 1)

    }



    const handlePress = select =>{

        
        if(Object.values({select}).join() == question[currentQuestion].game_answer){
            console.log('correct')
            // setColor('green')
            setSelected(select)
            setTextColor('white')
            setSelectedColor('green')
            console.log(textColor)


        //  selected_1.includes(select) ? setSelected(selected_1.filter(s => s == select)) : setSelected(select);
            setCorrectScore(correctScore + 1)
        }else{
            console.log('wrong')
            setSelected(select)
            setTextColor('white')
            setSelectedColor('red')
            console.log(textColor)

            // setSelected(select)
            // setColor('red');
        }
       
        setTimeout(nextquestion, 1000);
    }

    



    

    console.log('hello');
    // state = { background: 'white'};

    // changeColor = () => {
    //     this.setState({
    //       background: 'green'
    //     })
    //   }
  
    return (
        
      <View style={styles.screen}>
        <ImageBackground style={{  ...styles.container, backgroundColor:'orange', width:'100%' }} source={require('../../images/drink.jpg')} imageStyle={{opacity: 0.17, width:'100%'}}>

          

        { !question[currentQuestion].game_question  &&  (
        <Text>Score</Text>
        )}
     

      { question  && (

      <View style={{width:'100%', marginTop: '30%' , justifyContent:'center', alignItems:'center', alignContent:'center', marginRight:'auto',
      marginLeft:'auto'}}>
      <View style={{position:'relative'}}>
      <Text style={{fontSize:24, fontFamily: 'montserrat-regular', textAlign:'center', elevation:10,
        textShadowOffset: {width: 1,height: 1},
        textShadowRadius: 0,
        textShadowColor:'gray',
      flexDirection:'row',color:'white', textShadowColor:'black' }}>{question[currentQuestion].game_question ? question[currentQuestion].game_question : 'Score'}</Text>
      </View>
      <View style={{width:'100%', justifyContent:'space-between', alignItems:'center', padding:20, marginHorizontal:10,  justifyContent:'space-between'}}>
      
      {question[currentQuestion].game_option.map((answerOption, index) => (
        <View style={{justifyContent: 'center', alignItems:'center', width:'80%'}}>
          
         
        <TouchableOpacity
          key={answerOption}
          onPress={() => {handlePress(answerOption)}}
          style={{ backgroundColor: selected.includes(answerOption) ? selectedColor : "white", justifyContent:'space-between', 
          elevation: 9, width:'100%', justifyContent: 'center', alignItems:'center', margin:10, padding:10, borderRadius:5 } }
        >
            <Text style={{ fontSize: 18, fontFamily: 'montserrat-regular', color:selected.includes(answerOption) ? "white" : "black",
        }}>{answerOption}</Text>
        </TouchableOpacity>
      
        
        
       </View>
    
      
    
    ))
}
</View>
</View>


    )}

</ImageBackground>
    </View>
    )

}


QuestionScreen.navigationOptions = {
    headerVisible: false,
    tabBarVisible:false,
    
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button:{
      fontSize:18
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  options: {
    flexDirection:'row',
    // width:'100%',
  }
});

export default QuestionScreen;
