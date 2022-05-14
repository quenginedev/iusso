<script setup>
import { ref } from "vue";
import CartItemList from "./sections/cart-item-list.vue";
const step = ref("cart");
</script>
<template>
  <section>
    <div class="flex flex-row gap-1 items-center">
      <h3 class="text-2xl font-bold">Checkout</h3>
    </div>
    <div class="mt-5">
      <cart-item-list v-if="step === 'cart'" />
    </div>
  </section>
</template>
