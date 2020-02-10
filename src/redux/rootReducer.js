// ROOT REDUCER

import React from 'react';
import { combineReducers } from 'redux';
import userReducer from './user/userReducer';

export default combineReducers({
  user: userReducer
});
