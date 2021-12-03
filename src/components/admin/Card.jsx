import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Modal, TextField } from "@mui/material";
import { Form } from "@mui/material";
import { Typography } from "@mui/material";

import { TableUsers } from "./TableUsers";

//TODO: Rename this Component
function Card({ type, titles, rows }) {
  const formModalRef = React.useRef();

  const handleClick = () => {
    formModalRef.current.handleOpen(true);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <FormModal ref={formModalRef} />
      <Box display="flex" justifyContent="flex-end" mb="1rem">
        <Button variant="contained" onClick={handleClick}>
          {`Crear ${type}`}
        </Button>
      </Box>
      <TableUsers titles={[...titles, ""]} rows={rows} />
    </div>
  );
}

const FormModal = React.forwardRef((props, ref) => {
  
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: '100%',
    height: '90%',
    bgcolor: "white",
    // border: "2px solid #000",
    // boxShadow: 24,
    // p: 4,
  };

  React.useImperativeHandle(ref, () => ({
    handleOpen: (open) => {
      setOpen(open);
    },
  }));

  return (
    <Modal
      style={style}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box component="form" display="flex" flexDirection="column" color="white">
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </Box>
    </Modal>
  );
});

export { Card };
