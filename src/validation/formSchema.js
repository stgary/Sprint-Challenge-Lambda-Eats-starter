import * as yup from 'yup'

const formSchema = yup.object().shape({
  name: yup.string()
    .trim()
    .min(3, 'The name must be at least three characters long')
    .required('Name is a required field'),
  comments: yup.string(),
  size: yup.string().required('The size is a required'),
  crust: yup.string().oneOf('[true], You must select a crust'),
})

export default formSchema