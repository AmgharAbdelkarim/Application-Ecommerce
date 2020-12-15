import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUserWithToken } from '../../store/api';
import { LoginSuccess } from '../../store/saga/user/action';

interface Props {
  Component: Function;
  LoginSuccess: Function;
}

const CheckAuthWithToken = ({ Component, LoginSuccess, ...props }: Props) => {
  const [render, setRender] = useState(false);
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token)
      getUserWithToken(token).then((response) => {
        const {
          email,
          lastName,
          firstName,
          password,
          address,
          cart,
        } = response.data;

        LoginSuccess({ email, lastName, firstName, password, address, cart });
        setRender(true);
      });
  }, []);
  return <Component {...props} />;
  
};
const mapDispatchToProps = {
  LoginSuccess,
};
export default connect(null, mapDispatchToProps)(CheckAuthWithToken);
