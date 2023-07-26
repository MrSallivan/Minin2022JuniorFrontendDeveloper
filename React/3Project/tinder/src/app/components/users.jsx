import React, { useState, useEffect } from "react"
import { PropTypes } from "prop-types"
import Pagination from "./pagination"
import { paginate } from "../utils/paginate"
import GroupList from "./groupList"
import api from "../api"
import SearchStatus from "./searchStatus"
import UsersTable from "./usersTable"
import _ from "lodash"

const Users = ({ users, ...rest }) => {
  const pageSize = 5
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()
  const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" })

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const handleProfessionSelect = (item) => {
    setSelectedProf(item)
  }
  const handleSort = (item) => {
    setSortBy(item)
  }
  useEffect(() => {
    api.professions.fetchAll().then((date) => {
      setProfessions(date)
    })
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])

  const filteredUsers = selectedProf
    ? users.filter(
      (user) =>
        JSON.stringify(user.profession) === JSON.stringify(selectedProf)
    )
    : users

  const count = filteredUsers.length

  const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order])

  const userCrop = paginate(sortedUsers, currentPage, pageSize)

  const clearFilter = () => {
    setSelectedProf(undefined)
  }

  return (
    <div className="d-flex">
      {professions && (
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <GroupList
            items={professions}
            onItemSelect={handleProfessionSelect}
            selectedItem={selectedProf}
          />
          <button className="btn btn-secondary mt-2" onClick={clearFilter}>
            Очистить
          </button>
        </div>
      )}

      <div className="d-flex flex-column">
        <SearchStatus length={count} />
        {count > 0 && (
          <UsersTable
            users={userCrop}
            onSort={handleSort}
            selectedSort={sortBy}
            {...rest}
          />
        )}
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}
Users.propTypes = {
  users: PropTypes.array
}
export default Users
