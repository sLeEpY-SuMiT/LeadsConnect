import React from "react";

export default (state, action) => {
  switch (action.type) {
    case "SET_products":
      return {
        ...state,
        Products: action.payload,
      };
      case "SET_getitems":
      return {
        ...state,
        Getitems: action.payload,
      };
    
    default:
      return state;
  }
};
