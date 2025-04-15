export interface FilterState {
	activeCategories: number
	activeSort: number
	popup: boolean
	currentPage: number
	valueInput: string
}

export type Sort = {
	name: string
	sortProperty: string
}