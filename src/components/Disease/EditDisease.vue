<template>
  <div>
    <div class="pt-4">EDIT DISEASE</div>
    <div class="grid gap-6 mb-6 md:grid-cols-2 pt-4">
      <div>
        <label
          for="description"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Description</label
        >
        <input
          type="text"
          id="description"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="wazowski"
          v-model="disease.description"
          required
        />
      </div>
      <div>
        <label
          for="pathogen"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Pathogen</label
        >
        <input
          type="text"
          id="pathogen"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Pathogen"
          v-model="disease.pathogen"
          required
        />
      </div>
      <div>
        <label
          for="disease_code"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Disease Code</label
        >
        <input
          type="text"
          id="disease_code"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="1234567890"
          v-model="disease.diseaseCode"
          required
        />
      </div>
    </div>
    <button
      type="submit"
      @click="editDesiase"
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
  props: {
    propsPathogen: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = useStore();

    const disease = reactive({
      description: "",
      pathogen: "",
      diseaseCode: "",
    });

    async function editDesiase() {
      const propsPathogen = this.propsPathogen;
      const data = {
        description: disease.description,
        pathogen: disease.pathogen,
        diseaseCode: disease.diseaseCode,
      };
      await store.dispatch("putDisease", { propsPathogen, data });
      await store.dispatch("getDisease");
      this.$emit("update:show", false);
    }
    return {
      disease,
      editDesiase,
    };
  },
});
</script>

<style scoped></style>
