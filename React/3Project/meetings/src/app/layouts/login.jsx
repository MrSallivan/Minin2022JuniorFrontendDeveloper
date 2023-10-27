import React, { useState } from "react"
import TextField from "../components/textField"

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" })
  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }
  const handleSubmite = (e) => {
    e.preventDefault()
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmite}>
      <TextField
        label="E-mail"
        name="email"
        value={data.email}
        onChange={handleChange}
      />

      <TextField
        label="Password"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
      />
      <button type="submit">Отправить</button>
    </form>
  )
}

export default Login
