<template>
  <div>
    <div class="pt-4">CREATE USER</div>
    <div class="grid gap-6 mb-6 md:grid-cols-2 pt-4">
      <div>
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Name</label
        >
        <input
          type="text"
          id="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Mike"
          v-model="users.name"
          required
        />
      </div>
      <div>
        <label
          for="surname"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Surname</label
        >
        <input
          type="text"
          id="surname"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="wazowski"
          v-model="users.surname"
          required
        />
      </div>
      <div>
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Email</label
        >
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="wazowski@gmail.com"
          v-model="users.email"
          required
        />
      </div>
      <div>
        <label
          for="phone"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Phone</label
        >
        <input
          type="text"
          id="phone"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="1234567890"
          v-model="users.phone"
          required
        />
      </div>
      <div>
        <label
          for="salary"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Salary</label
        >
        <input
          type="number"
          id="salary"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="1234567890"
          v-model="users.salary"
          required
        />
      </div>
      <div>
        <label
          for="cname"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Cname</label
        >
        <input
          type="text"
          v-model="users.cname"
          id="cname"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="USA"
          required
        />
      </div>
    </div>
    <button
      type="submit"
      @click="createUser"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    >
      Submit
    </button>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();
    const users = reactive({
      name: "",
      surname: "",
      email: "",
      phone: "",
      salary: "",
      cname: "",
    });

    async function createUser() {
      const data = {
        name: users.name,
        surname: users.surname,
        email: users.email,
        phone: users.phone,
        salary: users.salary,
        cname: users.cname,
      };
      await store.dispatch("postUser", data);
      await store.dispatch("getUser");
      this.$emit("update:show", false);
    }

    return {
      users,
      createUser,
    };
  },
});
</script>

<style lang="scss" scoped></style>
