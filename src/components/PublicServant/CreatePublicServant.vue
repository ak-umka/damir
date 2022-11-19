<template>
  <div>
    <div class="pt-4">CREATE PUBLIC SERVANT</div>
    <div class="grid gap-6 mb-6 md:grid-cols-2 pt-4">
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
          placeholder="postPublicServant@gmail.com"
          v-model="publicServant.email"
          required
        />
      </div>
      <div>
        <label
          for="department"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Department</label
        >
        <input
          type="text"
          v-model="publicServant.department"
          id="department"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="department"
          required
        />
      </div>
    </div>
    <button
      type="submit"
      @click="createPublicServant"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    >
      Submit
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const publicServant = reactive({
      email: "",
      department: "",
    });

    async function createPublicServant() {
      const data = {
        email: publicServant.email,
        department: publicServant.department,
      };
      await store.dispatch("postPublicServant", data);
      store.dispatch("getPublicServant");
      publicServant.email = "";
      publicServant.department = "";
      this.$emit("update:show", false);
    }
    return {
      publicServant,
      createPublicServant,
    };
  },
});
</script>

<style scoped></style>
