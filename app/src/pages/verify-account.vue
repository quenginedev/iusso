<script setup>
import { useRoute } from "vue-router";
import useAuth from "../composables/use-auth";

const { params } = useRoute();
const { verifyUser } = useAuth();
verifyUser(params);
</script>
<template>
  <section class="w-full p-10">
    <div class="flex flex-col h-full justify-center items-center gap-10">
      Verifying...
    </div>
  </section>
</template>
