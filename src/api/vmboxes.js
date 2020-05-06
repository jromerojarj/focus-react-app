import { request } from "./constants";

export const GetVMBoxesList = {
  async getVMBoxesList() {
    let vmBoxesList = await request
      .get(`/vmboxes`, {
        crossdomain: true,
      })
      .catch((error) => {
        let vmBoxesList = {
          error,
        };
        return vmBoxesList;
      });
    return vmBoxesList;
  },
};
