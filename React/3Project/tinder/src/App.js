import React, { useState } from "react"
import api from "./api"
import Users from "./components/users"
import SearchStatus from './components/searchStatus'

const App = () => {
	return (
		<>
			<SearchStatus/>
			<Users />
		</>
	)
}

export default App