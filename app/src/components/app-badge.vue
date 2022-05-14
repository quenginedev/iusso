<script setup>
const { content, textColor, color } = defineProps({
  content: Number,
  color: {
    type: String,
    default: "gray",
  },
  textColor: String,
});
</script>

<template>
  <div class="relative">
    <p
      class="absolute -bottom-2 -right-2 text-xs py-1 px-1.5 rounded-lg font-bold text-white cursor-default select-none"
      :class="{
        [`bg-${color}-500`]: color,
        [textColor === 'black' ? `text-black` : `text-${textColor}-500`]: textColor,
        ['hidden']: !content
      }"
    >
      {{ content }}
    </p>
    <slot />
  </div>
</template>
