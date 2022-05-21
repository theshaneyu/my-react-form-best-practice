import { Field, Form, Formik } from 'formik';
import React from 'react';

import { Button } from '@chakra-ui/react';

import { yupSchema } from '../../lib/yupSchema';
import { ChakraTextField } from './ChakraTextField';
import styles from './styles/ChakraForm.module.css';

export const ChakraForm: React.FC = () => {
  return (
    <>
      <Formik
        initialValues={{ firstName: '', lastName: '' }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
        validationSchema={yupSchema}
      >
        {({ values, errors }) => (
          <>
            <Form>
              <div className={styles.field}>
                <Field
                  name="firstName"
                  component={ChakraTextField}
                  placeholder="First Name"
                />
              </div>

              <div className={styles.field}>
                <Field
                  name="lastName"
                  component={ChakraTextField}
                  placeholder="Last Name"
                />
              </div>

              <Button
                disabled={
                  !values.firstName ||
                  !values.lastName ||
                  !!errors.firstName ||
                  !!errors.lastName
                }
                type="submit"
              >
                submit
              </Button>
            </Form>

            <pre className={styles.values}>
              {JSON.stringify(values, null, 2)}
            </pre>
          </>
        )}
      </Formik>
    </>
  );
};
