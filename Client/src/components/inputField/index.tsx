import React from 'react';
import TextField from '@material-ui/core/TextField';
interface Props {
  label: string;
  id?: string;
  value?: string;
  name: string;
  [key: string]: any;
}

const InputField = (props: Props) => {
  const { values, handleChange, handleBlur, label, name } = props;
  return (
    <TextField
      onChange={handleChange}
      onBlur={handleBlur}
      label={label}
      variant="outlined"
      value={values[name]}
      name={name}
    />
  );
};

export default InputField;
