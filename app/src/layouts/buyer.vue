<script setup>
import { useScreenSafeArea } from "@vueuse/core";
import useDrawer from "../composables/use-drawer";
import appDrawer from "../components/app-drawer.vue";
import AppNav from "../components/app-nav.vue";

const { bottom, left, right, top } = useScreenSafeArea();
const { contentStart } = useDrawer();
</script>
<template>
  <div
    id="app"
    class="h-full w-full min-h-screen bg-gray-100 flex flex-row"
    :style="{
      'margin-top': top,
      'margin-left': left,
      'margin-right': right,
      'margin-bottom': bottom,
    }"
  >
    <app-drawer />
    <div
      class="relative w-full flex flex-row justify-center"
      :style="{
        'padding-left': `${contentStart}px`,
      }"
    >
      <app-nav />
      <div class="pt-24 pb-5 max-w-screen-xl w-full p-3">
        <router-view />
      </div>
    </div>
  </div>
</template>
