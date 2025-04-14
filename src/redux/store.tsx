import { configureStore } from '@reduxjs/toolkit'
import initial from './initial/slice'

export const store = configureStore({
	reducer: {
		initial,
	},
})
