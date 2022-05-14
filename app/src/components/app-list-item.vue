<script setup>
import useDrawer from '../composables/use-drawer';
import { useRouter } from 'vue-router';

const { showOnMiniExpand, toggleDrawerLeftPosition } = useDrawer();
const { active, to } = defineProps({
  active: Boolean,
  to: String,
});

const { push } = useRouter();
const onClickCallback = to ? () => push(to) : () => {};
const onClick = ()=>{
  onClickCallback()
  toggleDrawerLeftPosition()
}
</script>

<template>
  <div
    @click="onClick"
    class="hover:bg-gray-500 hover:bg-opacity-20 flex flex-row items-center py-2 gap-3 rounded-lg cursor-pointer"
    :class="{
      'px-5': showOnMiniExpand,
      'justify-center': !showOnMiniExpand,
      'bg-green-500 text-green-500 bg-opacity-20 font-bold': active,
    }"
  >
    <slot name="icon" />
    <slot />
  </div>
</template>
