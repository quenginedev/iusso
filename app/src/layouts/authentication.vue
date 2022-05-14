<script setup>
import { useScreenSafeArea } from "@vueuse/core";

const { bottom, left, right, top } = useScreenSafeArea();
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
    <div class="w-full hidden md:block max-w-md p-10 bg-white shadow-md">
      <div>Logo</div>
      <div class="flex flex-row h-full justify-center items-center">
        <div class="">Cover</div>
      </div>
    </div>
    <router-view />
  </div>
</template>
