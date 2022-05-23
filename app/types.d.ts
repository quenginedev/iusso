export type Product = {
  _id: string;
  name: string;
  price: number;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type LoginCredentials = {
  email: string;
  password: string;
};

export type AuthMeta = {
	email: string
	phoneNumber: string
	name: string
}