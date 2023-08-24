import React from 'react'
import PropTypes from "prop-types"
import _ from "lodash"

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  let pagesNums = Math.ceil(itemsCount / pageSize)
  if (pagesNums === 1) return null
  let pages = _.range(1, pagesNums + 1)

  return (
    <nav aria-label="...">
      <ul className="pagination pagination-sm">
        {pages.map((page) => (
          <li
            key={"page" + page}
            className={"page-item" + (currentPage === page ? " active" : "")}
            aria-current="page"
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
}
export default Pagination;