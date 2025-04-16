import React from 'react'
import { useSelector } from 'react-redux'
import { setActiveSort, setPopup } from '../../redux/filter/slice'
import './sort.scss'
import { selectFilter } from '../../redux/filter/selectors'
import { useAppDispatch } from '../../hooks/useAppDispatch'

const Sort: React.FC = () => {
	const sortDb = ['популярности', 'по цене', 'по алфавиту']
	const dispatch = useAppDispatch()
	const { activeSort, popup } = useSelector(selectFilter)
	const changeActiveSort = (i: number) => {
		dispatch(setActiveSort(i))
		dispatch(setPopup(false))
	}


	// закрытие popup окна вне клика области окна
	const sortRef = React.useRef<HTMLDivElement>(null)
	React.useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
				dispatch(setPopup(false))
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
				<span onClick={() => dispatch(setPopup(!popup))}>
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
