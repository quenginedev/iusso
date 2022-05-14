<script setup>
import {
  MenuAlt2Icon,
  SearchIcon,
  TranslateIcon,
  BellIcon,
  ShoppingBagIcon,
} from "@heroicons/vue/outline";
import useDrawer from "../composables/use-drawer";
import AppButton from "./app-button.vue";
import AppBadge from "./app-badge.vue";
import { useRouter } from "vue-router";
import useCart from "../composables/use-cart";
const { contentStart, toggleDrawerLeftPosition } = useDrawer();
const { push } = useRouter();
const { getItemsCount } = useCart();
</script>
<template>
  <div
    :style="{ left: `${contentStart}px`, right: '0px' }"
    class="flex flex-row fixed justify-center p-3 backdrop-blur-lg bg-gray-100 bg-opacity-50"
  >
    <div class="flex flex-row justify-between max-w-screen-xl w-full">
      <div class="inline-flex gap-1">
        <app-button icon class="lg:hidden" @click="toggleDrawerLeftPosition">
          <menu-alt2-icon />
        </app-button>
        <app-button icon>
          <search-icon />
        </app-button>
      </div>
      <div class="inline-flex gap-1">
        <app-button icon>
          <translate-icon />
        </app-button>
        <app-button icon>
          <bell-icon />
        </app-button>
        <app-badge :content="getItemsCount" color="yellow" textColor="black">
          <app-button icon @click="push({ name: 'checkout' })" color="green" active>
            <shopping-bag-icon />
          </app-button>
        </app-badge>
      </div>
    </div>
  </div>
</template>
