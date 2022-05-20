import { Button } from 'antd';
import { Field, Form, Formik } from 'formik';
import React from 'react';

import styles from './styles/AntdForm.module.css';
import { TextField } from './TextField';

export const AntdForm: React.FC = () => {
  return (
    <>
      <Formik
        initialValues={{ firstName: '', lastName: '' }}
        onSubmit={(values, actions) => {
          console.log('form values =>', values);

          actions.resetForm();
        }}
      >
        {({ values }) => (
          <>
            <Form className={styles.form}>
              <Field
                name="firstName"
                component={TextField}
                placeholder="First Name"
                className={styles.field}
              />

              <Field
                name="lastName"
                component={TextField}
                placeholder="Last Name"
                className={styles.field}
              />

              <Button type="primary" htmlType="submit">
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
