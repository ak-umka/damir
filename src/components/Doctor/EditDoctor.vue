<template>
  <div>
    <div class="pt-4">EDIT DOCTOR</div>
    <div class="grid gap-6 mb-6 md:grid-cols-2 pt-4">
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
      @click="editDoctor"
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
    propsEmail: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = useStore();

    const doctor = reactive({
      degree: "",
    });

    async function editDoctor() {
      const data = {
        email: this.propsEmail,
        degree: doctor.degree,
      };
      await store.dispatch("putDoctor", data);
      await store.dispatch("getDoctor");
      this.$emit("update:show", false);
    }

    return {
      doctor,
      editDoctor,
    };
  },
});
</script>

<style scoped></style>
