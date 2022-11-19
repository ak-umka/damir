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
        v-for="disease in diseases"
        :key="disease.id"
      >
        <article class="overflow-hidden rounded-lg shadow-lg">
          <header
            class="items-center justify-between leading-tight p-2 md:p-4 bg-white"
          >
            <h1 class="text-lg">
              <div class="text-black">ID: {{ disease.id }}</div>
            </h1>
            <p class="text-grey-darker">
              Description: {{ disease.description }}
            </p>
            <p class="text-grey-darker">Pathogen: {{ disease.pathogen }}</p>
            <p class="text-grey-darker">
              Disease Code: {{ disease.disease_code }}
            </p>
          </header>
          <footer
            class="flex items-center justify-between leading-none p-2 md:p-4 bg-white"
          >
            <button
              @click="deleteDisease(disease.pathogen)"
              class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
            >
              Delete
            </button>
            <button
              @click="edit(disease.pathogen)"
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
    <CreateDisease v-model:show="dialogVisible" />
  </Modal>

  <Modal v-model:show="dialogVisibleForEdit">
    <EditDisease
      v-model:show="dialogVisibleForEdit"
      :propsPathogen="propsPathogen"
    />
  </Modal>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";

import Modal from "@/components/Country/Modal.vue";
import CreateDisease from "@/components/Disease/CreateDisease.vue";
import EditDisease from "@/components/Disease/EditDisease.vue";

export default defineComponent({
  components: { Modal, CreateDisease, EditDisease },
  setup() {
    const store = useStore();

    const dialogVisible = ref(false);
    const dialogVisibleForEdit = ref(false);

    function showDialog() {
      dialogVisible.value = true;
    }

    const propsPathogen = ref("");
    function edit(pathogen) {
      dialogVisibleForEdit.value = true;
      propsPathogen.value = pathogen;
    }

    async function deleteDisease(pathogen) {
      await store.dispatch("deleteDisease", pathogen);
      await store.dispatch("getDisease");
    }

    onMounted(() => {
      store.dispatch("getDisease");
    });

    const diseases = computed(() => {
      const diseases = store.getters.disease;
      const diseasesArray = [];
      for (const disease in diseases) {
        diseasesArray.push(diseases[disease]);
      }
      return diseasesArray;
    });
    return {
      diseases,
      showDialog,
      dialogVisible,
      deleteDisease,
      edit,
      dialogVisibleForEdit,
      propsPathogen,
    };
  },
});
</script>

<style scoped></style>
