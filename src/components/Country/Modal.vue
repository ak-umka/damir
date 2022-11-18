<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    function hideDialog() {
      this.$emit("update:show", false);
    }
    return {
      hideDialog,
    };
  },
});
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.dialog__content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 500px;
  height: 420px;
}
</style>
