import { Field, Form, Formik } from 'formik';
import React from 'react';

export const ChakraForm: React.FC = () => {
  return (
    <>
      <Formik
        initialValues={{ firstName: '', lastName: '' }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        {() => (
          <Form>
            <Field />
            <Field />
          </Form>
        )}
      </Formik>
    </>
  );
};
