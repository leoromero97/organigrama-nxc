// useForm.ts
import { useState } from 'react'

type Validator<T> = (values: T) => Partial<Record<keyof T, string>>

type UseFormReturn<T> = {
  values: T
  errors: Partial<Record<keyof T, string>>
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (
    submitCallback: (values: T) => void
  ) => (event: React.FormEvent<HTMLFormElement>) => void
}

function useForm<T extends Record<string, any>>(
  initialValues: T,
  validate: Validator<T>
): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }))

    if (validate) {
      const updatedValues = {
        ...values,
        [name]: value
      }

      const validationErrors = validate(updatedValues)
      const fieldError = validationErrors[name as keyof T]

      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: fieldError
      }))
    }
  }

  const handleSubmit =
    (submitCallback: (values: T) => void) =>
      (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        if (validate) {
          const validationErrors = validate(values)
          setErrors(validationErrors)
          if (Object.keys(validationErrors).length === 0) {
            submitCallback(values)
          }
        } else {
          submitCallback(values)
        }
      }

  return {
    values,
    errors,
    handleChange,
    handleSubmit
  }
}

export default useForm
