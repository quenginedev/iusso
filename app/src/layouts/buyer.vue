<script setup>
import { useScreenSafeArea } from "@vueuse/core";
import useDrawer from "../composables/use-drawer";
import appDrawer from "../components/app-drawer.vue";
import AppNav from "../components/app-nav.vue";
import { useRouter } from "vue-router";
import useAuth from "../composables/use-auth";
import { watchEffect } from "vue";

const { replace } = useRouter();
const { isAuthenticated } = useAuth();
const { bottom, left, right, top } = useScreenSafeArea();
const { contentStart } = useDrawer();

watchEffect(() => {
  if (!isAuthenticated.value) replace({ name: "login" });
});
</script>
<template>
  <div
    v-if="isAuthenticated"
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
