import axios from "axios";

const baseUrl = "http://localhost:8000/api/v0";

interface PUBLIC_SERVANT {
  public_servant: Object;
}

interface PUBLIC_SERVANT_CREATE {
  email: string;
  department: string;
}

export default {
  state: {
    public_servant: {},
  } as PUBLIC_SERVANT,

  getters: {
    public_servant: (state: PUBLIC_SERVANT) => state.public_servant,
  },

  mutations: {
    setPublicServant(state: PUBLIC_SERVANT, public_servant: Object) {
      state.public_servant = public_servant;
    },
  },

  actions: {
    async getPublicServant({ commit }: any) {
      try {
        const response = await axios.get(`${baseUrl}/public-servant`);
        commit("setPublicServant", response.data?.public_servants);
      } catch (error) {
        console.log(error);
      }
    },

    async postPublicServant(
      { commit }: any,
      public_servant: PUBLIC_SERVANT_CREATE
    ) {
      try {
        const response = await axios.post(
          `${baseUrl}/public-servant`,
          public_servant
        );
        commit("setPublicServant", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async putPublicServant(
      { commit }: any,
      putPublicServant: PUBLIC_SERVANT_CREATE
    ) {
      try {
        const { department } = putPublicServant;
        const response = await axios.put(
          `${baseUrl}/public-servant/${putPublicServant.email}`,
          {
            department: department,
          }
        );
        commit("setPublicServant", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async deletePublicServant({ commit }: any, email: string) {
      try {
        const response = await axios.delete(`${baseUrl}/public-servant/${email}`);
        commit("setPublicServant", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
