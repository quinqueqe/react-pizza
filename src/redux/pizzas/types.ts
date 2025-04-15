import { Sort } from '../filter/types'

export type PizzaBlockType = {
	id: string
	imageUrl: string
	title: string
	price: number
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

export type fetchGetPizzasArgs = {
	activeCategories: number
	activeSort: number
	sortDb: Sort[]
	currentPage: number
}