import React from 'react'
import sortDb from '../components/sort/sortDb.json'
import Filter from '../components/categories'
import Sort from '../components/sort'
import PizzaBlock from '../components/pizzaBlock'
import Skeleton from '../components/pizzaBlock/skeleton'

import { selectPizzas } from '../redux/pizzas/selectors'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { fetchGetPizzas } from '../redux/pizzas/asyncActions'
import { PizzaBlockType } from '../redux/pizzas/types'
import { selectFilter } from '../redux/filter/selectors'

const Home: React.FC = () => {
	const dispatch = useAppDispatch()
	const { pizzas, status } = useSelector(selectPizzas)
	const { activeCategories, activeSort } = useSelector(selectFilter)
	const skelet = new Array(10).fill(<Skeleton />)
	React.useEffect(() => {
		dispatch(fetchGetPizzas({ activeCategories, activeSort, sortDb }))
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeCategories, activeSort])
	return (
		<div className='home border container'>
			<div className='home-filters'>
				<Filter />
				<Sort />
			</div>
			<div className='home-pizzas'>
				<h1>Все пиццы</h1>
				<ul>
					{status === 'loading' ? (
						skelet
					) : status === 'ready' ? (
						pizzas.map((pizza: PizzaBlockType, i: number) => (
							<PizzaBlock {...pizza} key={i} />
						))
					) : (
						<>Ошибка</>
					)}
				</ul>
			</div>
		</div>
	)
}

export default Home
