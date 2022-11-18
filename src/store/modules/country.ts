import axios from "axios";

interface COUNTRY {
  country: Object;
}

interface COUNTRY_CREATE {
  cname: string;
  population: number;
}

export default {
  state: {
    country: {},
  } as COUNTRY,

  getters: {
    country: (state: COUNTRY) => state.country,
  },

  mutations: {
    setCountry(state: COUNTRY, country: Object) {
      state.country = country;
    },
  },
  
  actions: {
    async getCountry({ commit }: any) {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/countries"
        );

        commit("setCountry", response.data?.countries);
      } catch (error) {
        console.log(error);
      }
    },

    async postCountry({ commit }: any, country: COUNTRY_CREATE) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/v1/countries",
          country
        );
        commit("setCountry", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async putCountry({ commit }: any, putCountry: COUNTRY_CREATE) {
      try {
        const { population } = putCountry;
        const response = await axios.put(
          `http://localhost:8000/api/v1/countries/${putCountry.cname}`,
          {
            population: population,
          }
        );
        commit("setCountry", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async deleteCountry({ commit }: any, cname: string) {
      try {
        const response = await axios.delete(
          `http://localhost:8000/api/v1/countries/${cname}`
        );
        commit("setCountry", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
