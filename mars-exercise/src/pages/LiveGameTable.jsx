import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import LiveGameTableRow from '../components/LiveGameTableRow';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

function LiveGameTable(props) {
    const { classes } = props;
    const titles = props.data;
    console.log(titles);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <LiveGameTableRow value={
            titles
          } />
        </TableHead>
        <TableBody>
          {props.data.map(row => {
            return(
              <LiveGameTableRow value={row} />
            )
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

LiveGameTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export const Comp1 = withStyles(styles)(LiveGameTable);