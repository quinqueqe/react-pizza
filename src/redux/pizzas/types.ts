export type PizzaBlockType = {
	id: string
	imageUrl: string
	title: string
	price: string
	types: number[]
	sizes: number[]
	// category:
	// rating:
}

export interface PizzasState {
	pizzas: PizzaBlockType[],
	status: string
}

export enum Status {
	LOADING = 'loading',
	SUCCESS = 'ready',
	ERROR = 'error',
}
