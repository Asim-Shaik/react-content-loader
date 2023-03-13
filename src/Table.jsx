import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Skeleton,
  TableContainer,
  TableHead,
  keyframes,
} from "@mui/material";
const TableContent = () => {
    const increaseWidth = keyframes`
    0% {
      width:45%;
    }
    50% {
      width: 50%;
    }
    100% {
      width: 45%;
    }
  `;
  const skeletonRows = [1, 2, 3, 4, 5];
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: 780,
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {skeletonRows.map((row) => (
            <TableRow key={row}>
              <TableCell>
            sample Name
              </TableCell>
              <TableCell>
              sample email           </TableCell>
              <TableCell>
              sample phone           </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableContent;
