<template>
  <div>
    <div class="bg-orange-500 px-4 lg:px-6 py-2.5">
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
      >
        <div
          class="flex justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        >
          <RouterLink to="/" class="text-white mr-8">Country</RouterLink>
          <RouterLink to="/users" class="text-white mr-8">User</RouterLink>
          <RouterLink to="/doctors" class="text-white mr-8">Doctor</RouterLink>
          <RouterLink to="/discover" class="text-white mr-8"
            >Discover</RouterLink
          >
          <RouterLink to="/publicservant" class="text-white mr-8"
            >Public Servant</RouterLink
          >
          <RouterLink to="/specialize" class="text-white mr-8"
            >Specialize</RouterLink
          >
          <RouterLink to="/diseasetypes" class="text-white mr-8"
            >Disease Type</RouterLink
          >
          <RouterLink to="/disease" class="text-white mr-8">Disease</RouterLink>
          <RouterLink to="/record" class="text-white mr-8">Record</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
