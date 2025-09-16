export type Product = {
	id: string;
	name: string;
	slug: string;
	description: string;
	main_image: string;
	category: string;
	price: number;
	markup_price: number;
	card_image: string;
	stones: number[];
};

// Product as stored in cart (adds quantity)
export type CartItem = Product & {
	quantity: number;
};
