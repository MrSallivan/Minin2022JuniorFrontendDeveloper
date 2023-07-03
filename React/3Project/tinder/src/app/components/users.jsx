import React, { useState } from "react"
import { PropTypes } from "prop-types"
import User from "./user"
import Pagination from "./pagination"
import { paginate } from "../utils/paginate"
import GroupList from "./groupList"

const Users = ({ users, ...rest }) => {
  const count = users.length
  const pageSize = 5

  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const userCrop = paginate(users, currentPage, pageSize)

  return (
    <>
      <GroupList items={}/>
      {count > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {userCrop.map((user) => (
              <User key={user._id} {...rest} {...user} />
            ))}
          </tbody>
        </table>
      )}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  )
}
Users.propTypes = {
  users: PropTypes.array
}
export default Users
