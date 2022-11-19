import axios from "axios";

const baseUrl = "http://localhost:8000/api/v0";

interface DISEASE {
  disease: Object;
}

interface DISEASE_CREATE {
  id: number;
  description: string;
  pathogen: string;
  diseaseCode: string;
}

interface DISEASE_UPDATE {
  data: {
    id: number;
    description: string;
    pathogen: string;
    diseaseCode: string;
  };
  propsPathogen?: string;
}

export default {
  state: {
    disease: {},
  } as DISEASE,

  getters: {
    disease: (state: DISEASE) => state.disease,
  },

  mutations: {
    setDisease(state: DISEASE, disease: Object) {
      state.disease = disease;
    },
  },

  actions: {
    async getDisease({ commit }: any) {
      try {
        const response = await axios.get(`${baseUrl}/disease`);
        commit("setDisease", response.data?.diseases);
      } catch (error) {
        console.log(error);
      }
    },

    async postDisease({ commit }: any, disease: DISEASE_CREATE) {
      try {
        const response = await axios.post(`${baseUrl}/disease`, disease);
        commit("setDisease", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async putDisease({ commit }: any, putDisease: DISEASE_UPDATE) {
      try {
        const { propsPathogen } = putDisease;
        const { pathogen, description, diseaseCode } = putDisease.data;
        const response = await axios.put(
          `${baseUrl}/disease/${propsPathogen}`,
          {
            description: description,
            pathogen: pathogen,
            disease_code: diseaseCode,
          }
        );
        commit("setDisease", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async deleteDisease({ commit }: any, pathogen: string) {
      try {
        const response = await axios.delete(`${baseUrl}/disease/${pathogen}`);
        commit("setDisease", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
