<template>
  <div>
    <button
      @click="showDialog"
      class="mt-4 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
    >
      Add
    </button>
    <div class="flex flex-wrap mx-1 lg:-mx-4">
      <div v-if="users.users === null" class="w-full lg:w-1/3 p-4">
        <div class="bg-white rounded shadow p-2">
          <p class="text-gray-800 font-medium">No users found</p>
        </div>
      </div>
      <div v-else>
        <div
          class="grid grid-cols-3 my-1 px-1 w-full lg:my-4 lg:px-4"
          v-for="user in users"
          :key="user?.id"
        >
          <div class="m-1" v-for="items in user" :key="items.id">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <header
                class="items-center justify-between leading-tight p-2 md:p-4 bg-white"
              >
                <h1 class="text-lg">
                  <div class="text-black">Name: {{ items.name }}</div>
                </h1>
                <p class="text-grey-darker">Surname: {{ items.surname }}</p>
                <p class="text-grey-darker">Email: {{ items.email }}</p>
                <p class="text-grey-darker">Phone: {{ items.phone }}</p>
                <p class="text-grey-darker">Salary: {{ items.salary }}</p>
                <p class="text-grey-darker">Country Name: {{ items.cname }}</p>
              </header>
              <footer
                class="flex items-center justify-between leading-none p-2 md:p-4 bg-white"
              >
                <button
                  @click="deleteUser(items.email)"
                  class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                >
                  Delete
                </button>
                <button
                  @click="edit(items.email)"
                  class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                >
                  Edit
                </button>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Modal v-model:show="dialogVisible">
    <CreateUser v-model:show="dialogVisible" />
  </Modal>

  <Modal v-model:show="dialogVisibleForEdit">
    <EditUser v-model:show="dialogVisibleForEdit" :propsEmail="propsEmail" />
  </Modal>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";
import EditUser from "@/components/Users/EditUser.vue";
import CreateUser from "@/components/Users/CreateUser.vue";
import Modal from "@/components/Country/Modal.vue";

export default defineComponent({
  components: { CreateUser, Modal, EditUser },
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

    async function deleteUser(email) {
      await store.dispatch("deleteUser", email);
      await store.dispatch("getUser");
    }

    onMounted(() => {
      store.dispatch("getUser");
    });

    const users = computed(() => {
      if (store.getters.user.length === 0) {
        return [];
      }
      return store.getters.user;
    });

    return {
      propsEmail,
      dialogVisible,
      dialogVisibleForEdit,
      users,
      edit,
      showDialog,
      deleteUser,
    };
  },
});
</script>

<style scoped></style>
