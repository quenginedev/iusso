<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";
</script>
<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex justify-center w-full rounded-lg border-2 border-gray-300 shadow-sm px-3 py-1 bg-white text-sm font-medium hover:bg-gray-50 outline-none"
      >
        9
        <ChevronDownIcon class="-mr-1 ml-5 h-5 w-5 text-gray-300" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-2 ring-black ring-opacity-5 outline-none"
      >
        <slot />
      </MenuItems>
    </transition>
  </Menu>
</template>
