import { GetCallsList, PostCall } from "../api/calls";

import { GET_CALLS } from "../types/";

export const getCallsList = (vmBoxID) => async (dispatch) => {
  const response = await GetCallsList.getCallsList(vmBoxID);
  if (!response.data.error && response.data.status === "success") {
    console.log(GET_CALLS);
    dispatch({
      type: GET_CALLS,
      payload: response.data.data,
    });
    return { status: "success" };
  }
  return { status: "error" };
};

export const postCall = (vmBoxID, messageID, data) => async (dispatch) => {
  const response = await PostCall.postCall(vmBoxID, messageID, data);
  if (!response.data.error && response.data.status === "success") {
    console.log(GET_CALLS);
    dispatch({
      type: GET_CALLS,
      payload: response.data.data,
    });
    return { status: "success" };
  }
  return { status: "error" };
};
