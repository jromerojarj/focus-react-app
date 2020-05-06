import { GET_CALLS } from "../types";

const INITIAL_STATE = {
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CALLS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
