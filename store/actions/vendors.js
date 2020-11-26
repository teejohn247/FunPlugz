export const VENDORS = 'VENDORS';


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
