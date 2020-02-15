// ROOT REDUCER
import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import cartReducer from './cartReducer/cart-reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
