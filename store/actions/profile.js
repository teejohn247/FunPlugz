export const PROFILE = 'PROFILE';



export const profile = (cartItems, totalAmount) => {
    return async (dispatch, getState) => {
      const token = getState().auth.token;
      const userId = getState().auth.userId;
      const date = new Date();
      const response = await fetch(
        `https://rn-complete-guide.firebaseio.com/orders/${userId}.json?auth=${token}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            cartItems,
            totalAmount,
            date: date.toISOString()
          })
        }
      );
  
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
  
      const resData = await response.json();
  
      dispatch({
        type: ADD_ORDER,
        orderData: {
          id: resData.name,
          items: cartItems,
          amount: totalAmount,
          date: date
        }
      });
    };
  };
  