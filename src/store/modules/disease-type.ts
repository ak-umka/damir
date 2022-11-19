import axios from "axios";

const baseUrl = "http://localhost:8000/api/v0";

interface DISEASE_TYPE {
  diseaseType: Object;
}

interface DISEASE_TYPE_CREATE {
  id: number;
  description: string;
}

export default {
  state: {
    diseaseType: {},
  } as DISEASE_TYPE,

  getters: {
    diseaseType: (state: DISEASE_TYPE) => state.diseaseType,
  },

  mutations: {
    setDiseaseType(state: DISEASE_TYPE, diseaseType: Object) {
      state.diseaseType = diseaseType;
    },
  },

  actions: {
    async getDiseaseType({ commit }: any) {
      try {
        const response = await axios.get(`${baseUrl}/disease-type`);
        console.log(response.data);
        commit("setDiseaseType", response.data?.disease_types);
      } catch (error) {
        console.log(error);
      }
    },

    async postDiseaseType({ commit }: any, diseaseType: DISEASE_TYPE_CREATE) {
      try {
        const response = await axios.post(
          `${baseUrl}/disease-type`,
          diseaseType
        );
        commit("setDiseaseType", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async putDiseaseType({ commit }: any, putDiseaseType: DISEASE_TYPE_CREATE) {
      try {
        const { description } = putDiseaseType;
        const response = await axios.put(
          `${baseUrl}/disease-type/${putDiseaseType.id}`,
          {
            description: description,
          }
        );
        commit("setDiseaseType", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async deleteDiseaseType({ commit }: any, id: number) {
      try {
        const response = await axios.delete(`${baseUrl}/disease-type/${id}`);
        commit("setDiseaseType", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
