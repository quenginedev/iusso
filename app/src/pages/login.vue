<script setup>
import { reactive, ref } from "vue";
import AppButton from "../components/app-button.vue";
import AppInput from "../components/app-input.vue";
import { AtSymbolIcon, LockClosedIcon, EyeIcon, EyeOffIcon } from "@heroicons/vue/solid";
const loginDetails = reactive({
  email: "",
  password: "",
});
const showPassword = ref(false);
</script>
<template>
  <section class="w-full p-10">
    <div class="text-right">
      <span
        >Don’t have an account?
        <router-link to="#" class="text-green-500">Get started</router-link></span
      >
    </div>
    <div class="flex flex-row h-full justify-center items-center">
      <div class="flex flex-col gap-5 w-full max-w-md">
        <div class="">
          <h2 class="font-bold text-3xl">Login</h2>
          <p class="text-gray-400 text-sm">It's nice seeing you back here again.</p>
        </div>
        <app-input v-model="loginDetails.email" placeholder="Email" type="email">
          <template #prepend>
            <at-symbol-icon class="h-5 w-5" />
          </template>
        </app-input>
        <app-input
          v-model="loginDetails.password"
          placeholder="Password"
          :type="showPassword ? 'text' : 'password'"
        >
          <template #prepend>
            <lock-closed-icon class="h-5 w-5" />
          </template>
          <template #append>
            <div @click="showPassword = !showPassword" class="h-5 w-5 cursor-pointer">
              <eye-off-icon v-if="!showPassword" />
              <eye-icon v-else />
            </div>
          </template>
        </app-input>
        <div class="text-right">
          <router-link to="#" class="font-semibold text-green-500"
            >Forgot Password?</router-link
          >
        </div>
        <app-button color="green" solid>Login</app-button>
      </div>
    </div>
  </section>
</template>
