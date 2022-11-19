import axios from "axios";

const baseUrl = "http://localhost:8000/api/v0";

interface SPECIALIZE {
  specialize: Object;
}

interface SPECIALIZE_CREATE {
  id: number;
  email: string;
}

export default {
  state: {
    specialize: {},
  } as SPECIALIZE,

  getters: {
    specialize: (state: SPECIALIZE) => state.specialize,
  },

  mutations: {
    setSpecialize(state: SPECIALIZE, specialize: Object) {
      state.specialize = specialize;
    },
  },

  actions: {
    async getSpecialize({ commit }: any) {
      try {
        const response = await axios.get(`${baseUrl}/specialize`);
        commit("setSpecialize", response.data?.specializes);
      } catch (error) {
        console.log(error);
      }
    },

    async postSpecialize({ commit }: any, specialize: SPECIALIZE_CREATE) {
      try {
        const response = await axios.post(`${baseUrl}/specialize`, specialize);
        commit("setSpecialize", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async deleteSpecialize({ commit }: any, id: number) {
      try {
        const response = await axios.delete(`${baseUrl}/specialize/${id}`);
        commit("setSpecialize", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
