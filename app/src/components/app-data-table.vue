<script setup>
import { path as toPathArr, split, __, reduce, map } from "ramda";
import { ref } from "vue";
import useScreen from "../composables/use-screen";

const { isMobile } = useScreen();

const { headers, items } = defineProps({
  headers: { type: Array, default: [] },
  items: { type: Array, default: [] },
});

const rowsWidth = [ref(undefined)];
items.forEach((_, i) => {
  rowsWidth[i] = ref(undefined);
});

const setRowWidth = (index) => (node) => {
  const width = node.el.scrollWidth;
  // document.createElement('div').scrollWidth
  // document.createElement('div').clientWidth
  const rowW = rowsWidth[index].value;
  if (!rowW || rowW < width)
    rowsWidth.forEach((row) => {
      row.value = width;
    });
  console.log(map((e) => e.value, rowsWidth));
};

const getItemInPath = ({ path = "", item = {} }) => {
  const pathArr = split(".", path);
  return toPathArr(pathArr, item);
};
</script>
<template>
  <div class="mt-5">
    <div v-if="isMobile" class="">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="border-y-2 border-b-gray-700 border-opacity-10 rounded-lg py-2.5 flex flex-col gap-2"
      >
        <div v-for="(header, index) in headers" :key="index" class="">
          <div class="flex justify-between">
            <div class="font-semibold">{{ header.text }}</div>
            <slot :name="`item.${header.path}`" :item="item">
              <div>{{ getItemInPath({ path: header.path, item }) }}</div>
            </slot>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="relative overflow-x-auto shadow-md rounded-lg">
      <table class="w-full text-sm text-left">
        <thead class="text-xs bg-opacity-10 bg-gray-500">
          <tr>
            <th
              v-for="(header, index) in headers"
              :key="index"
              scope="col"
              class="px-6 py-3 font-semibold"
            >
              {{ header.text }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index" class="bg-white border-b">
            <td v-for="(header, index) in headers" :key="index" class="px-6 py-4">
              <slot :name="`item.${header.path}`" :item="item">
                {{ getItemInPath({ path: header.path, item }) }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
