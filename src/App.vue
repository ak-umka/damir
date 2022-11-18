<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="min-h-screen bg-slate-100">
    <Header />
    <div class="max-w-screen-xl mx-auto">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: {
    Header,
  },
});
</script>
