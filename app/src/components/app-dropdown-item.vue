<script setup>
import { MenuItem } from "@headlessui/vue";
</script>
<template>
  <div class="">
    <MenuItem >
      <button class="w-full" type="submit">
        <slot :active="$props.active" />
      </button>
    </MenuItem>
  </div>
</template>
