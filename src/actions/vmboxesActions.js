import { GetVMBoxesList } from "../api/vmboxes";

import { GET_VMBOXES } from "../types/";

export const getVMBoxesList = () => async (dispatch) => {
  const response = await GetVMBoxesList.getVMBoxesList();
  if (!response.data.error && response.data.status === "success") {
    console.log(GET_VMBOXES);
    dispatch({
      type: GET_VMBOXES,
      payload: response.data.data,
    });
    return { status: "success" };
  }
  return { status: "error" };
};
