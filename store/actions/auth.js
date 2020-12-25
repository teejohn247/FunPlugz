import { AsyncStorage } from 'react-native';

// export const SIGNUP = 'SIGNUP';
// export const LOGIN = 'LOGIN';
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

// let timer;

export const authenticate = (token) => {
  return dispatch => {
    // dispatch(setLogoutTimer(expiryTime));
    dispatch({ type: AUTHENTICATE, token: token });
  };
};

export const signup = (email, password) => {
  return async dispatch => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBY8UJq_xLD0nEe1HZHuvEOUfYIS9gg4pA',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = 'Something went wrong!';
      if (errorId === 'EMAIL_EXISTS') {
        message = 'This email exists already!';
      }
      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);
    dispatch(
      authenticate(
        resData.localId,
        resData.idToken,
        parseInt(resData.expiresIn) * 1000
      )
    );
    const expirationDate = new Date(
      new Date().getTime() + parseInt(resData.expiresIn) * 1000
    );
    saveDataToStorage(resData.idToken, resData.localId, expirationDate);
  };
};

export const login = (email, password) => {
  getData();
  return async dispatch => {
    try {
    const response = await fetch(
      'https://api.funplugz.com/api/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
        })
      }
    )
    .then(response => response.json())
    .then((data) => {
      console.log(data.user.profile);
      
    if (data.status !== 200) {
      const errorResData = data;
      const errorId = errorResData.error.message;
      let message = 'Something went wrong!';
      if (errorId === 'EMAIL_NOT_FOUND') {
        message = 'This email could not be found!';
      } else if (errorId === 'INVALID_PASSWORD') {
        message = 'This password is not valid!';
      }
      throw new Error(message);
    }

    var resData = data 

    // dispatch({
    //   type: CREATE_PRODUCT,
    //   productData: {
    //     id: resData.name,
    //     title,
    //     description,
    //     imageUrl,
    //     price,
    //     ownerId: userId
    //   }
    // });

    saveDataToStorage(resData.access_token);


    dispatch({
       type:AUTHENTICATE,
       token: resData.access_token,
       id: resData.user.profile.id,
       user_id: resData.user.profile.user_id,
       firstname: resData.user.profile.firstname,
       middlename: resData.user.profile.middlename,
       lastname: resData.user.profile.lastname,
       workplace: resData.user.profile.workplace,
       current_city: resData.user.profile.current_city,
       hometown: resData.user.profile.hometown,
       home_address: resData.user.profile.home_address,
       work_address: resData.user.profile.work_address,
       gender: resData.user.profile.gender,
       relationship: resData.user.profile.relationship,
       educational_backgroud: resData.user.profile.educational_backgroud,
       details: resData.user.profile.details,
       hubbies: resData.user.profile.hubbies,
       profile_pics: resData.user.profile.profile_pics,
       mobiles: resData.user.user.phone,
       email: resData.user.user.email
    });
    // const expirationDate = new Date(
    //   new Date().getTime() + parseInt(resData.expiresIn) * 1000
    // );
    // saveDataToStorage(resData.idToken, resData.localId, expirationDate);
    });


  


    // console.log("POST RESPONSE: "+JSON.stringify(response));
    // console.log(response.status);
    // console.log(response.access_token);
    // console.log(response.user.user);

    // // console.log(response.user);
    // // console.log(response['user']);
    // const { access_token,  user : { user:{id, firstname}}, status } = response;
    // console.log(status)
    // console.log(access_token)
    // console.log(firstname)
    // console.log(id)




    // const resData = await response.json();
    // const res = await response.json();
    // console.log(res);
    // const resData = await response.user.json();
    // console.log(resData);

    // dispatch(
    //   authenticate(
    //     res.access_token,
    //     // resData.user.id,
    //     // resData.user.user_id,
    //     // resData.user.firstname,
    //     // resData.user.middlename,
    //     // resData.user.lastname,
    //     // resData.user.workplace,
    //     // resData.user.current_city,
    //     // resData.user.hometown,
    //     // resData.user.home_address,
    //     // resData.user.work_address,
    //     // resData.user.gender,
    //     // resData.user.relationship,
    //     // resData.user.educational_backgroud,
    //     // resData.user.details,
    //     // resData.user.hubbies,
    //     // resData.user.mobiles,
    //     // resData.expires_at
    //     // parseInt(resData.expiresIn) * 1000
    //   )
    // );
    // const expirationDate = new Date(
    //   new Date().getTime() + parseInt(resData.expiresIn) * 1000
    // );
    // saveDataToStorage(resData.idToken, resData.localId, expirationDate);
    // saveDataToStorage(resData.access_token);
  } catch (err) {
    throw err;
  }

  };
};

const getData = async () => {
  try {
    await AsyncStorage.getItem('Data')
    alert('Data successfully saved')
  } catch (e) {
    alert('Failed to save the data to the storage')
  }
}

export const logout = () => {
  // clearLogoutTimer();
  AsyncStorage.removeItem('Data');
  dispatch(logout())
  return { type: LOGOUT };
};

const clearLogoutTimer = () => {
  if (timer) {
    clearTimeout(timer);
  }
};

const setLogoutTimer = expirationTime => {
  return dispatch => {
    timer = setTimeout(() => {
      dispatch(logout());
    }, expirationTime);
  };
};

const saveDataToStorage = async (token) => {
  console.log(token);
  try {
    await AsyncStorage.setItem('Data', token)
    console.log('Data successfully saved')
  } catch (e) {
    alert('Failed to save the data to the storage')
  }
  // AsyncStorage.setItem(
  //   'userData',
  //   JSON.stringify({
  //     token: 'token',
  //     // userId: userId,
  //     // expiryDate: expirationDate
  //   })
  // );
};

// const saveData = async () => {
  
// }

// async storeToken(user) {
//   try {
//      await AsyncStorage.setItem("userData", JSON.stringify(user));
//   } catch (error) {
//     console.log("Something went wrong", error);
//   }
// }
