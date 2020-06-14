import React, { useState } from 'react';
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  TextField,
} from '@material-ui/core';
import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';

function Drivers() {
  const [name, setName] = useState('');
  const { data: answers } = useSWR(
    name ? `http://localhost:8080/answers?name=${name}` : null,
    fetcher
  );

  return (
    <div>
      <Paper>
        <Box p={2} m={0} display="flex" alignItems="center">
          <Box component="h1" p={0} m={0} flex={1}>
            Motoristas
          </Box>
          <TextField
            id="filled-basic"
            label="Nome"
            variant="filled"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Box>
        {!answers && (
          <Box display="flex" alignItems="center" justifyContent="center" p={2}>
            <h2>Faça uma pesquisa pelo nome do motorista</h2>
          </Box>
        )}
        {answers && (
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
        )}
      </Paper>
    </div>
  );
}

export default Drivers;
