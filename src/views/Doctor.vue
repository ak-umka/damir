<template>
  <div>
    <button
      @click="showDialog"
      class="mt-4 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
    >
      Add
    </button>
    <div class="flex flex-wrap mx-1 lg:-mx-4">
      <div
        class="my-1 px-1 w-full lg:my-4 lg:px-4 lg:w-1/3"
        v-for="doctor in doctors"
        :key="doctor.id"
      >
        <article class="overflow-hidden rounded-lg shadow-lg">
          <header
            class="flex items-center justify-between leading-tight p-2 md:p-4 bg-white"
          >
            <h1 class="text-lg">
              <div class="text-black">Email: {{ doctor.email }}</div>
            </h1>
            <p class="text-grey-darker">Degree: {{ doctor.degree }}</p>
          </header>
          <footer
            class="flex items-center justify-between leading-none p-2 md:p-4 bg-white"
          >
            <button
              @click="deleteDoctor(doctor.email)"
              class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
            >
              Delete
            </button>
            <button
              @click="edit(doctor.email)"
              class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Edit
            </button>
          </footer>
        </article>
      </div>
    </div>
  </div>
  <Modal v-model:show="dialogVisible">
    <CreateDoctor v-model:show="dialogVisible" />
  </Modal>

  <Modal v-model:show="dialogVisibleForEdit">
    <EditDoctor v-model:show="dialogVisibleForEdit" :propsEmail="propsEmail" />
  </Modal>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";

import Modal from "@/components/Country/Modal.vue";
import CreateDoctor from "@/components/Doctor/CreateDoctor.vue";
import EditDoctor from "@/components/Doctor/EditDoctor.vue";

export default defineComponent({
  components: { Modal, CreateDoctor, EditDoctor },
  setup() {
    const store = useStore();

    const dialogVisible = ref(false);
    const dialogVisibleForEdit = ref(false);

    function showDialog() {
      dialogVisible.value = true;
    }

    const propsEmail = ref("");
    function edit(email) {
      dialogVisibleForEdit.value = true;
      propsEmail.value = email;
    }

    async function deleteDoctor(email) {
      await store.dispatch("deleteDoctor", email);
      await store.dispatch("getDoctor");
    }

    onMounted(() => {
      store.dispatch("getDoctor");
    });

    const doctors = computed(() => store.getters.doctor);

    return {
      showDialog,
      deleteDoctor,
      edit,
      dialogVisible,
      dialogVisibleForEdit,
      propsEmail,
      doctors,
    };
  },
});
</script>

<style scoped></style>
