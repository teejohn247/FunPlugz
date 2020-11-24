import { AUTHENTICATE, LOGOUT } from '../actions/auth';

const initialState = {
  token: null,
  id: null,
  user_id: null,
  firstname: null,
  middlename: null,
  lastname: null,
  workplace: null,
  current_city: null,
  hometown: null,
  home_address: null,
  work_address: null,
  gender: null,
  relationship: null,
  educational_backgroud: null,
  details_about_you: null,
  hubbies: null,
  profile_pics: null,
  mobiles: null,
  email:  null
  // userId: null
  // profile:[]
};




export default (state = initialState, action) => {
  console.log(action);
  // case CREATE_PRODUCT:
  //     const newProduct = new Product(
  //       action.productData.id,
  //       action.productData.ownerId,
  //       action.productData.title,
  //       action.productData.imageUrl,
  //       action.productData.description,
  //       action.productData.price
  //     );
  //     return {
  //       ...state,
  //       availableProducts: state.availableProducts.concat(newProduct),
  //       userProducts: state.userProducts.concat(newProduct)
  //     };
  switch (action.type) {
    case AUTHENTICATE:
      console.log('authenticate');
      console.log(action.firstname);

      // const profile = [
      //   action.token,
      //   action.id,
      //   action.user_id,
      //   action.firstname,
      //   action.middlename,
      //   action.lastname,
      //   action.workplace,
      //   action.current_city,
      //   action.hometown,
      //   action.home_address,
      //   action.work_address,
      //   action.gender,
      //   action.relationship,
      //   action.educational_backgroud,
      //   action.educational_backgroud,
      //   action.hubbies,
      //   action.mobiles,
      // ]
      return {
        ...state,
        // profile: state.profile.concat(profile),
        token: action.token,
        id: action.id,
        user_id: action.user_id,
        firstname: action.firstname,
        middlename: action.middlename,
        lastname: action.lastname,
        workplace: action.workplace,
        current_city: action.current_city,
        hometown: action.hometown,
        home_address: action.home_address,
        work_address: action.work_address,
        gender: action.gender,
        relationship: action.relationship,
        educational_backgroud: action.educational_backgroud,
        details_about_you: action.educational_backgroud,
        hubbies: action.hubbies,
        profile_pics:action.profile_pics,
        mobiles: action.mobiles,
        email: action.email
      };
    case LOGOUT:
      return initialState;
    // case SIGNUP:
    //   return {
    //     token: action.token,
    //     userId: action.userId
    //   };
    default:
      return state;
  }
};
