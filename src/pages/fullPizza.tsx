import React from 'react'
import { useSelector } from 'react-redux'
import { selectFullPizza } from '../redux/fullPizza/selectors'
import FullPizzaBlock from '../components/fullPizzaBlock'
import Skeleton from '../components/fullPizzaBlock/skeleton'

const FullPizza: React.FC = () => {
	const { pizza, status } = useSelector(selectFullPizza)
	const getPizza = new Array(1).fill(pizza)
	return (
		<div className='fullPizza-page border container'>
			{status === 'loading' ? (
				<Skeleton />
			) : (
				getPizza.map((value, i: number) => (
					<FullPizzaBlock {...value} key={i} />
				))
			)}
		</div>
	)
}

export default FullPizza
