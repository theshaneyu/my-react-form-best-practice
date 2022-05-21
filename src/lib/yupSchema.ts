import * as yup from 'yup';

export const yupSchema = yup.object({
  firstName: yup
    .string()
    .required('First name can not be empty')
    .max(10, 'Length can not exceed 10 characters'),
  lastName: yup
    .string()
    .required('Last name can not be empty')
    .max(10, 'Length can not exceed 10 characters'),
});
