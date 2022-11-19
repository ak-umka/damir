<template>
  <div>
    <div class="pt-4">CREATE DISCOVER</div>
    <div class="grid gap-6 mb-6 md:grid-cols-2 pt-4">
      <div>
        <label
          for="cname"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Country Name</label
        >
        <input
          type="text"
          v-model="discover.cname"
          id="cname"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="USA"
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
          v-model="discover.disease_code"
          required
        />
      </div>
      <Datepicker
        v-model="discover.first_enc"
        placeholder="Start Typing ..."
        textInput
      />
    </div>
    <button
      type="submit"
      @click="createDiscover"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    >
      Submit
    </button>
  </div>
</template>

<script lang="ts">
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  components: { Datepicker },
  setup() {
    const store = useStore();
    const discover = reactive({
      cname: "",
      disease_code: "",
      first_enc: "",
    });

    function dateToISO(date: string) {
      return new Date(date).toISOString();
    }

    async function createDiscover() {
      const isoString = dateToISO(discover.first_enc);
      const data = {
        cname: discover.cname,
        disease_code: discover.disease_code,
        first_enc: isoString,
      };
      await store.dispatch("postDiscover", data);
      store.dispatch("getDiscover");
      this.$emit("update:show", false);
    }
    return {
      discover,
      createDiscover,
    };
  },
});
</script>
