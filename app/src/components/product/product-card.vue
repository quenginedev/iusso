<script setup>
const {product} = defineProps({
  product: { type: Object, required: true },
});
</script>
<template>
  <div class="shadow-lg rounded-2xl overflow-clip">
    <router-link
      :to="{
        name: 'product-by-id',
        params: {id: product._id}
      }"
      class="rounded-2xl overflow-clip shadow-md cursor-pointer focus:outline-none"
    >
      <img
        class="h-52 w-full object-cover"
        :src="`https://minimal-assets-api-dev.vercel.app/assets/images/products/product_${product._id}.jpg`"
      />
      <div class="p-5">
        <div class="">
          <h4 class="font-bold">Product Name</h4>
          <h5 class="text-sm text-gray-700">Store Name</h5>
        </div>
        <div class="text-right font-bold text-lg">$16.99</div>
      </div>
    </router-link>
  </div>
</template>
