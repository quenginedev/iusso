<script setup>
import EmptyCartIcon from "../../assets/illustration_empty_cart.svg";
import useCart from "../../composables/use-cart";
import AppDataTable from "../../components/app-data-table.vue";
import AppButton from "../../components/app-button.vue";
import { TrashIcon } from "@heroicons/vue/outline";
import AppNumberInput from "../../components/app-number-input.vue";

const { getItemsCount, getItemsList, cartItemsTotal } = useCart();
const cartDataTableHeaders = [
  { path: "product.name", text: "Name" },
  { path: "product.price", text: "Price" },
  { path: "quantity", text: "Quantity" },
  { path: "total", text: "Total" },
  { path: "action", text: "" },
];
</script>
<template>
  <div class="grid grid-cols-3 gap-5">
    <div
      class="col-span-3 md:col-span-2 p-5 border-2 border-gray-200 rounded-xl shadow-lg"
    >
      <div class="">
        <span>
          <span class="font-bold">Cart</span>
          ({{ getItemsCount }} Item)
        </span>
        <div v-if="getItemsCount < 1" class="flex flex-col gap-3 items-center">
          <img :src="EmptyCartIcon" class="w-72" />
          <p class="text-xl font-bold">Cart is empty</p>
          <p class="text-sm text-opacity-50">
            Look like you have no items in your shopping cart.
          </p>
        </div>
        <app-data-table v-else :headers="cartDataTableHeaders" :items="getItemsList">
          <template #item.product.price="{ item }">
            <div class="">GHS {{ item.product.price }}</div>
          </template>
          <template #item.total="{ item }">
            <div class="text-green">GHS {{ item.product.price * item.quantity }}</div>
          </template>
          <template #item.action>
            <app-button color="red">
              <trash-icon />
            </app-button>
          </template>
          <template #item.quantity="{ item }">
            <app-number-input v-model="item.quantity" :min="1" />
          </template>
        </app-data-table>
      </div>
    </div>
    <div class="col-span-3 md:col-span-1 flex flex-col gap-5">
      <div class="border-2 border-gray-200 rounded-xl shadow-lg p-5">
        <div class="flex justify-between">
          <span class="text-lg font-semibold">Total</span>
          <span class="text-red-500 font-bold">GHS {{ cartItemsTotal }}</span>
        </div>
      </div>
      <button
        class="w-full p-3 bg-green-600 rounded-lg shadow-lg shadow-green-700/30 text-white font-bold"
      >
        Check Out
      </button>
    </div>
  </div>
</template>
