<script setup>
import { reactive, ref } from "vue";
import AppButton from "../components/app-button.vue";
import AppAlert from "../components/app-alert.vue";
import AppInput from "../components/app-input.vue";
import {
  AtSymbolIcon,
  LockClosedIcon,
  EyeIcon,
  EyeOffIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/vue/solid";
import useAuth from "../composables/use-auth";

const loginDetails = reactive({
  name: "Ernest Hayford",
  email: "quenginedev@gmail.com",
  password: "Password123",
  phoneNumber: "23323456789",
});

const { signupUser, errorMsg, loading } = useAuth();

const showPassword = ref(false);
const handleSignupClick = () => {
  signupUser(loginDetails);
};
</script>
<template>
  <section class="w-full p-10">
    <div class="text-right">
      <span
        >Already have an account?
        <router-link :to="{ name: 'login' }" class="text-green-500"
          >Login</router-link
        ></span
      >
    </div>
    <div class="flex flex-row h-full justify-center items-center">
      <div class="flex flex-col gap-5 w-full max-w-md">
        <div class="">
          <h2 class="font-bold text-3xl">Sign Up</h2>
          <p class="text-gray-400 text-sm">Let's get you started with a new account.</p>
        </div>
        <app-alert v-if="errorMsg" icon type="error">
          {{ errorMsg }}
        </app-alert>
        <app-input v-model="loginDetails.name" placeholder="Name" type="text">
          <template #prepend>
            <user-icon class="h-5 w-5" />
          </template>
        </app-input>
        <app-input v-model="loginDetails.email" placeholder="Email" type="email">
          <template #prepend>
            <at-symbol-icon class="h-5 w-5" />
          </template>
        </app-input>
        <app-input
          v-model="loginDetails.phoneNumber"
          placeholder="Phone number"
          type="tel"
        >
          <template #prepend>
            <phone-icon class="h-5 w-5" />
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
          <router-link :to="{ name: 'login' }" class="font-semibold text-green-500"
            >Login instead?</router-link
          >
        </div>
        <app-button :loading="loading" @click="handleSignupClick" color="green" solid
          >Continue</app-button
        >
      </div>
    </div>
  </section>
</template>
