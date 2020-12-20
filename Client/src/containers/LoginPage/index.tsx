import React from 'react';
import { connect } from 'react-redux';
import FormPage from 'containers/LoginPage/form';
import { LoginRequest } from 'store/user/action';
import { RouteComponentProps } from 'react-router-dom';
interface Props extends RouteComponentProps {
  LoginRequest: Function;
}
const LoginPage = ({ history, LoginRequest }: Props) => {
  return (
    <>
      <div>Login Page</div>
      <FormPage submit={(login : string , password : string)=>LoginRequest( login , password , history )}  />
    </>
  );
};

const mapDispatchToProps = {
  LoginRequest,
};
export default connect(null, mapDispatchToProps)(LoginPage);
