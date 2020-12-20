import React from 'react';
import { connect } from 'react-redux';
import FormPage from 'containers/LoginPage/form';
import { LoginRequest } from 'store/user/action';
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
