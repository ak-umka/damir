<template>
  <div>
    <div class="pt-4">CREATE DOCTOR</div>
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
          placeholder="doc@gmail.com"
          v-model="doctor.email"
          required
        />
      </div>
      <div>
        <label
          for="degree"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Degree</label
        >
        <input
          type="text"
          v-model="doctor.degree"
          id="degree"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Degree"
          required
        />
      </div>
    </div>
    <button
      type="submit"
      @click="createDoctor"
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
    const doctor = reactive({
      email: "",
      degree: "",
    });

    async function createDoctor() {
      const data = {
        email: doctor.email,
        degree: doctor.degree,
      };
      await store.dispatch("postDoctor", data);
      store.dispatch("getDoctor");
      doctor.email = "";
      doctor.degree = "";
      this.$emit("update:show", false);
    }
    return {
      doctor,
      createDoctor,
    };
  },
});
</script>

<style scoped></style>
