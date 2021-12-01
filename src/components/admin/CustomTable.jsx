import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function CustomTable({ titles, rows }) {
  
  const [content, setContent] = React.useState(rows || []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {titles.map((title, idx) => (
              <TableCell align="justify" key={title}>
                {title}
                {/*&nbsp;*/}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {content.map((row, idx /* iterate by objects */) => (
            <TableRow key={idx}>
              {Object.values(row).map(
                (value, idx /* iterate by values of each object */) => (
                  <TableCell key={value} align="justify">
                    {value}
                  </TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { CustomTable }
