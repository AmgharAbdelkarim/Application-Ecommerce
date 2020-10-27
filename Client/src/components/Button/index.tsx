import React from 'react';
import Button from '@material-ui/core/Button';

interface Props {
  clickHandler?: any;
  [key: string]: any;
}

const ButtonField = (props: Props) => {
  const { type, children, clickHandler } = props;
  return (
    <Button type={type} onClick={clickHandler}>
      {children}
    </Button>
  );
};

export default ButtonField;
