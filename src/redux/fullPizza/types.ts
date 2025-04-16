import { PizzaBlockType } from '../pizzas/types'

export interface FullPizzaState {
	pizza: PizzaBlockType[]
	status: string
}

export type FetchGetFullPizzaArgs = {
	id: string
}

export enum FullPizzaStatus {
	LOADING = 'loading',
	SUCCESS = 'ready',
	ERROR = 'error',
}
