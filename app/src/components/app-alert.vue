<script setup>
import {
  InformationCircleIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/vue/outline";

const { icon, type } = defineProps({
  icon: Boolean,
  type: {
    type: String,
    enum: ["info", "success", "warning", "error"],
    default: "info",
  },
});
</script>
<template>
  <div
    class="bg-red-500 bg-opacity-20 text-red-500 p-5 rounded-lg inline-flex gap-2 items-center"
  >
    <div class="">
      <information-circle-icon class="w-5 h-5" v-if="icon && type === 'info'" />
      <exclamation-circle-icon
        class="w-5 h-5"
        v-else-if="icon && (type === 'warning' || type === 'error')"
      />
      <check-circle-icon class="w-5 h-5" v-else-if="icon && type === 'success'" />
    </div>
    <slot />
  </div>
</template>
