import useScreen from "./use-screen";
import { ref, watchEffect, computed } from "vue";

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
    console.log("left", drawerLeftPosition.value);
    return;
  }
};
watchEffect(() => {
  // console.log('contentStart', contentStart.value);
  // console.log('drawerLeftPosition', drawerLeftPosition.value);
  // console.log('isMini', isMini.value);
  
  if (!isMobile.value) {
    if (drawerLeftPosition.value !== 0) drawerLeftPosition.value = 0;
  }
  if(isMobile.value){
    drawerWidth.value = fullWidth
    drawerLeftPosition.value = -fullWidth
  }
});
// const drawerMiniWidth = ref(fullWidth);
// const width = computed(() => mini.value ? miniWidth : fullWidth);
// const showOnMini = computed(() => (drawerMiniWidth.value === fullWidth && mini.value) || !mini.value );
// const toggleDrawerMini = () => {
//   if(!isMobile.value && mini.value){
//     drawerMiniWidth.value = drawerMiniWidth.value === fullWidth
//     ? miniWidth
//     : fullWidth;
//     console.log(drawerMiniWidth.value);

//     return
//   }
//   drawerMiniWidth.value = null
// }

// const isDrawerOpen = ref(false)
// watchEffect(()=>{
//   console.log('isMobile', isMobile.value)
// })
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
