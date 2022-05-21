import { FieldProps, getIn } from 'formik';

import { Input } from '@chakra-ui/react';

export const ChakraTextField: React.FC<FieldProps<string>> = ({
  field,
  form,
  ...props
}) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <div>
      <Input {...field} {...props} />
      {errorText && (
        <p style={{ fontSize: 1, color: 'red', marginTop: 3 }}>{errorText}</p>
      )}
    </div>
  );
};
