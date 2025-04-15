export interface FilterState {
	activeCategories: number
	activeSort: number
	popup: boolean
}

export type Sort = {
	name: string
	sortProperty: string
}