import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";


const initialState = {
  Products:[0],
  Getitems:[]
};


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions for changing state


  function setProducts(Products) {
    dispatch({
      type: "SET_products",
      payload: Products,
    });
  }

  function setGetitems(Getitems) {
    dispatch({
      type: "SET_getitems",
      payload: Getitems,
    });
  }
  

  return (
    <GlobalContext.Provider
      value={{
        Products: state.Products,
        Getitems: state.Getitems,
    
        setGetitems,
        setProducts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
