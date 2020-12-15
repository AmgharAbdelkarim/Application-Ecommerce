import React, { SyntheticEvent } from 'react';
import Button from '@material-ui/core/Button';

interface Props {
  clickHandler?: ((event:  SyntheticEvent) => void) | undefined;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  [key: string]: any;
}

const ButtonField = ({ type, children, clickHandler , ...otherProps }: Props) => {
  return (
    <Button type={type} onClick={clickHandler} {...otherProps} >
      {children}
    </Button>
  );
};

export default ButtonField;
