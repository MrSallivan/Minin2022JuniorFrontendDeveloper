import React, { useState } from "react"
import PropTypes from "prop-types"
import User from "./user"
import Pagination from "./pagination"
import paginate from "../utils/paginate"
import GroupList from "./groupList"
import API from "../api"

const Users = ({ users, ...rest }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState(API.professions.fetchAll())
	console.log(professions);
  const handleProfessionSelect = (params) => {
    console.log(params)
  }
  const count = users.length
  const pageSize = 4
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const userCrop = paginate(users, currentPage, pageSize)

  return (
    <>
      <GroupList items={professions} onItemSelect={handleProfessionSelect} />
      {count > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Провфессия</th>
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
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  )
}

Users.propTypes = {
  users: PropTypes.array
}
export default Users
