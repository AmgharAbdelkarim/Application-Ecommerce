import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';

interface Props {
  clickHandler?: any;
  [key: string]: any;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridContainer: {
      background: '#1F2732',
      height: '100%',
    },
    gridHeader: {
      position: 'fixed',
      top: 0,
      left: 'auto',
      right: '0',
      width: '100%',
      zIndex: 9999,
    },
    gridBody: {
      position: 'inherit',
      marginTop: '64px',
    },
    gridFooter: {
      position: 'inherit',
      background: '#45a29e',
    },
  }),
);

const LayoutPage = (props: Props) => {
  const { header, body, Footer } = props;
  const styles = useStyles();
  return (
    <Grid container alignContent="space-between" classes={{ root: styles.gridContainer }}>
      <Grid classes={{ root: styles.gridHeader }} xs={12} item>
        {header}
      </Grid>
      <Grid classes={{ root: styles.gridBody }} xs={12} item>
        {body}
      </Grid>
      <Grid classes={{ root: styles.gridFooter }} xs={12} item>
        {<Footer />}
      </Grid>
    </Grid>
  );
};

export default LayoutPage;
