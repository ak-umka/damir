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
        v-for="discover in discovers"
        :key="discover.id"
      >
        <article class="overflow-hidden rounded-lg shadow-lg">
          <header
            class="items-center justify-between leading-tight p-2 md:p-4 bg-white"
          >
            <h1 class="text-lg">
              <div class="text-black">Country Name: {{ discover.cname }}</div>
            </h1>
            <p class="text-grey-darker">
              Disease Code: {{ discover.disease_code }}
            </p>
            <p class="text-grey-darker">
              First Enc: {{ formatTime(discover.first_enc) }}
            </p>
          </header>
          <footer
            class="flex items-center justify-between leading-none p-2 md:p-4 bg-white"
          >
            <button
              @click="deleteDiscover(discover.cname)"
              class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
            >
              Delete
            </button>
            <button
              @click="edit(discover.cname)"
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
    <CreateDiscover v-model:show="dialogVisible" />
  </Modal>

  <Modal v-model:show="dialogVisibleForEdit">
    <EditDiscover
      v-model:show="dialogVisibleForEdit"
      :propsCname="propsCname"
    />
  </Modal>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";

import Modal from "@/components/Country/Modal.vue";
import CreateDiscover from "@/components/Discover/CreateDiscover.vue";
import EditDiscover from "@/components/Discover/EditDiscover.vue";

export default defineComponent({
  components: { Modal, CreateDiscover, EditDiscover },
  setup() {
    const store = useStore();

    const dialogVisible = ref(false);
    const dialogVisibleForEdit = ref(false);

    function showDialog() {
      dialogVisible.value = true;
    }

    const propsCname = ref("");
    function edit(cname) {
      dialogVisibleForEdit.value = true;
      propsCname.value = cname;
    }

    async function deleteDiscover(cname) {
      await store.dispatch("deleteDiscover", cname);
      await store.dispatch("getDiscover");
    }

    onMounted(() => {
      store.dispatch("getDiscover");
    });

    const discovers = computed(() => store.getters.discover);

    function formatTime(time) {
      const date = new Date(time);
      return date.toLocaleString();
    }

    return {
      formatTime,
      dialogVisible,
      dialogVisibleForEdit,
      showDialog,
      edit,
      deleteDiscover,
      propsCname,
      discovers,
    };
  },
});
</script>

<style scoped></style>
