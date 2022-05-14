<script setup>
import AppDropdown from "~/components/app-dropdown.vue";
import AppDropdownItem from "~/components/app-dropdown-item.vue";
import AppNumberInput from "../app-number-input.vue";
import { reactive } from "vue";
const product = reactive({
  price: 3,
});
</script>
<template>
  {{ product }}
  <div class="py-3 flex flex-col gap-5">
    <h3 class="text-lg font-bold">Options</h3>
    <div class="flex flex-row justify-between items-center">
      <span class="font-semibold">Color</span>
      <div class="inline-flex gap-3">
        <div class="w-5 h-5 rounded-full bg-black border-2 border-green-500"></div>
        <div class="w-5 h-5 rounded-full bg-white border-2 border-gray-300"></div>
      </div>
    </div>
    <div class="flex flex-row justify-between items-center">
      <span class="font-semibold">Size</span>
      <app-dropdown>
        <app-dropdown-item v-for="i in 10">
          {{ i }}
        </app-dropdown-item>
      </app-dropdown>
    </div>
    <div class="flex flex-row justify-between items-center">
      <span class="font-semibold">Quantity</span>
      <app-number-input v-model="product.price" :min="1" :max="99" />
    </div>
  </div>
</template>
