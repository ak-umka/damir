<template>
  <div>
    <div class="bg-orange-500 px-4 lg:px-6 py-2.5">
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
      >
        <RouterLink to="/" class="text-white"> LOGO </RouterLink>
        <div
          class="flex justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        >
          <RouterLink to="/countries" class="text-white mr-8">Catalog</RouterLink>
          <RouterLink to="/" class="text-white mr-8">Search</RouterLink>
          <RouterLink to="/" class="text-white mr-8">Forum</RouterLink>
          <RouterLink to="/" class="text-white mr-8">FAQ</RouterLink>
        </div>
        <div class="flex justify-between lg:order-2">
          <RouterLink to="/login" class="text-white mr-8">Sign In</RouterLink>
          <RouterLink to="/register" class="text-white">Sign up</RouterLink>
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
