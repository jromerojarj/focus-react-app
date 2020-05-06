import { GET_VMBOXES } from "../types";

const INITIAL_STATE = {
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_VMBOXES:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
