<template>
  <div>
    <div class="pt-4">PUT</div>

    <div class="grid gap-6 mb-6 md:grid-cols-2 pt-4">
      <div>
        <label
          for="population"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Population</label
        >
        <input
          type="number"
          v-model="country.population"
          id="population"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="123456789"
          required
        />
      </div>
    </div>
    <button
      type="submit"
      @click="putCountry"
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
    propsCountry: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = useStore();

    const country = reactive({
      population: "",
    });

    async function putCountry() {
      const put = {
        cname: this.propsCountry,
        population: country.population,
      };
      await store.dispatch("putCountry", put);
      await store.dispatch("getCountry");
      this.$emit("update:show", false);
    }

    return {
      country,
      putCountry,
    };
  },
});
</script>

<style scoped></style>
