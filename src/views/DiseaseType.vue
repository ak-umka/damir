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
        v-for="diseaseType in diseaseTypes"
        :key="diseaseType.id"
      >
        <article class="overflow-hidden rounded-lg shadow-lg">
          <header
            class="items-center justify-between leading-tight p-2 md:p-4 bg-white"
          >
            <h1 class="text-lg">
              <div class="text-black">Id: {{ diseaseType.id }}</div>
            </h1>
            <p class="text-grey-darker">
              description: {{ diseaseType.description }}
            </p>
          </header>
          <footer
            class="flex items-center justify-between leading-none p-2 md:p-4 bg-white"
          >
            <button
              @click="deleteDiseaseType(diseaseType.id)"
              class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
            >
              Delete
            </button>
            <button
              @click="edit(diseaseType.id)"
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
    <CreateDiseaseType v-model:show="dialogVisible" />
  </Modal>

  <Modal v-model:show="dialogVisibleForEdit">
    <EditDiseaseType v-model:show="dialogVisibleForEdit" :propsId="propsID" />
  </Modal>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";

import Modal from "@/components/Country/Modal.vue";
import CreateDiseaseType from "@/components/DiseaseType/CreateDiseaseType.vue";
import EditDiseaseType from "@/components/DiseaseType/EditDiseaseType.vue";

export default defineComponent({
  components: { Modal, CreateDiseaseType, EditDiseaseType },
  setup() {
    const store = useStore();

    const dialogVisible = ref(false);
    const dialogVisibleForEdit = ref(false);

    function showDialog() {
      dialogVisible.value = true;
    }

    const propsID = ref("");
    function edit(id) {
      dialogVisibleForEdit.value = true;
      propsID.value = id;
    }

    async function deleteDiseaseType(id) {
      await store.dispatch("deleteDiseaseType", id);
      await store.dispatch("getDiseaseType");
    }

    onMounted(() => {
      store.dispatch("getDiseaseType");
    });

    const diseaseTypes = computed(() => store.getters.diseaseType);
    return {
      showDialog,
      dialogVisible,
      dialogVisibleForEdit,
      deleteDiseaseType,
      edit,
      diseaseTypes,
      propsID,
    };
  },
});
</script>

<style scoped></style>
