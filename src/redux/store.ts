import { configureStore } from '@reduxjs/toolkit'
import filter from './filter/slice'
import pizzas from './pizzas/slice'
import cart from './cart/slice'

export const store = configureStore({
	reducer: {
		filter,
		pizzas,
		cart,
	},
})
