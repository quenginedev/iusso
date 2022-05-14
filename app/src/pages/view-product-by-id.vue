<script setup>
import AppRating from "../components/app-rating.vue";
import AppProductCarousel from "../components/product/app-product-carousel.vue";
import { ShoppingBagIcon } from "@heroicons/vue/outline";
import AppProductOptions from "../components/product/app-product-options.vue";
import useCart from "../composables/use-cart";
import { useRoute, useRouter } from "vue-router";

const { push } = useRouter();
const {
  params: { id },
} = useRoute();
const { addItemToCart } = useCart();
const handleAddToCart = () => {
  addItemToCart({
    quantity: 2,
    product: {
      _id: id,
      name: "Test Product",
      price: 20,
    },
  });
};
const handleBuyNow = () => {
  handleAddToCart();
  push({ name: "checkout" });
};
</script>
<template>
  <section class="flex flex-col gap-5">
    <div class="flex flex-row justify-between items-center">
      <h3 class="text-2xl font-bold">Product Details</h3>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-5 p-2.5 border-2 border-gray-200 rounded-2xl"
    >
      <app-product-carousel />
      <div class="divide-dashed divide-y-2 flex flex-col gap-3">
        <div class="flex flex-col gap-2">
          <div class="">
            <span
              class="uppercase py-1 px-2 bg-green-500 text-white rounded-lg text-sm font-bold"
              >In Stock</span
            >
          </div>
          <div class="text-xl font-bold">Foundations Matte Flip Flop</div>
          <app-rating />
          <p class="text-xl font-bold">$35.71</p>
        </div>
        <app-product-options />
        <div class="pt-5">
          <div class="grid grid-cols-2 gap-5">
            <button
              @click="handleAddToCart"
              class="w-full px-5 py-3 font-bold rounded-xl bg-yellow-500 shadow-lg shadow-yellow-200 inline-flex justify-center gap-1"
            >
              <shopping-bag-icon class="w-5 h-5" />
              <p class="font-semibold">Add To Cart</p>
            </button>
            <button
              @click="handleBuyNow"
              class="w-full px-5 py-3 font-bold rounded-xl bg-green-600 shadow-lg shadow-green-200 text-white"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
