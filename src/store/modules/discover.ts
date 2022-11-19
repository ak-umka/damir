import axios from "axios";

const baseUrl = "http://localhost:8000/api/v0";

interface DISCOVER {
  discover: Object;
}

interface DISCOVER_CREATE {
  cname: string;
  disease_code: string;
  first_enc: string;
}

export default {
  state: {
    discover: {},
  } as DISCOVER,

  getters: {
    discover: (state: DISCOVER) => state.discover,
  },

  mutations: {
    setDiscover(state: DISCOVER, discover: Object) {
      state.discover = discover;
    },
  },

  actions: {
    async getDiscover({ commit }: any) {
      try {
        const response = await axios.get(`${baseUrl}/discover`);
        commit("setDiscover", response.data?.discoveries);
      } catch (error) {
        console.log(error);
      }
    },

    async postDiscover({ commit }: any, discover: DISCOVER_CREATE) {
      try {
        const response = await axios.post(`${baseUrl}/discover`, discover);
        commit("setDiscover", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async putDiscover({ commit }: any, putDiscover: DISCOVER_CREATE) {
      try {
        const response = await axios.put(
          `${baseUrl}/discover/${putDiscover.cname}`,
          {
            disease_code: putDiscover.disease_code,
            first_enc: putDiscover.first_enc,
          }
        );
        commit("setDiscover", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async deleteDiscover({ commit }: any, cname: string) {
      try {
        const response = await axios.delete(`${baseUrl}/discover/${cname}`);
        commit("setDiscover", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
