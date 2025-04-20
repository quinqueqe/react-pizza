import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

interface CartState {
	items: CartItemType[]
	totalPrice: number
	setItems: (newItem: CartItemType) => void
	setTotalPrice: (value: number) => void
	countPlus: (id: string) => void
	countMinus: (id: string) => void
	deleteItem: (id: string) => void
	clearCart: () => void
}

export type CartItemType = {
	id: string
	imageUrl: string
	title: string
	price: number
	type: number
	size: number
	count: number
}

export const useCart = create<CartState>()(
	devtools(
		persist(
			set => ({
				items: [],
				totalPrice: 0,
				setItems: (newItem: CartItemType) => {
					set(state => {
						const findItem = state.items.find(obj => obj.id === newItem.id)
						let updatedItems
						if (findItem) {
							// Увеличиваем count для найденного элемента, создавая новый массив
							updatedItems = state.items.map(obj =>
								obj.id === newItem.id
									? { ...obj, count: (obj.count || 0) + 1 }
									: obj
							)
						} else {
							// Добавляем новый элемент с count = 1
							updatedItems = [...state.items, { ...newItem, count: 1 }]
						}

						return {
							items: updatedItems,
						}
					})
				},
				setTotalPrice: (value: number) => {
					set({ totalPrice: value })
				},
				countPlus: (id: string) => {
					set(state => {
						const updatedItems = state.items.map(item =>
							item.id === id ? { ...item, count: (item.count || 1) + 1 } : item
						)
						return { items: updatedItems }
					})
				},
				countMinus: (id: string) => {
					set(state => {
						const updatedItems = state.items.map(item =>
							item.id === id && (item.count || 1) > 1
								? { ...item, count: (item.count || 1) - 1 }
								: item
						)
						return {
							items: updatedItems,
						}
					})
				},
				deleteItem: (id: string) => {
					set(state => {
						const findItem = state.items.find(obj => obj.id === id)
						if (!findItem) {
							return {}
						}

						const updatedItems = state.items.filter(obj => obj.id !== id)
						const updateTotalPrice =
							state.totalPrice - findItem.price * (findItem.count || 1)

						return {
							items: updatedItems,
							totalPrice: updateTotalPrice,
						}
					})
				},
				clearCart: () => {
					set(() => ({
						items: [],
						totalPrice: 0,
					}))
				},
			}),

			{
				name: 'cart-storage', // ключ в localStorage
				storage: createJSONStorage(() => localStorage), // можно указать другое хранилище
			}
		)
	)
)
