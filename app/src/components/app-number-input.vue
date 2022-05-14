<script setup>
import { toRefs } from "vue";
import { PlusSmIcon, MinusSmIcon } from "@heroicons/vue/outline";
import { defaultTo, path } from "ramda";

const props = defineProps({
  modelValue: {
    type: Number,
    default: 1,
  },
  min: Number,
  max: Number,
});
const { modelValue, min, max } = toRefs(props);
const emit = defineEmits(["update:modelValue"]);

const isInputValid = (value) => {
  if (min.value && min.value > value) return false;
  if (max.value && max.value < value) return false;
  return true;
};

const handleInputChange = (event) => {
  const value = parseInt(defaultTo(1, path(["target", "value"], event)));
  if (min.value && min.value > value) return emit("update:modelValue", min.value);
  if (max.value && max.value < value) return emit("update:modelValue", max.value);
  emit("update:modelValue", value);
};

const handleIncrementBtn = (inc) => {
  const value = +modelValue.value + inc;
  if (isInputValid(value)) emit("update:modelValue", value);
};
</script>
<template>
  <div class="inline-flex bg-white px-3 py-1 rounded-lg text-sm border-2 border-gray-300">
    <button @click="handleIncrementBtn(-1)">
      <minus-sm-icon class="w-4 h-4" />
    </button>
    <input
      :value.number="modelValue"
      @change="handleInputChange"
      type="number"
      class="w-10 text-center outline-none"
    />
    <button @click="handleIncrementBtn(1)">
      <plus-sm-icon class="w-4 h-4" />
    </button>
  </div>
</template>
