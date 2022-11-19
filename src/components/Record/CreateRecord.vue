<template>
  <div>
    <div class="pt-4">CREATE RECORD</div>
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
          placeholder="wazowski@gmail.com"
          v-model="record.email"
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
          v-model="record.cname"
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
          v-model="record.disease_code"
          required
        />
      </div>
      <div>
        <label
          for="total_deaths"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Total Deaths</label
        >
        <input
          type="number"
          id="total_deaths"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="1234567890"
          v-model="record.total_deaths"
          required
        />
      </div>
      <div>
        <label
          for="total_patients"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Total Patients</label
        >
        <input
          type="number"
          id="total_patients"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="1234567890"
          v-model="record.total_patients"
          required
        />
      </div>
    </div>
    <button
      type="submit"
      @click="createRecord"
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
    const record = reactive({
      email: "",
      cname: "",
      disease_code: "",
      total_deaths: "",
      total_patients: "",
    });

    async function createRecord() {
      const data = {
        email: record.email,
        cname: record.cname,
        disease_code: record.disease_code,
        total_deaths: record.total_deaths,
        total_patients: record.total_patients,
      };
      await store.dispatch("postRecord", data);
      await store.dispatch("getRecord");
      this.$emit("update:show", false);
    }
    return {
      record,
      createRecord,
    };
  },
});
</script>

<style scoped></style>
