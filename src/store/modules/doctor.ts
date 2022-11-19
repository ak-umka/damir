import axios from "axios";

const baseUrl = "http://localhost:8000/api/v0";

interface DOCTOR {
  doctor: Object;
}

interface DOCTOR_CREATE {
  email: string;
  degree: string;
}

export default {
  state: {
    doctor: {},
  } as DOCTOR,

  getters: {
    doctor: (state: DOCTOR) => state.doctor,
  },

  mutations: {
    setDoctor(state: DOCTOR, doctor: Object) {
      state.doctor = doctor;
    },
  },

  actions: {
    async getDoctor({ commit }: any) {
      try {
        const response = await axios.get(`${baseUrl}/doctor`);
        commit("setDoctor", response.data?.doctors);
      } catch (error) {
        console.log(error);
      }
    },

    async postDoctor({ commit }: any, doctor: DOCTOR_CREATE) {
      try {
        const response = await axios.post(`${baseUrl}/doctor`, doctor);
        commit("setDoctor", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async putDoctor({ commit }: any, putDoctor: DOCTOR_CREATE) {
      try {
        const { degree } = putDoctor;
        const response = await axios.put(
          `${baseUrl}/doctor/${putDoctor.email}`,
          {
            degree: degree,
          }
        );
        commit("setDoctor", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async deleteDoctor({ commit }: any, email: string) {
      try {
        const response = await axios.delete(`${baseUrl}/doctor/${email}`);
        commit("setDoctor", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
