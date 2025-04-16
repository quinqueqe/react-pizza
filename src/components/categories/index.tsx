import React from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { selectFilter } from '../../redux/filter/selectors'
import { setActiveCategories } from '../../redux/filter/slice'
import './Categories.scss'

const Filter: React.FC = () => {
	const dispatch = useAppDispatch()
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
			{categoriesDb.map((item: string, i: number) => (
				<button
					onClick={() => dispatch(setActiveCategories(i))}
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
