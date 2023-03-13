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
const SkeletonTable = () => {
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
                <Skeleton
                  variant="rounded"
                  width={40}
                  height={10}
                  sx={{
                    bgcolor: "gray",
                    animation: `${increaseWidth} 2s ease-in-out infinite`,
                  }}
                />
              </TableCell>
              <TableCell>
                <Skeleton
                  variant="rounded"
                  width={40}
                  height={10}
                  sx={{
                    bgcolor: "gray",
                    animation: `${increaseWidth} 2s ease-in-out infinite`,
                  }}
                />{" "}
              </TableCell>
              <TableCell>
                <Skeleton
                  variant="rounded"
                  width={40}
                  height={10}
                  sx={{
                    bgcolor: "gray",
                    animation: `${increaseWidth} 2s ease-in-out infinite`,
                  }}
                />{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SkeletonTable;
