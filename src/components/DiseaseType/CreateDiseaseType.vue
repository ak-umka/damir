<template>
  <div>
    <div class="pt-4">CREATE DISEASE TYPE</div>
    <div class="grid gap-6 mb-6 md:grid-cols-2 pt-4">
      <div>
        <label
          for="typeid"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >ID</label
        >
        <input
          type="number"
          id="typeid"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="1234567890"
          v-model="diseaseType.id"
          required
        />
      </div>
      <div>
        <label
          for="description"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Description</label
        >
        <input
          type="text"
          v-model="diseaseType.description"
          id="description"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="description"
          required
        />
      </div>
    </div>
    <button
      type="submit"
      @click="createDiseaseType"
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
    const diseaseType = reactive({
      id: "",
      description: "",
    });

    async function createDiseaseType() {
      const data = {
        id: diseaseType.id,
        description: diseaseType.description,
      };
      await store.dispatch("postDiseaseType", data);
      store.dispatch("getDiseaseType");
      diseaseType.id = "";
      diseaseType.description = "";
      this.$emit("update:show", false);
    }
    return {
      diseaseType,
      createDiseaseType,
    };
  },
});
</script>

<style scoped></style>
