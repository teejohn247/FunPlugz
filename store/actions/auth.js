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
    );

    console.log(JSON.stringify(response))
    // console.log("POST RESPONSE: "+JSON.stringify(response));

    if (response.status !== 200) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = 'Something went wrong!';
      if (errorId === 'EMAIL_NOT_FOUND') {
        message = 'This email could not be found!';
      } else if (errorId === 'INVALID_PASSWORD') {
        message = 'This password is not valid!';
      }
      throw new Error(message);
    }

    const resData = await response.json();
    console.log(JSON.stringify(resData));
    dispatch(
      authenticate(
        // resData.localId,
        resData.access_token,
        // resData.expires_at
        // parseInt(resData.expiresIn) * 1000
      )
    );
    // const expirationDate = new Date(
    //   new Date().getTime() + parseInt(resData.expiresIn) * 1000
    // );
    // saveDataToStorage(resData.idToken, resData.localId, expirationDate);
    saveDataToStorage(resData.access_token);

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
    await AsyncStorage.setItem('Data', JSON.stringify(token))
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
