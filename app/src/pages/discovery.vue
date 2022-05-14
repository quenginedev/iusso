<script setup>
import { LocationMarkerIcon } from "@heroicons/vue/outline";
import ProductCard from "~/components/product/product-card.vue";
</script>
<template>
  <section>
    <div class="flex flex-row gap-1 items-center">
      <h3 class="text-2xl font-bold">Discovery</h3>
      <h4 class="inline-flex gap-1 items-center text-green-500">
        <location-marker-icon class="w-6 h-6" />
        <span class="font-bold">Accra</span>
      </h4>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
      <product-card
        v-for="i in 24"
        :product="{ _id: i }"
      />
    </div>
  </section>
</template>
