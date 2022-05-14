import { ref } from "vue";

const useCarousel = (start: number = 1) => {
  const currentSlide = ref(start);
  const setSlide = (position: number) => {
    currentSlide.value = position;
  };
  
  return {
    currentSlide,
    setSlide,
  };
};

export default useCarousel;
