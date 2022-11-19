<template>
  <div>
    <div class="pt-4">CREATE SPECIALIZE</div>
    <div class="grid gap-6 mb-6 md:grid-cols-2 pt-4">
      <div>
        <label
          for="id"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >ID</label
        >
        <input
          type="number"
          id="id"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="1"
          v-model="specialize.id"
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
          v-model="specialize.email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="wazowski@gmail.com"
          required
        />
      </div>
    </div>
    <button
      type="submit"
      @click="createSpecialize"
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
    const specialize = reactive({
      id: "",
      email: "",
    });

    async function createSpecialize() {
      const data = {
        id: specialize.id,
        email: specialize.email,
      };
      await store.dispatch("postSpecialize", data);
      store.dispatch("getSpecialize");
      specialize.id = "";
      specialize.email = "";
      this.$emit("update:show", false);
    }
    return {
      createSpecialize,
      specialize,
    };
  },
});
</script>

<style scoped></style>
