<script setup>
import {
  ShoppingCartIcon,
  ChevronDoubleLeftIcon,
  XIcon,
  LogoutIcon,
} from "@heroicons/vue/outline";
import AppButton from "./app-button.vue";
import AppListItem from "./app-list-item.vue";
import AppList from "./app-list.vue";

import { ref } from "vue";
import useDrawer from "~/composables/use-drawer";
import useScreen from "~/composables/use-screen";
import useNavigation from "~/composables/use-navigtion";
import useAuth from "../composables/use-auth";
import { compose, split, head } from "ramda";

const { authUser, logoutUser } = useAuth();
const { navigations, activeParentRoute } = useNavigation();
const drawerRef = ref(null);
const {
  showOnMiniExpand,
  toggleMiniDrawer,
  drawerWidth,
  isMini,
  drawerLeftPosition,
  toggleDrawerLeftPosition,
} = useDrawer();
const { isMobile } = useScreen();
</script>
<template>
  <div
    ref="drawerRef"
    :style="{
      'min-width': `${drawerWidth}px`,
      width: `${drawerWidth}px`,
      left: `${drawerLeftPosition}px`,
    }"
    class="bg-gray-100 backdrop-blur-lg fixed h-screen flex flex-col gap-10 z-10 overflow-y-auto p-3 border-r-2 border-gray-200"
    :class="{ 'bg-opacity-20': !isMobile }"
    @mouseover="toggleMiniDrawer"
    @mouseout="toggleMiniDrawer"
  >
    <div class="flex justify-between">
      <app-button icon>
        <shopping-cart-icon />
      </app-button>
      <app-button icon v-show="!isMobile && showOnMiniExpand" @click="isMini = !isMini">
        <chevron-double-left-icon :class="{ 'rotate-180': isMini }" />
      </app-button>
      <app-button icon v-show="isMobile" @click="toggleDrawerLeftPosition">
        <x-icon />
      </app-button>
    </div>
    <div
      class="flex flex-row items-center gap-5 rounded-lg cursor-pointer"
      :class="{
        'bg-gray-500 bg-opacity-10 p-5': showOnMiniExpand,
        'my-5': !showOnMiniExpand,
      }"
    >
      <div
        class="h-10 w-10 bg-yellow-500 rounded-full text-lg font-bold inline-flex items-center justify-center"
      >
        {{ compose(head, split(""))(authUser.name) }}
      </div>
      <div v-show="showOnMiniExpand">
        <p class="font-bold text-xs">{{ authUser.name }}</p>
        <p class="text-xs font-bold text-gray-500">{{ authUser.email }}</p>
      </div>
    </div>
    <div class="">
      <app-list>
        <template #title>
          <h1>Navigation</h1>
        </template>
        <template #default>
          <app-list-item
            v-for="(nav, i) in navigations"
            :key="i"
            :active="activeParentRoute === nav.active"
            :to="nav.path"
          >
            <component :is="nav.icon" class="w-6 h-6" slot="icon" />
            <p v-show="showOnMiniExpand">{{ nav.name }}</p>
          </app-list-item>
        </template>
      </app-list>
    </div>
    <div class="">
      <app-list>
        <app-list-item @click="logoutUser">
          <logout-icon slot="icon" class="w-6 h-6" />
          <p v-show="showOnMiniExpand">Logout</p>
        </app-list-item>
      </app-list>
    </div>
  </div>
</template>
