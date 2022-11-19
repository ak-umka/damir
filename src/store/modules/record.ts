import axios from "axios";

const baseUrl = "http://localhost:8000/api/v0";

interface RECORD {
  record: Object;
}

interface RECORD_CREATE {
  email: string;
  cname: string;
  disease_code: string;
  total_deaths: number;
  total_patients: number;
}

export default {
  state: {
    record: {},
  } as RECORD,

  getters: {
    record: (state: RECORD) => state.record,
  },

  mutations: {
    setRecord(state: RECORD, record: Object) {
      state.record = record;
    },
  },

  actions: {
    async getRecord({ commit }: any) {
      try {
        const response = await axios.get(`${baseUrl}/record`);
        commit("setRecord", response.data?.records);
      } catch (error) {
        console.log(error);
      }
    },

    async postRecord({ commit }: any, record: RECORD_CREATE) {
      try {
        const response = await axios.post(`${baseUrl}/record`, record);
        commit("setRecord", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async putRecord({ commit }: any, putRecord: RECORD_CREATE) {
      try {
        const response = await axios.put(
          `${baseUrl}/record/${putRecord.email}`,
          {
            cname: putRecord.cname,
            disease_code: putRecord.disease_code,
            total_deaths: putRecord.total_deaths,
            total_patients: putRecord.total_patients,
          }
        );
        commit("setRecord", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async deleteRecord({ commit }: any, email: string) {
      try {
        const response = await axios.delete(`${baseUrl}/record/${email}`);
        commit("setRecord", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
