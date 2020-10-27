import React from 'react';
import { connect } from 'react-redux';
import FormPage from './form';
import { LoginRequest } from '../../store/saga/user/action';
interface Props {
  history: any;
  LoginRequest: any;
}
const LoginPage = ({ history, LoginRequest }: Props) => {
  return (
    <>
      <div>Login Page</div>
      <FormPage submit={LoginRequest} history={history} />
    </>
  );
};

const mapDispatchToProps = {
  LoginRequest,
};
export default connect(null, mapDispatchToProps)(LoginPage);
