import React from 'react'
import { Link } from 'react-router-dom'
import {
	useCart,
	CartItemType,
	PizzaBlockType,
	useFullPizza,
} from '../../store'
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

	const items = useCart(state => state.items)
	const totalPrice = useCart(state => state.totalPrice)
	const { setItems, setTotalPrice } = useCart(state => state)
	const findItem = items.find(obj => obj.id === id)
	const count = findItem ? findItem.count : ''
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
		setItems(item)
		setTotalPrice(totalPrice + price)
	}

	const fetchGetFullPizza = useFullPizza(state => state.fetchGetFullPizza)
	const pushFullPizza = (id: string) => {
		fetchGetFullPizza(id)
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
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='12'
						height='12'
						viewBox='0 0 12 12'
						fill='none'
					>
						<path
							d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
							fill='#EB5A1E'
						/>
					</svg>
					Добавить {count && <span>{count}</span>}
				</button>
			</div>
		</li>
	)
}

export default PizzaBlock
