import React from 'react';
import TextInput from '../../components/inputField';
import PasswordInput from '../../components/inputField/password';
import ButtonField from '../../components/Button';
import { Formik, FormikProps, Form } from 'formik';

interface InitialValues {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  password: string;
}
interface Props {
  submit: any;
  history: any;
  [key: string]: any;
}
const LoginPage = ({ submit, history }: Props) => {
  const initialValues: InitialValues = {
    email: 'amghar.abdelkarim1@gmail.com',
    firstName: 'amghar',
    lastName: 'abdelkarim',
    address: 'centre bni ayat azilal',
    password: 'saham@135ç',
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          submit({
            user: {
              email: values.email,
              password: values.password,
              firstName: values.firstName,
              lastName: values.lastName,
              address: values.address,
            },
            history,
          });
        }}
      >
        {(props: FormikProps<InitialValues>) => {
          return (
            <Form>
              <TextInput label="email" name="email" {...props} />
              <TextInput label="text" name="firstName" {...props} />
              <TextInput label="text" name="lastName" {...props} />
              <TextInput label="text" name="address" {...props} />
              <PasswordInput {...props} />
              <ButtonField type="submit">Sign UP</ButtonField>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginPage;
