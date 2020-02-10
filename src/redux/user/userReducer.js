const INITIAL_STATE = {
  //same like this.state we set initial states...

  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};
export default userReducer;

    /**
 *
 *  ==> Reducer <==
 *
 * {
 *      type:""
 *      payload:{}
 * }
 *
 *  State is going to be redux store passs into that whenever an action fires...
 *  and state will be  whatever the state currently when the action fired...
 *
 *  Redux doesn't know that we have state when the app initializes when action got fired there gonna be no state
 * so we have to set an initial state ...
 *
 *
 */
