import { request } from "./constants";

export const GetCallsList = {
  async getCallsList(vmBoxID) {
    let callsList = await request
      .get(`/calls/${vmBoxID}`, {
        crossdomain: true,
      })
      .catch((error) => {
        let callsList = {
          error,
        };
        return callsList;
      });
    return callsList;
  },
};
