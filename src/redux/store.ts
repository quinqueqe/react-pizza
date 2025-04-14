import { configureStore } from '@reduxjs/toolkit'
import filter from './filter/slice'
import pizzas from './pizzas/slice'

export const store = configureStore({
	reducer: {
		filter,
		pizzas,
	},
})
