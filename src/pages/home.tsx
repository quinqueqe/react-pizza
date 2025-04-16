import React from 'react'
import sortDb from '../components/sort/sortDb.json'
import Filter from '../components/categories'
import Sort from '../components/sort'
import PizzaBlock from '../components/pizzaBlock'
import Skeleton from '../components/pizzaBlock/skeleton'
import Pagination from '../components/pagination'
import ErrorGetPizzas from '../components/errorGetPizzas'

import { selectPizzas } from '../redux/pizzas/selectors'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { fetchGetPizzas } from '../redux/pizzas/asyncActions'
import { PizzaBlockType } from '../redux/pizzas/types'
import { selectFilter } from '../redux/filter/selectors'

const Home: React.FC = () => {
	const dispatch = useAppDispatch()
	const { pizzas, status } = useSelector(selectPizzas)
	const { activeCategories, activeSort, currentPage, valueInput } =
		useSelector(selectFilter)
	const skelet = [...Array(4)].map((_, i) => <Skeleton key={i} />)
	React.useEffect(() => {
		dispatch(
			fetchGetPizzas({
				activeCategories,
				activeSort,
				sortDb,
				currentPage,
				valueInput,
			})
		)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeCategories, activeSort, currentPage, valueInput])
	return (
		<div className='home border container '>
			<div className='home-filters'>
				<Filter />
				<Sort />
			</div>
			<div className='home-pizzas'>
				<h1>Все пиццы</h1>
				{currentPage > 1 && valueInput.length > 1 ? (
					<ErrorGetPizzas />
				) : currentPage > 1 && activeCategories > 0 ? (
					<ErrorGetPizzas />
				) : status === 'loading' ? (
					<ul>{skelet}</ul>
				) : status === 'ready' ? (
					<ul>
						{pizzas.map((pizza: PizzaBlockType, i: number) => (
							<PizzaBlock {...pizza} key={i} />
						))}
					</ul>
				) : (
					<ErrorGetPizzas />
				)}
			</div>
			<Pagination />
		</div>
	)
}

export default Home
