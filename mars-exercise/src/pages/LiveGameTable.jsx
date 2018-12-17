import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell numeric>Number</TableCell>
            <TableCell numeric>Type</TableCell>
            <TableCell>Question</TableCell>
            <TableCell>Answer 1</TableCell>
            <TableCell>Answer 2</TableCell>
            <TableCell>Answer 3</TableCell>
            <TableCell>Answer 4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" numeric>
                  {row.number}
                </TableCell>
                <TableCell numeric>{row.type}</TableCell>
                <TableCell>{row.question}</TableCell>
                <TableCell>{row.answer1}</TableCell>
                <TableCell>{row.answer2}</TableCell>
                <TableCell>{row.answer3}</TableCell>
                <TableCell>{row.answer4}</TableCell>
              </TableRow>
            );
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