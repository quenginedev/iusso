<script setup>
import { useRoute, useRouter } from "vue-router";
import AppButton from "../components/app-button.vue";
import { CheckCircleIcon } from "@heroicons/vue/outline";

const { params } = useRoute();
const { replace } = useRouter();
const { email } = params;
</script>
<template>
  <section class="w-full p-10">
    <div class="flex flex-col h-full justify-center items-center gap-10">
      <h1 class="text-2xl inline-flex items-center gap-1">
        Verify Account <check-circle-icon class="w-10" />
      </h1>
      <div class="text-center">
        <p>A verification link has been sent to</p>
        <p class="font-bold">{{ email }}</p>
      </div>
      <div class="w-72">
        <app-button
          @click="replace({ name: 'login' })"
          color="green"
          solid
          class="w-full"
        >
          Continue
        </app-button>
      </div>
      <p>Didn't receive the email? <span class="font-bold">Click to resend</span></p>
    </div>
  </section>
</template>
