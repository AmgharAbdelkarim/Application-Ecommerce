import { makeStyles , Typography } from '@material-ui/core';
import styled from 'styled-components';


export const StyledTypography = styled(Typography)`
cursor: pointer;
`

export const useStyles = makeStyles({
    appBarRoot: {
      color: 'black',
      backgroundColor : 'white',
    },
    toolbarRoot: {
      justifyContent : 'space-between'
    },
     });