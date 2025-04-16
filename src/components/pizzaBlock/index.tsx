import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import plus from '../../assets/plus.svg'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { selectCart } from '../../redux/cart/selectors'
import { setItems, setTotalPrice } from '../../redux/cart/slice'
import { CartItemType } from '../../redux/cart/types'
import { fetchGetFullPizza } from '../../redux/fullPizza/asyncAction'
import { PizzaBlockType } from '../../redux/pizzas/types'
const PizzaBlock: React.FC<PizzaBlockType> = ({
	id,
	imageUrl,
	title,
	price,
	types,
	sizes,
}) => {
	const settingDb = ['тонкое', 'традиционное']
	const [activeType, setActiveType] = React.useState<number>(0)
	const [activeSize, setActiveSize] = React.useState<number>(0)

	const dispatch = useAppDispatch()
	const { items, totalPrice } = useSelector(selectCart)
	const findItem = items.find(obj => obj.id === id)
	const count = findItem ? findItem.count : 0
	const addCart = (id: string) => {
		const type = types[activeType]
		const size = sizes[activeSize]
		const item: CartItemType = {
			id,
			imageUrl,
			title,
			price,
			type,
			size,
			count: 1,
		}
		dispatch(setItems(item))
		dispatch(setTotalPrice(totalPrice + price))
	}

	const pushFullPizza = (id: string) => {
		dispatch(fetchGetFullPizza({ id }))
	}
	return (
		<li>
			<Link onClick={() => pushFullPizza(id)} to={`pizza/${id}`}>
				<img src={imageUrl} alt='img' />
				<h5>{title}</h5>
			</Link>
			<div className='home-pizzas-settings'>
				<div className='home-pizzas-settings-top'>
					{types.map((item: number, i: number) => (
						<button
							onClick={() => setActiveType(i)}
							key={i}
							className={
								activeType === i
									? 'home-pizzas-settings-top-btn-active'
									: 'home-pizzas-settings-top-btn'
							}
						>
							{settingDb[item]}
						</button>
					))}
				</div>
				<div className='home-pizzas-settings-bot'>
					{sizes.map((item: number, i: number) => (
						<button
							onClick={() => setActiveSize(i)}
							key={i}
							className={
								activeSize === i
									? 'home-pizzas-settings-bot-btn-active'
									: 'home-pizzas-settings-bot-btn'
							}
						>
							{item} см
						</button>
					))}
				</div>
			</div>
			<div className='home-pizzas-order'>
				<h3>от {price} ₽</h3>
				<button onClick={() => addCart(id)}>
					<img src={plus} alt='img' />
					Добавить <span>{count}</span>
				</button>
			</div>
		</li>
	)
}

export default PizzaBlock
