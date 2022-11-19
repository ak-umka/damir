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
        v-for="publicServant in publicServants"
        :key="publicServant.id"
      >
        <article class="overflow-hidden rounded-lg shadow-lg">
          <header
            class="flex items-center justify-between leading-tight p-2 md:p-4 bg-white"
          >
            <h1 class="text-lg">
              <div class="text-black">Email: {{ publicServant.email }}</div>
            </h1>
            <p class="text-grey-darker">
              Department: {{ publicServant.department }}
            </p>
          </header>
          <footer
            class="flex items-center justify-between leading-none p-2 md:p-4 bg-white"
          >
            <button
              @click="deletePublicServant(publicServant.email)"
              class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
            >
              Delete
            </button>
            <button
              @click="edit(publicServant.email)"
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
    <CreatePublicServant v-model:show="dialogVisible" />
  </Modal>

  <Modal v-model:show="dialogVisibleForEdit">
    <EditPublicServant v-model:show="dialogVisibleForEdit" :propsEmail="propsEmail" />
  </Modal>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";

import Modal from "@/components/Country/Modal.vue";
import CreatePublicServant from "@/components/PublicServant/CreatePublicServant.vue";
import EditPublicServant from "@/components/PublicServant/EditPublicServant.vue";

export default defineComponent({
  components: { Modal, CreatePublicServant, EditPublicServant },
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

    async function deletePublicServant(email) {
      await store.dispatch("deletePublicServant", email);
      await store.dispatch("getPublicServant");
    }

    onMounted(() => {
      store.dispatch("getPublicServant");
    });

    const publicServants = computed(() => store.getters.public_servant);
    return {
      publicServants,
      showDialog,
      dialogVisible,
      deletePublicServant,
      edit,
      dialogVisibleForEdit,
      propsEmail,
    };
  },
});
</script>

<style scoped></style>
