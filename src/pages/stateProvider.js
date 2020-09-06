// Using the React Conetext API
//This Snippet will allow you to set things up so smooth and easily

import React, { createContext, useContext, useReducer } from "react";

//Preparing the Data Layer
export const StateContext = createContext();

//Higher-Order Component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Hook which allows us to pull info from the data layer
export const useStateValue = () => useContext(StateContext);
