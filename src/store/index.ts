import { createStore } from "vuex";

import user from "@/store/modules/user";
import country from "@/store/modules/country";
import doctor from "@/store/modules/doctor";
import diseaseType from "@/store/modules/disease-type";
import disease from "@/store/modules/disease";
import specialize from "@/store/modules/specialize";
import publicServant from "@/store/modules/public-servant";
import record from "@/store/modules/record";
import discover from "@/store/modules/discover";

const store = createStore({
  modules: {
    user,
    country,
    doctor,
    diseaseType,
    disease,
    specialize,
    publicServant,
    record,
    discover,
  },
});

export default store;
