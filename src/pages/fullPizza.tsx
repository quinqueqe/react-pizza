import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import FullPizzaBlock from '../components/FullPizzaBlock'
import Skeleton from '../components/FullPizzaBlock/skeleton'
import { selectFullPizza } from '../redux/fullPizza/selectors'
import { PizzaBlockType } from '../redux/pizzas/types'

const FullPizza: React.FC = () => {
	const { pizza, status } = useSelector(selectFullPizza)
	const getPizza = new Array(1).fill(pizza)
	return (
		<>
			<div className='fullPizza-page border container'>
				<div className='fullPizza-content'>
					{status === 'loading' ? (
						<Skeleton />
					) : (
						getPizza.map((value: PizzaBlockType, i: number) => (
							<FullPizzaBlock {...value} key={i} />
						))
					)}
				</div>
				<div className='fullPizza-btn'>
					<Link to='/react-pizza'>
						<button>Вернуться на главную страницу</button>
					</Link>
				</div>
			</div>
		</>
	)
}

export default FullPizza
