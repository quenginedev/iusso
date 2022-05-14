<script setup>
import AppDropdown from "~/components/app-dropdown.vue";
import AppDropdownItem from "~/components/app-dropdown-item.vue";
import { PlusSmIcon, MinusSmIcon } from "@heroicons/vue/outline";
</script>
<template>
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
      <div
        class="inline-flex bg-white px-3 py-1 rounded-lg text-sm border-2 border-gray-300"
      >
        <button>
          <minus-sm-icon class="w-4 h-4" />
        </button>
        <input value="1" class="w-10 text-center outline-none" />
        <button>
          <plus-sm-icon class="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</template>
