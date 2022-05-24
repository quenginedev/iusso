import useScreen from "./use-screen";
import { computed, ref, watchEffect } from "vue";

const fullWidth = 280;
const miniWidth = 65;
const { isMobile } = useScreen();
const isMini = ref(false);
const drawerWidth = ref(isMini.value ? miniWidth : fullWidth);
const drawerLeftPosition = ref(isMobile.value ? -(drawerWidth.value) : 0);
const isDrawerMiniExpanded = computed(() => drawerWidth.value === fullWidth);
const showOnMiniExpand = computed(() => {
  return isDrawerMiniExpanded.value || (!isMini.value && !isMobile.value);
});
const contentStart = computed(() => {
  if (isMobile.value) return 0;
  if (isMini.value) return miniWidth;
  return fullWidth;
});
const toggleMiniDrawer = () => {
  if (!isMobile.value && isMini.value) {
    drawerWidth.value = isDrawerMiniExpanded.value ? miniWidth : fullWidth;
    return;
  }
};
const toggleDrawerLeftPosition = () => {
  if (isMobile.value) {
    drawerLeftPosition.value = drawerLeftPosition.value < 0
      ? 0
      : -(drawerWidth.value);
    return;
  }
};
watchEffect(() => {
  if (!isMobile.value) {
    if (drawerLeftPosition.value !== 0) drawerLeftPosition.value = 0;
  }
  if (isMobile.value) {
    drawerWidth.value = fullWidth;
    drawerLeftPosition.value = -fullWidth;
  }
});
const useDrawer = () => {
  return {
    drawerWidth,
    isMini,
    fullWidth,
    miniWidth,
    showOnMiniExpand,
    isDrawerMiniExpanded,
    toggleMiniDrawer,
    contentStart,
    drawerLeftPosition,
    toggleDrawerLeftPosition,
  };
};

export default useDrawer;
