import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface FilterState {
	activeCategories: number
	activeSort: number
	popup: boolean
	currentPage: number
	valueInput: string
	setActiveCategories: (i: number) => void
	setActiveSort: (i: number) => void
	setPopup: (popup: boolean) => void
	setCurrentPage: (e: number) => void
	setValueInput: (e: string) => void
}

export type Sort = {
	name: string
	sortProperty: string
}

export const useFilter = create<FilterState>()(set => ({
	activeCategories: 0,
	activeSort: 0,
	popup: false,
	currentPage: 1,
	valueInput: '',
	setActiveCategories: (value: number) =>
		set(() => ({ activeCategories: value })),
	setActiveSort: (value: number) => set(() => ({ activeSort: value })),
	setPopup: (value: boolean) => set(() => ({ popup: value })),
	setCurrentPage: (value: number) => set({ currentPage: value }),
	setValueInput: (value: string) => set({ valueInput: value }),
}))
