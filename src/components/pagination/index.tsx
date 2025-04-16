import React from 'react'
import styles from './Pagination.module.scss'
import ReactPaginate from 'react-paginate'
import { setCurrentPage } from '../../redux/filter/slice'
import { useAppDispatch } from '../../hooks/useAppDispatch'

const Pagination: React.FC = () => {
	const dispatch = useAppDispatch()
	return (
		<>
			<ReactPaginate
				className={styles.root}
				breakLabel='...'
				nextLabel='>'
				onPageChange={e => dispatch(setCurrentPage(e.selected + 1))}
				pageRangeDisplayed={4}
				pageCount={3}
				previousLabel='<'
				renderOnZeroPageCount={null}
			/>
		</>
	)
}

export default Pagination
