import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

import { TableUsers } from "./TableUsers";

//TODO: Rename this Component
function Card({ type, titles, rows }) {
  return (
    <div style={{ padding: "1rem" }}>
      <Box display="flex" justifyContent="flex-end" mb="1rem">
        <Button variant="contained">{`Crear ${type}`}</Button>
      </Box>
      <TableUsers titles={[...titles, '']} rows={rows} />
    </div>
  );
}

export { Card };
