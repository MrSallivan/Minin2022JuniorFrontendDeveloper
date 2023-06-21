import React, { useState } from "react"
import api from "./api"
import Users from "./components/users"
import SearchStatus from './components/searchStatus'

const App = () => {

	const [users, setUsers] = useState(api.users.fetchAll())


	return (
		<>
			<SearchStatus length={users.length} />
			<Users onDelete={handleDelete} onToggleBookMark={handleToggleBookMark} users={users} />
		</>
	)
}

export default App