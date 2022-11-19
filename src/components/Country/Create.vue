<template>
  <div>
    <div class="pt-4">CREATE COUNTRY</div>
    <div class="grid gap-6 mb-6 md:grid-cols-2 pt-4">
      <div>
        <label
          for="population"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Population</label
        >
        <input
          type="number"
          id="population"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="1234567890"
          v-model="country.population"
          required
        />
      </div>
      <div>
        <label
          for="cname"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Country Name</label
        >
        <input
          type="text"
          v-model="country.cname"
          id="cname"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="USA"
          required
        />
      </div>
    </div>
    <button
      type="submit"
      @click="createCountry"
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
    const country = reactive({
      population: "",
      cname: "",
    });

    async function createCountry() {
      const data = {
        population: country.population,
        cname: country.cname,
      };
      await store.dispatch("postCountry", data);
      store.dispatch("getCountry");
      country.population = "";
      country.cname = "";
      this.$emit("update:show", false);
    }

    return {
      country,
      createCountry,
    };
  },
});
</script>

<style scoped></style>
