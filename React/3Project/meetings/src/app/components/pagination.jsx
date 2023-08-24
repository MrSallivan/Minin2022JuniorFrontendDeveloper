import React from 'react'

const Pagination = ({ itemsCount, pageSize, onPageChange }) => {
	console.log(itemsCount, pageSize, onPageChange );
	let pages = pageSize/itemsCount
 let numbersPages = pages % 1 === 0 pages : pages + 1
 console.log(numbersPages);
  return (
    <nav aria-label="...">
      <ul class="pagination pagination-sm">
				
        <li class="page-item active" aria-current="page">
          <span class="page-link">1</span>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            2
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            3
          </a>
        </li>
      </ul>
    </nav>
  )
}
 
export default Pagination;