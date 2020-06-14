import React from 'react';
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

function Drivers() {
  return (
    <div>
      <Paper>
        <Box p={2} m={0} display="flex" alignItems="center">
          <Box component="h1" p={0} m={0} flex={1}>
            Motoristas
          </Box>
          <TextField id="filled-basic" label="Nome" variant="filled" />
        </Box>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Telefone</TableCell>
                <TableCell align="right">Pergunta</TableCell>
                <TableCell align="right">Resposta</TableCell>
                <TableCell align="right">Data</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))} */}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default Drivers;
