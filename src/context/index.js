import { createContext, useContext, useReducer, useMemo } from "react";
// import PropTypes from "prop-types";
// Create MyContext
const MyContext = createContext();
// Setting custom name for the context 
MyContext.displayName = "MyContextContext";
// React reducer
function reducer(state, action) {
  switch (action.type) {
    case "DARK_MODE": {
      return { ...state, darkMode: action.value };
    }
    case "ADMIN": {
      return { ...state, darkMode: action.value };
    }
    
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
// React context provider
function MyContextControllerProvider({ children }) {
  
  const initialState = {
    darkMode: true,
    admin:{
      userName:"admin",
      password:"123"
    },
  };
  const [controller, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}
//React custom hook for using context
function useMyContextController() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error(
      "useMyContextController should be used inside the MyContextControllerProvider."
    );
  }
  return context;
}

// Typechecking props for the MaterialUIControllerProvider
// MyContextControllerProvider.prototype = {
//   children: PropTypes.node.isRequired,
// };
// Context module functions
const setDarkMode = (dispatch, value) => dispatch({ type: "DARK_MODE", value });

export {
  MyContextControllerProvider,
  useMyContextController,
  setDarkMode,
};
