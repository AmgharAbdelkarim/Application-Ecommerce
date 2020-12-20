import React from 'react';
import TextInput from '../../components/inputField';
import PasswordInput from '../../components/inputField/password';
import ButtonField from '../../components/Button';
import { Formik, FormikProps, Form } from 'formik';
import { Grid } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';

interface InitialValues {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  password: string;
}
interface Props  extends RouteComponentProps {
  submit: Function;
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
              <Grid container>
                <Grid item xs={12}>
                  <TextInput label="email" name="email" {...props} />
                </Grid>
                <Grid item xs={12}>
                  <PasswordInput {...props} label="Password" />
                </Grid>
                <Grid item xs={12}>
                  <PasswordInput {...props} label="Repeat password" />
                </Grid>
                <Grid item xs={12}>
                  <TextInput label="firstName" name="firstName" {...props} />
                </Grid>
                <Grid item xs={12}>
                  <TextInput label="lastName" name="lastName" {...props} />
                </Grid>
                <Grid item xs={12}>
                  <TextInput label="address" name="address" {...props} />
                </Grid>
                <Grid item xs={12}>
                  <TextInput label="City" name="City" {...props} />
                </Grid>
                <Grid item xs={12}>
                  <ButtonField type="submit">Sign UP</ButtonField>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginPage;
