<script setup lang="ts">
import { StarIcon as Solid } from "@heroicons/vue/solid";
</script>
<template>
  <div class="inline-flex gap-1">
    <solid class="w-7 h-7 text-yellow-500" v-for="i in 5" :key="i" />
  </div>
</template>
