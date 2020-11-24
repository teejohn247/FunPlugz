// import Order from '../../models/order';
import { NavigationActions } from 'react-navigation';
import * as RootNavigation from '../../screens/RootNavigator';
import { AsyncStorage } from 'react-native';
export const SELECT_GAME = 'SELECT_GAME';
export const QUESTION = 'QUESTION';
export const VIEWGAME = 'VIEWGAME';



export const selectGame = (id, navigation) => {
    console.log('here2')
  return async (dispatch, getState) => {
    console.log(id)
    const token = getState().auth.token;

    try {
        const response = await fetch(
            `https://api.funplugz.com/api/gamenumbers?game_id=${id}`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
            
            }
          )
          .then(response => response.json())
          .then((res) => {
              console.log('chk1',res.data);
      if (!res) {
        throw new Error('Something went wrong!');
      }


      dispatch({ type: QUESTION, question: res.data });
      RootNavigation.navigate('Question');

     })
    //  dispatch(NavigationActions.navigate({ routeName: 'Question' }))

    } catch (err) {
      throw err;
    }
  };
};


export const viewGame = () => {
    return async (dispatch, getState) => {
      const token = getState().auth.token;
      try {
        const response = await fetch(
            'https://api.funplugz.com/api/fetchtrivia',
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
            //   body: JSON.stringify({
            //     // id: id,
            //   })
            }
          )
            .then(response => response.json())
            .then((res) => {
                console.log('chk1',res.data);
        if (!res) {
          throw new Error('Something went wrong!');
        }
        const all = res.data;

        console.log(all)

        // for (let i = 0; i < all.length; i++) {
        //     views.push(array[i]);
            
        // }
  
        // for (const key in all) {
        //   views.push(
        //     new Categories(
        //       key,
        //       all[key].id,
        //       all[key].game_name,
        //     )
        //   );
        // }

        console.log('view', all)
  
        dispatch({ type: VIEWGAME, data: all});

       })
      // navigation.navigate('Shop');
  
      } catch (err) {
        throw err;
      }
    };
  };