import React from 'react'
import styles from './Pagination.module.scss'
import ReactPaginate from 'react-paginate'
import { useFilter } from '../../store'

const Pagination: React.FC = () => {
	const setCurrentPage = useFilter(state => state.setCurrentPage)
	return (
		<>
			<ReactPaginate
				className={styles.root}
				breakLabel='...'
				nextLabel='>'
				onPageChange={e => setCurrentPage(e.selected + 1)}
				pageRangeDisplayed={4}
				pageCount={3}
				previousLabel='<'
				renderOnZeroPageCount={null}
			/>
		</>
	)
}

export default Pagination
