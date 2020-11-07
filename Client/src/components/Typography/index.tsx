import React from 'react';
import Typography from '@material-ui/core/Typography';

const TypographyVariant = ({ variant, children, ...props }: any) => (
  <Typography variant={variant} classes={{ root: props.className }}>
    {' '}
    {children}
  </Typography>
);

export default TypographyVariant;
