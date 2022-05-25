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

export type SignupCredentials = {
  email: string;
  password: string;
	phoneNumber: string
};

export type AuthMeta = {
	email: string
	phoneNumber: string
	name: string
}

export type AuthVerificationParams = {
  verificationCode: string;
  _id: string;
}