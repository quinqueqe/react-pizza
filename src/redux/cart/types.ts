export type CartItemType = {
	id: string
	imageUrl: string
	title: string
	price: string
	type: number
	size: number
	count: number
}

export interface CartState {
	items: CartItemType[]
}
