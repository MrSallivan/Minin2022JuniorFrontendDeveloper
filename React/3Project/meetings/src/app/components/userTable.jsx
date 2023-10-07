import React from "react"
import PropTypes from "prop-types"
import User from "./user"

const UserTable = ({ users, onSort, currentSort, ...rest }) => {

	

  return (
    <table className="table">
     
      <tbody>
        {users.map((user) => (
          <User key={user._id} {...rest} {...user} />
        ))}
      </tbody>
    </table>
  )
}
UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  currentSort: PropTypes.object.isRequired,
}
export default UserTable
