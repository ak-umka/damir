import { createStore } from "vuex";

import user from "@/store/modules/user";
import country from "@/store/modules/country";

const store = createStore({
  modules: {
    user,
    country,
  },
});

export default store;
