import { configureStore } from '@reduxjs/toolkit'
import filter from './filter/slice'
import pizzas from './pizzas/slice'
import cart from './cart/slice'
import fullPizza from './fullPizza/slice'

export const store = configureStore({
	reducer: {
		filter,
		pizzas,
		cart,
		fullPizza,
	},
})
