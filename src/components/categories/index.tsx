import React from 'react'
import './categories.scss'
import { useSelector, useDispatch } from 'react-redux'
import { selectFilter } from '../../redux/filter/selectors'
import { setActiveCategories } from '../../redux/filter/slice'

const Filter: React.FC = () => {
	const dispatch = useDispatch()
	const { activeCategories } = useSelector(selectFilter)
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
			{categoriesDb.map((item, i: number) => (
				<button
					onClick={() => dispatch(setActiveCategories(i))}
					className={
						activeCategories === i ? 'home-filter-btn-active' : 'home-filter-btn'
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
