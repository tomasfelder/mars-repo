import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const LiveGameTableRow = (props) =>  {
      return (
        <TableRow key={props.value}>
                <TableCell component="th" scope="row" numeric>
                  {props.value.number}
                </TableCell>
                <TableCell numeric>{props.value.type}</TableCell>
                <TableCell>{props.value.question}</TableCell>
                <TableCell>{props.value.answer1}</TableCell>
                <TableCell>{props.value.answer2}</TableCell>
                <TableCell>{props.value.answer3}</TableCell>
                <TableCell>{props.value.answer4}</TableCell>
        </TableRow>
      )
  }

  export default LiveGameTableRow;