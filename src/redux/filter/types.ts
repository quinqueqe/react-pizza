export interface FilterState {
	activeCategories: number
	activeSort: number
	popup: boolean
	currentPage: number
}

export type Sort = {
	name: string
	sortProperty: string
}