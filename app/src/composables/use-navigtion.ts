import { reduce } from "ramda";
import { computed } from "vue";
import {
  AdjustmentsIcon,
  ClockIcon,
  HeartIcon,
  ViewGridIcon,
} from "@heroicons/vue/outline";
import { useRoute } from "vue-router";

const navigations = [
  { name: "Orders", path: "/orders", icon: ClockIcon, active: "orders" },
  { name: "Discovery", path: "/", icon: ViewGridIcon, active: "discovery" },
  {
    name: "Favorites",
    path: "/favorites",
    icon: HeartIcon,
    active: "favorites",
  },
  {
    name: "Preferences",
    path: "/preferences",
    icon: AdjustmentsIcon,
    active: "preferences",
  },
];

const useNavigation = () => {
  const route = useRoute();
  const activeParentRoute = computed(() => {
    const { name } = route;
    return reduce(
      (active, navigation) => {
        return name === navigation.active ? name : active;
      },
      "discovery",
      navigations,
    );
  });
  return {
    navigations,
    activeParentRoute,
  };
};

export default useNavigation;
