import React from 'react';
import TextField from '@material-ui/core/TextField';
interface Props {
  label?: string;
  id?: string;
  [key: string]: any;
  value?: string;
}

const PasswordField = (props: Props) => {
  const { values, handleChange, handleBlur } = props;
  return (
    <TextField
      type="password"
      variant="outlined"
      label="Password"
      name="password"
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default PasswordField;
