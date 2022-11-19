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
        v-for="specialize in specializes"
        :key="specialize.id"
      >
        <article class="overflow-hidden rounded-lg shadow-lg">
          <header
            class="flex items-center justify-between leading-tight p-2 md:p-4 bg-white"
          >
            <h1 class="text-lg">
              <div class="text-black">Email: {{ specialize.id }}</div>
            </h1>
            <p class="text-grey-darker">Email: {{ specialize.email }}</p>
          </header>
          <footer
            class="flex items-center justify-between leading-none p-2 md:p-4 bg-white"
          >
            <button
              @click="deleteSpecialize(specialize.id)"
              class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
            >
              Delete
            </button>
          </footer>
        </article>
      </div>
    </div>
  </div>
  <Modal v-model:show="dialogVisible">
    <CreateSpecialize v-model:show="dialogVisible" />
  </Modal>

  <!--  <Modal v-model:show="dialogVisibleForEdit">
    <EditDoctor v-model:show="dialogVisibleForEdit" :propsEmail="propsEmail" />
  </Modal> -->
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";

import Modal from "@/components/Country/Modal.vue";
import CreateSpecialize from "@/components/Specialize/CreateSpecialize.vue";

export default defineComponent({
  components: { Modal, CreateSpecialize },
  setup() {
    const store = useStore();

    const dialogVisible = ref(false);

    function showDialog() {
      dialogVisible.value = true;
    }

    async function deleteSpecialize(id) {
      await store.dispatch("deleteSpecialize", id);
      await store.dispatch("getSpecialize");
    }

    onMounted(() => {
      store.dispatch("getSpecialize");
    });

    const specializes = computed(() => store.getters.specialize);

    return {
      showDialog,
      dialogVisible,
      deleteSpecialize,
      specializes,
    };
  },
});
</script>

<style scoped></style>
