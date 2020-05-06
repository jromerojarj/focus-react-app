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

export const PostCall = {
  async postCall(vmBoxID, messageID, data) {
    let call = await request
      .post(`/calls/${vmBoxID}/message/${messageID}`, data)
      .catch((error) => {
        let call = {
          error,
        };
        return call;
      });
    return call;
  },
};
