export const VENDORS = 'VENDORS';
export const EDIT_VENDOR = "EDIT_VENDORS"
export const SEARCH = "SEARCH"

import { NavigationActions } from 'react-navigation';



export const vendors = () => {
    return async (dispatch, getState) => {
      const token = getState().auth.token;
      try {
        const response = await fetch(
            'https://api.funplugz.com/api/vendor_gps',
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
        const all = res.data;
        console.log('view', all)
        dispatch({ type: VENDORS, data: all});

       })
  
      } catch (err) {
        throw err;
      }
    };
  };


  export const search = (text) => {
    return async (dispatch, getState) => {
      const token = getState().auth.token;
      try {
        const response = await fetch(
            `https://api.funplugz.com/api/hotspot?search=${text}`,
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
        const all = res.data;
        console.log('view', all)
        dispatch({ type: VENDORS, data: all});

       })
  
      } catch (err) {
        throw err;
      }
    };
  };


  
export const edit_vendor = (data) => {
  console.log(data.firstname)
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    try {
      const response = await fetch(
          'https://api.funplugz.com/api/all_update',
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              
                firstname:data.firstname,
                lastname:data.lastname,
                middlename:"",
                workplace:"",
                hometown:"",
                homeaddress:"",
                workaddress:data.workaddress,
                gender:"",
                business_name:data.business_name,
                business_address:data.business_address,
                business_phone:data.business_phone,
                business_email:data.business_email,
                state:"",
                lga:"",
                search_keywords:[]
            
            })
          }
        )
          .then(response => response.json())
          .then((res) => {
              console.log('chk1',res.data);
      if (!res) {
        throw new Error('Something went wrong!');
      }
      const all = res.data;
      console.log('view', all)
      dispatch({ type: EDIT_VENDOR, data: all});
      dispatch(NavigationActions.navigate({ routeName: 'Home' }))
     })

    } catch (err) {
      throw err;
    }
  };
};

