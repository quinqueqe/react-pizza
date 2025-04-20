import React from 'react'
import './Sort.scss'
import { useFilter } from '../../store'

const Sort: React.FC = () => {
	const sortDb = ['популярности', 'по цене', 'по алфавиту']
	const { activeSort, popup, setActiveSort, setPopup } = useFilter(state => state)
	const changeActiveSort = (i: number) => {
		setActiveSort(i)
		setPopup(false)
	}

	// закрытие popup окна вне клика области окна
	const sortRef = React.useRef<HTMLDivElement>(null)
	React.useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
				setPopup(false)
			}
		}

		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div ref={sortRef} className='home-sort'>
			<h4>
				Сортировка по:
				<span onClick={() => setPopup(!popup)}>
					{sortDb[activeSort]}
				</span>
			</h4>
			<div className={popup ? 'home-sort-popup' : 'home-sort-popup-close'}>
				{sortDb.map((item: string, i: number) => (
					<button
						onClick={() => changeActiveSort(i)}
						className={
							activeSort === i
								? 'home-sort-popup-item-active'
								: 'home-sort-popup-item'
						}
						key={i}
					>
						{item}
					</button>
				))}
			</div>
		</div>
	)
}

export default Sort
