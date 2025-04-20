import React from 'react'
import './Categories.scss'
import { useFilter } from '../../store'

const Filter: React.FC = () => {
	const activeCategories = useFilter(state => state.activeCategories)
	const setActiveCategories = useFilter(state => state.setActiveCategories)
	const categoriesDb = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	]
	return (
		<div className='home-filter'>
			{categoriesDb.map((item: string, i: number) => (
				<button
					onClick={() => setActiveCategories(i)}
					className={
						activeCategories === i
							? 'home-filter-btn-active'
							: 'home-filter-btn'
					}
					key={i}
				>
					{item}
				</button>
			))}
		</div>
	)
}

export default Filter
