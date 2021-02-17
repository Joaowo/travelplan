import { FieldProps } from 'formik'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  placeholder: string
}

const InputField = ({ field, form: _, ...props }: FieldProps & InputProps) => {
  return (
    <div>
      <input {...field} {...props} />
    </div>
  )
}

export default InputField
