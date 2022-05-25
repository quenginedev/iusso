<script setup>
import { useFocusWithin, useVModels } from "@vueuse/core";
import { ref, onMounted } from "vue";

const props = defineProps({
  modelValue: String,
  placeholder: String,
  type: { type: String },
});

const emit = defineEmits(["update:modelValue"]);
const { modelValue, placeholder, type } = useVModels(props, emit);

const input = ref();
const inputOuter = ref();
const { focused } = useFocusWithin(input);
const asdsd = 'asd'
onMounted(() => {
  const inputOuterEl = inputOuter.value;
  const inputEl = input.value;
  inputOuterEl.addEventListener("click", () => {
    inputEl.focus();
  });
});
</script>
<template>
  <div
    ref="inputOuter"
    class="w-full px-3 gap-2 h-10 rounded-xl flex flex-row items-center bg-white text-gray-500 cursor-text"
    :class="{ 'border-2 border-green-500': focused }"
  >
    <div class="cursor-default">
      <slot name="prepend" />
    </div>
    <input
      ref="input"
      class="flex-grow outline-none"
      v-model="modelValue"
      :placeholder="placeholder"
      :type="type"
    />
    <div class="cursor-default">
      <slot name="append" />
    </div>
  </div>
</template>
