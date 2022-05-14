import { compose, keys, length, path, reduce, values } from "ramda";
import { computed, reactive } from "vue";
import { CartItem } from "../../types.d";

const cartItems = reactive<{ [id: string]: CartItem }>({});
const getItemsList = computed(() => values(cartItems));
const getItemsCount = computed(() => compose(length, keys)(cartItems));
const addItemToCart = (item: CartItem) => {
  const id = path(["product", "_id"], item) as string;
  cartItems[id] = item;
};

const cartItemsTotal = computed(() => reduce((total, item) => {
	total += item.quantity * item.product.price
	return total
}, 0, getItemsList.value));

const useCart = () => {
  return {
    cartItems,
    getItemsList,
    getItemsCount,
    addItemToCart,
		cartItemsTotal
  };
};

export default useCart;
