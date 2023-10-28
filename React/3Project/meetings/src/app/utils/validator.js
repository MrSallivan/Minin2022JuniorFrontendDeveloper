export function validator(data, config) {
  const errors = {}

  function validate(validateMethod, data, config) {
    switch (validateMethod) {
      case "isRequared":
        if (data.trim() === "") return config.message
        break

      default:
        break
    }
  }

  for (const fieldName in data) {
    for (const ValidateMethod in config[fieldName]) {
      const error = validate(
        ValidateMethod,
        data[fieldName],
        config[fieldName][ValidateMethod]
      )
      if (error) {
        errors[fieldName] = error
      }
    }
  }
  return errors
}
