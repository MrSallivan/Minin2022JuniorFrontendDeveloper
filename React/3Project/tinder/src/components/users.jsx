import React, { useState } from "react"
import api from "../api"

const Users = () => {

	const [users, setUsers] = useState(api.users.fetchAll())
	const handleDelete = (userId) => { }
	const renderPhrase = (number) => { }

	return (
		<>
			<span className={"badge bg-" + (users.length > 0 ? "primary" : "danger")}>13 дебилов в сети</span>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Имя</th>
						<th scope="col">Качества</th>
						<th scope="col">Профессия</th>
						<th scope="col">Встретился, раз</th>
						<th scope="col">Оценка</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user._id}>
							<td>{user.name}</td>
							<td>{user.qualities.map((item) => (<span className={"badge m-1 bg-" + item.color} key={item._id}>{item.name}</span>))}</td>
							<td>{user.profession.name}</td>
							<td>{user.completedMeetings}</td>
							<td>{user.rate}</td>
							<td><button type="button" className="btn btn-danger">delete</button></td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}

export default Users