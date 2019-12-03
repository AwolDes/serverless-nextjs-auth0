import React, { useReducer, useContext } from 'react';

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

export const actions = {
  set_session: 'SET_SESSION',
  remove_session: 'REMOVE_SESSION',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.set_session:
      return action.data;
    case actions.remove_session:
      return null;
    default:
      throw new Error(`Unkown action: ${action.type}`);
  }
};

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, null);
  return (
    <AuthDispatchContext.Provider value={dispatch}>
      <AuthStateContext.Provider value={state}>
        {children}
      </AuthStateContext.Provider>
    </AuthDispatchContext.Provider>
  );
};

export const useAuthState = () => useContext(AuthStateContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);
