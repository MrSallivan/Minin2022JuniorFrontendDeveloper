import React from "react"
// import User from "./user"
import PropTypes from "prop-types"
import TableHeader from "./tableHeader"
import TableBody from "./tableBody"
import BookMark from "./bookmark"

const UsersTable = ({ users, onSort, selectedSort, onToggleBookMark }) => {
  const columns = {
    name: { path: "name", name: "Имя" },
    qualities: { name: "Качества" },
    profession: { path: "profession.name", name: "Профессия" },
    completedMeetings: { path: "completedMeetings", name: "Встритился, раз" },
    rate: { path: "rate", name: "Оценка" },
    bookmark: {
      path: "bookmark",
      name: "Избранное",
      component: (user) => {
        <BookMark
          status={user.bookmark}
          onClick={() => onToggleBookMark(user._id)}
        />
      }
    },
    delete: { component: "delete" }
  }
  return (
    <table className="table">
      <TableHeader {...{ onSort, selectedSort, columns }} />
      <TableBody {...{ columns, data: users }} />
    </table>
  )
}
UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  onToggleBookMark: PropTypes.func.isRequired
}
export default UsersTable
