import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItemType, CartState } from './types'

const initialState: CartState = {
	items: [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setItems(state, action: PayloadAction<CartItemType>) {
			const findItem = state.items.find(obj => obj.id === action.payload.id)

			if(findItem) {
				findItem.count++
			} else {
				state.items.push({
					...action.payload,
					count: 1
				})
			}
		},
	},
})

export const {setItems} = cartSlice.actions
export default cartSlice.reducer
