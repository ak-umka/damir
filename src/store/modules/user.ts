import axios from "axios";

interface USER {
  user: Object;
}

interface USER_CREATE {
  name: string;
  surname: string;
  email: string;
  phone: string;
  salary: number;
  cname: string;
}

export default {
  state: {
    user: {},
  } as USER,
  getters: {
    user: (state: USER) => state.user,
  },
  mutations: {
    setUser(state: USER, user: Object) {
      state.user = user;
    },
  },
  actions: {
    async getUser({ commit }: any) {
      try {
        const response = await axios.get("http://localhost:8000/api/v0/users");
        commit("setUser", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async postUser({ commit }: any, user: USER_CREATE) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/v0/users",
          user
        );
        commit("setUser", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async putUser({ commit }: any, editUser: USER_CREATE) {
      try {
        const response = await axios.put(
          `http://localhost:8000/api/v0/users/${editUser.email}`,
          {
            name: editUser.name,
            surname: editUser.surname,
            phone: editUser.phone,
            salary: editUser.salary,
            cname: editUser.cname,
          }
        );
        commit("setUser", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async deleteUser({ commit }: any, email: string) {
      try {
        const response = await axios.delete(
          `http://localhost:8000/api/v0/users/${email}`
        );
        commit("setUser", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
