<script setup>
import { Carousel, Slide } from "vue3-carousel";
import useCarousel from "~/composables/use-carousel";
import "vue3-carousel/dist/carousel.css";

const { currentSlide, setSlide } = useCarousel(0);
</script>
<template>
  <div>
    <div class="rounded-2xl overflow-clip relative">
      <carousel :itemsToShow="1" :mouseDrag="false" v-model="currentSlide">
        <slide v-for="(imgSlide, index) in 4" :key="index">
          <img
            class="aspect-square object-cover cursor-pointer"
            :src="`https://minimal-assets-api-dev.vercel.app/assets/images/products/product_${imgSlide}.jpg`"
          />
        </slide>
      </carousel>
    </div>
    <div class="flex flex-row justify-center mt-3">
      <img
        v-for="(imgSlide, index) in 4"
        :key="index"
        @click="setSlide(index)"
        class="w-20 h-20 aspect-square object-cover p-1 rounded-2xl cursor-pointer"
        :class="{ 'border-2 border-green-500': currentSlide === index }"
        :src="`https://minimal-assets-api-dev.vercel.app/assets/images/products/product_${imgSlide}.jpg`"
      />
    </div>
  </div>
</template>
