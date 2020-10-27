import React from 'react';
import Form from './form';
import { connect } from 'react-redux';
import { SubscribeRequest } from '../../store/saga/user/action';

interface Props {
  history: any;
  SubscribeRequest: any;
}
const SubscribePage = ({ history, SubscribeRequest }: Props) => {
  return (
    <>
      <div>Subscribe Page</div>
      <Form submit={SubscribeRequest} history={history} />
    </>
  );
};
const mapDispatchToProps = {
  SubscribeRequest,
};
export default connect(null, mapDispatchToProps)(SubscribePage);
