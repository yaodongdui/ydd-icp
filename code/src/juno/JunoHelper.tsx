import { initJuno } from "@junobuild/core-peer";

let isInit = false;
export const JunoHelper = {
  init: async () => {
    if (isInit) {
      console.log("juno is inited.");
      return;
    }
    try {
      await initJuno({
        satelliteId: "swe6d-5yaaa-aaaal-adjdq-cai",
      });
      isInit = true;
    } catch (e) {
      console.log("init juno error", e);
    }
  },
};
