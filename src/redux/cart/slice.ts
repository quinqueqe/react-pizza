import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItemType, CartState } from './types'

const initialState: CartState = {
	items: [],
	totalPrice: 0,
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setItems(state, action: PayloadAction<CartItemType>) {
			const findItem = state.items.find(obj => obj.id === action.payload.id)

			if (findItem) {
				findItem.count++
			} else {
				state.items.push({
					...action.payload,
					count: 1,
				})
			}
		},
		setTotalPrice(state, action: PayloadAction<number>) {
			state.totalPrice = action.payload
		},
		countPlus(state, action: PayloadAction<string>) {
			const findItem = state.items.find(obj => obj.id === action.payload)
			if (findItem) {
				findItem.count++
			}
		},
		countMinus(state, action: PayloadAction<string>) {
			const findItem = state.items.find(obj => obj.id === action.payload)
			if (findItem && findItem.count > 1) {
				findItem.count--
			}
		},
		deleteItem(state, action: PayloadAction<string>) {
			const findItem = state.items.find(obj => obj.id === action.payload)
			if (findItem) {
				state.items = state.items.filter(obj => obj.id !== action.payload)
				state.totalPrice -= findItem.price * findItem.count
			}
		},
		clearCart(state) {
			state.items = []
			state.totalPrice = 0
		},
	},
})

export const {
	setItems,
	setTotalPrice,
	countPlus,
	countMinus,
	deleteItem,
	clearCart,
} = cartSlice.actions
export default cartSlice.reducer
