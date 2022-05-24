<script setup>
const { color, active, fab, icon, solid, loading } = defineProps({
  color: {
    type: String,
    default: "gray",
  },
  active: Boolean,
  fab: Boolean,
  icon: Boolean,
  solid: Boolean,
  loading: { type: Boolean, default: false },
});
</script>
<template>
  <button class="">
    <div
      class="hover:bg-opacity-10 p-2 rounded-lg font-bold"
      :class="{
        'w-10 h-10 rounded-full': fab || icon,
        'p-2': icon,
        'p-5': fab,
        [`text-${color}-500 hover:bg-${color}-500`]: color,
        [`bg-${color}-500 bg-opacity-20`]: active,
        [`bg-${color}-500 text-white hover:bg-${color}-700 hover:bg-opacity-100`]: solid,
      }"
    >
      <span v-if="loading">Loading...</span>
      <slot v-else />
    </div>
  </button>
</template>
