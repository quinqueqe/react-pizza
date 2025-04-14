import React from 'react'
import plus from '../../assets/plus.svg'
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
	const [activeType, setActiveType] = React.useState(0)
	const [activeSize, setActiveSize] = React.useState(0)
	return (
		<li>
			<img src={imageUrl} alt='img' />
			<h5>{title}</h5>
			<div className='home-pizzas-settings'>
				<div className='home-pizzas-settings-top'>
					{types.map((item, i: number) => (
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
					{sizes.map((item, i: number) => (
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
				<button>
					<img src={plus} alt='img' />
					Добавить <span>0</span>
				</button>
			</div>
		</li>
	)
}

export default PizzaBlock
