import { useWindowSize } from "@vueuse/core";
import { computed, Ref } from "vue";

const size = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const { width: windowSize } = useWindowSize();

const useScreen = (width: Ref<number> = windowSize) => {
	const gt = {
    sm: computed(() => width.value >= size.sm),
    md: computed(() => width.value >= size.md),
    lg: computed(() => width.value >= size.lg),
    xl: computed(() => width.value >= size.xl),
    "2xl": computed(() => width.value >= size["2xl"]),
  };

  const lt = {
    sm: computed(() => width.value < size.sm),
    md: computed(() => width.value < size.md),
    lg: computed(() => width.value < size.lg),
    xl: computed(() => width.value < size.xl),
    "2xl": computed(() => width.value < size["2xl"]),
  };

  const isMobile = computed(() => lt.lg.value);
  return {
    sm: computed(() => width.value < size.sm),
    md: computed(() => width.value < size.lg && width.value >= size.md),
    lg: computed(() => width.value < size.xl && width.value >= size.lg),
    xl: computed(() => width.value < size["2xl"] && width.value >= size.xl),
    "2xl": computed(() => width.value >= size["2xl"]),
    gt,
    lt,
    isMobile,
  };
};

export default useScreen;
