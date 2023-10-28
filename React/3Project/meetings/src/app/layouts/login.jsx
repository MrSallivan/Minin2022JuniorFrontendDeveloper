import React, { useEffect, useState } from "react"
import TextField from "../components/textField"
import { validator } from "../utils/validator"

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" })
  const [errors, setErrors] = useState({})

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const validatorConfig = {
    email: {
      isRequared: { message: "Электронная почта обязательна для заполнения" }
    },
    password: {
      isRequared: { message: "Электронная почта обязательна для заполнения" }
    }
  }

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmite = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmite}>
      <TextField
        label="E-mail"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />

      <TextField
        label="Password"
        type="password"
        name="password"
        value={data.password}
        error={errors.password}
        onChange={handleChange}
      />
      <button type="submit">Отправить</button>
    </form>
  )
}

export default Login
