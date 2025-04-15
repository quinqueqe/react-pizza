export type CartItemType = {
	id: string
	imageUrl: string
	title: string
	price: number
	type: number
	size: number
	count: number
}

export interface CartState {
	items: CartItemType[]
	totalPrice: number
}
