import axios from 'axios'
import { Sort } from './filter'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export interface FullPizzaState {
	pizza: PizzaBlockType[]
	status: string
	fetchGetFullPizza: (i: string) => void
}

interface PizzasState {
	pizzas: PizzaBlockType[]
	status: string
	fetchGetPizzas: any
}

enum FullPizzaStatus {
	LOADING = 'loading',
	SUCCESS = 'ready',
	ERROR = 'error',
}

enum Status {
	LOADING = 'loading',
	SUCCESS = 'ready',
	ERROR = 'error',
}

export type PizzaBlockType = {
	id: string
	imageUrl: string
	title: string
	price: number
	types: number[]
	sizes: number[]
}

export type FetchGetPizzasArgs = {
	activeCategories: number
	activeSort: number
	sortDb: Sort[]
	currentPage: number
	valueInput: string
}

export type FetchGetFullPizzaArgs = {
	id: string
}

export const usePizzas = create<PizzasState>()(
	devtools(set => ({
		pizzas: [],
		status: Status.LOADING,
		fetchGetPizzas: async (params: FetchGetPizzasArgs) => {
			const { activeCategories, activeSort, sortDb, currentPage, valueInput } =
				params

			set({ status: Status.LOADING })
			const property = sortDb[activeSort].sortProperty
			const category =
				activeCategories > 0 ? `&category=${activeCategories}` : ''
			const page = currentPage
			const search = `&search=${valueInput.trim()}`
			const truf = valueInput.length > 1 ? search : category
			const url = `https://6759dac0099e3090dbe32341.mockapi.io/items?sortBy=${property}&order=desc&page=${page}&limit=4`
			const { data } = await axios.get(`${url}${truf}`)

			try {
				set({ pizzas: data, status: Status.SUCCESS })
			} catch {
				console.log('error')
				set({ status: Status.ERROR })
			}
		},
	}))
)

export const useFullPizza = create<FullPizzaState>()(
	devtools(set => ({
		pizza: [],
		status: FullPizzaStatus.LOADING,
		fetchGetFullPizza: async (id: string) => {
			set({ pizza: [], status: FullPizzaStatus.LOADING })
			try {
				const { data } = await axios.get(
					`https://6759dac0099e3090dbe32341.mockapi.io/items/${id}`
				)
				set({ pizza: data, status: FullPizzaStatus.SUCCESS })
			} catch {
				set({ pizza: [], status: FullPizzaStatus.ERROR })
			}
		},
	}))
)
