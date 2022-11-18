<template>
  <div>
    <button
      @click="showDialog"
      class="mt-4 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
    >
      Add
    </button>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <div
        class="my-1 px-1 w-full lg:my-4 lg:px-4 lg:w-1/3"
        v-for="country in countries"
        :key="country.id"
      >
        <article class="overflow-hidden rounded-lg shadow-lg">
          <header
            class="flex items-center justify-between leading-tight p-2 md:p-4 bg-white"
          >
            <h1 class="text-lg">
              <div class="text-black">Country: {{ country.cname }}</div>
            </h1>
            <p class="text-grey-darker">Population: {{ country.population }}</p>
          </header>
          <footer
            class="flex items-center justify-between leading-none p-2 md:p-4 bg-white"
          >
            <button
              @click="deleteCountry(country.cname)"
              class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
            >
              Delete
            </button>
            <button
              @click="edit(country.cname)"
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
    <Create v-model:show="dialogVisible" />
  </Modal>

  <Modal v-model:show="dialogVisibleForEdit">
    <Put v-model:show="dialogVisibleForEdit" :propsCountry="propsCountry" />
  </Modal>
</template>

<script lang="ts">
import Create from "@/components/Country/Create.vue";
import Modal from "@/components/Country/Modal.vue";
import Put from "@/components/Country/Put.vue";
import { computed, defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  components: { Create, Modal, Put },
  setup() {
    const store = useStore();

    const dialogVisible = ref(false);
    const dialogVisibleForEdit = ref(false);

    function showDialog() {
      dialogVisible.value = true;
    }

    const propsCountry = ref("");
    function edit(countryName) {
      dialogVisibleForEdit.value = true;
      propsCountry.value = countryName;
    }

    async function deleteCountry(countryName) {
      await store.dispatch("deleteCountry", countryName);
      await store.dispatch("getCountry");
    }

    onMounted(() => {
      store.dispatch("getCountry");
    });

    const countries = computed(() => store.getters.country);

    async function editCountry(country: any) {}

    return {
      propsCountry,
      edit,
      dialogVisible,
      dialogVisibleForEdit,
      countries,
      editCountry,
      showDialog,
      deleteCountry,
    };
  },
});
</script>

<style scoped></style>
