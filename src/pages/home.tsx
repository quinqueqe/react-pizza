import qs from 'qs'
import React from 'react'
import Filter from '../components/Categories'
import ErrorGetPizzas from '../components/ErrorGetPizzas'
import Pagination from '../components/Pagination'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/skeleton'
import Sort from '../components/Sort'
import sortDb from '../components/Sort/sortDb.json'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { selectFilter } from '../redux/filter/selectors'
import { fetchGetPizzas } from '../redux/pizzas/asyncAction'
import { selectPizzas } from '../redux/pizzas/selectors'
import { PizzaBlockType } from '../redux/pizzas/types'

const Home: React.FC = () => {
	const navigate = useNavigate()
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

	React.useEffect(() => {
		const queryString = qs.stringify({
			sortBy: sortDb[activeSort].sortProperty,
			category: activeCategories,
			currentPage,
			valueInput,
		})
		navigate(`?${queryString}`)
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
