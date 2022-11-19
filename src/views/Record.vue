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
        class="grid grid-cols-3 my-1 px-1 w-full lg:my-4 lg:px-4"
        v-for="record in records"
        :key="record.id"
      >
        <article class="overflow-hidden rounded-lg shadow-lg">
          <header
            class="items-center justify-between leading-tight p-2 md:p-4 bg-white"
          >
            <h1 class="text-lg">
              <div class="text-black">Email: {{ record.email }}</div>
            </h1>
            <p class="text-grey-darker">Country Name: {{ record.cname }}</p>
            <p class="text-grey-darker">
              Disease Code: {{ record.disease_code }}
            </p>
            <p class="text-grey-darker">
              Total Deaths: {{ record.total_deaths }}
            </p>
            <p class="text-grey-darker">
              Total Patients: {{ record.total_patients }}
            </p>
          </header>
          <footer
            class="flex items-center justify-between leading-none p-2 md:p-4 bg-white"
          >
            <button
              @click="deleteRecord(record.email)"
              class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
            >
              Delete
            </button>
            <button
              @click="edit(record.email)"
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
    <CreateRecord v-model:show="dialogVisible" />
  </Modal>

  <Modal v-model:show="dialogVisibleForEdit">
    <EditRecord v-model:show="dialogVisibleForEdit" :propsEmail="propsEmail" />
  </Modal>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";
import Modal from "@/components/Country/Modal.vue";
import CreateRecord from "@/components/Record/CreateRecord.vue";
import EditRecord from "@/components/Record/EditRecord.vue";

export default defineComponent({
  components: { Modal, CreateRecord, EditRecord },
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

    async function deleteRecord(email) {
      await store.dispatch("deleteRecord", email);
      await store.dispatch("getRecord");
    }

    onMounted(() => {
      store.dispatch("getRecord");
    });

    const records = computed(() => store.getters.record);

    return {
      records,
      showDialog,
      dialogVisible,
      dialogVisibleForEdit,
      deleteRecord,
      edit,
      propsEmail,
    };
  },
});
</script>

<style scoped></style>
