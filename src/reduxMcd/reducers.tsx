import {combineReducers} from 'redux';

// Initial state for API data
const initialApiDataState = {
  users: [],
  loading: false,
  data: '',
  error: '',
  isLogin: false,
  currentUser: null,
  cart: [],
};

const loginReducer = (state = initialApiDataState, action: any) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
        isLogin: false,
        error: '',
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogin: true,
        currentUser: action.payload,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        loading: false,
        isLogin: null,
        error: action.error,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        loading: true,
        isLogin: false,
        error: '',
      };
    case 'LOGOUT_SUCCESS':
      console.log(action);
      return {
        ...state,
        loading: false,
        isLogin: action.payload,
        error: null,
      };
    case 'LOGOUT_FAILURE':
      return {
        ...state,
        loading: false,
        isLogin: null,
        error: action.error,
      };
    default:
      return state;
  }
};

const SignUpReducer = (state = initialApiDataState, action: any) => {
  switch (action.type) {
    case 'SIGNUP_REQUEST':
      return {
        ...state,
        loading: true,
        isLogin: false,
        error: '',
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload],
        error: null,
      };
    case 'SIGNUP_FAILURE':
      return {
        ...state,
        loading: false,
        isLogin: null,
        error: action.error,
      };
    default:
      return state;
  }
};

const cartReducer = (state = initialApiDataState, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART_REQUEST':
      return {
        ...state,
        loading: true,
        cart: [],
        error: '',
      };
    case 'ADD_TO_CART_SUCCESS':
      return {
        ...state,
        cart : action.payload,
        loading: false,
        error:null
      }
      // const {email, items} = action.payload;

      // console.log('---------- Success -------------');
      // console.log(state.cart);
      // console.log(email);
      // console.log(items);
      // console.log('-------------------------------');
      
      // console.log(items);

      // Find an object with the matching email
      // const existingObject = state.cart.find((obj: any) => obj.email === email);

      // console.log('---------- cart -------------');
      // console.log(existingObject);

      // // If an object with the email exists, append the new items
      // if (existingObject) {
      //   console.log('---------- existing -------------');
      //   console.log(existingObject);
      //   existingObject.items.push(...items);
      // } else {
      //   // If the email doesn't exist, create a new object and add the email and items
      //   console.log('---------- avaliable -------------');
      //   console.log(existingObject);
      //   const newObject = {email, items: [...items]};
      //   state.cart.push(newObject);
      //   console.log('--------pushes-------------');
      //   console.log(newObject);
      //   // console.log(state.cart);
      // }
      return {
        ...state,
        loading: false,
        cart: [...state.cart],
        error: null,
      };
      // return [...state.cart];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  login: loginReducer,
  signUp: SignUpReducer,
  cart: cartReducer,
  // logout: logoutReducer,
  // Add other reducers here
});

export default rootReducer;
