import React from 'react';
import TextInput from 'components/inputField';
import PasswordInput from 'components/inputField/password';
import ButtonField from 'components/Button';
import { Formik, FormikProps, Form } from 'formik';

interface InitialValues {
  email: string;
  password: string;
}

interface Props   {
  submit: Function;
}
const FormPage = ({ submit }: Props) => {
  const initialValues: InitialValues = {
    email: 'amghar.abdelkarim1@gmail.com',
    password: 'saham@135ç',
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          submit({ login: values.email, password: values.password });
        }}
      >
        {(props: FormikProps<InitialValues>) => {
          return (
            <Form>
              <TextInput label="email" name="email" {...props} />
              <PasswordInput {...props} />
              <ButtonField type="submit">Sign IN</ButtonField>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default FormPage ;
