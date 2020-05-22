import * as yup from 'yup'

const formSchema = yup.object().shape({
  name: yup.string()
    .trim()
    .min(3, 'The name must be at least three characters long')
    .required('Name is a required field'),
  comments: yup.string(),
  size: yup.string(),
  crust: yup.string(),
  toppings: yup.string()
})

export default formSchema