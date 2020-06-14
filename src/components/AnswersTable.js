import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';

function AnswersTable({ answers }) {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Telefone</TableCell>
            <TableCell>Pergunta</TableCell>
            <TableCell>Resposta</TableCell>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {answers.map((answer) => (
            <TableRow key={answer.phone + answer.date}>
              <TableCell component="th" scope="row">
                {answer.phone}
              </TableCell>
              <TableCell>{answer.question}</TableCell>
              <TableCell>{answer.answer}</TableCell>
              <TableCell>
                {new Date(answer.date * 1000).toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AnswersTable;
