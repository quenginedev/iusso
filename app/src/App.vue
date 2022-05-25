<template>
  <router-view />
</template>
<style>
* {
  line-height: 1.5;
  font-size: 1rem;
  font-family: "Public Sans", sans-serif;
  font-weight: 400;
  @apply transition-all;
}
*::-webkit-scrollbar {
  @apply w-2 h-2;
}
*::-webkit-scrollbar-track {
  @apply rounded-lg bg-white;
}
*::-webkit-scrollbar-thumb {
  @apply bg-green-500 rounded-md border-2 border-green-100 border-solid;
}
</style>
