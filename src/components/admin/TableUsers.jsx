import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import CircleIcon from "@mui/icons-material/Circle";
import { IconButton } from "@mui/material";

function UsersTableRow({ row }) {
  return (
    <TableRow>
      <TableCell align="center">
        <CircleIcon color={row.status === 1 ? "success" : "error"} />
      </TableCell>
      <TableCell align="center">{row.name} </TableCell>
      <TableCell align="center">{row.email} </TableCell>
      <TableCell align="center">{row.role} </TableCell>
      <TableCell>
        <IconButton style={{ cursor: "pointer" }}>
          <EditIcon id={row} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

function TableUsers({ titles, rows }) {
  const [content, setContent] = React.useState(rows || []);

  React.useEffect(() => {
    setContent(rows);
  }, [rows]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {titles.map((title, idx) => (
              <TableCell
                align="center"
                key={idx}
                style={{ fontWeight: "bold" }}
              >
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {content.map((row) => (
            <UsersTableRow row={row} key={row.email} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { TableUsers }
