import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Modal, TextField } from "@mui/material";
import { Form } from "@mui/material";
import { Typography } from "@mui/material";
import { Select } from "@mui/material";
import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";

import { TableUsers } from "./TableUsers";

const FormModal = React.forwardRef((props, ref) => {
  
  const [open, setOpen]             = React.useState(false);
  const [name, setName]             = React.useState("");
  const [role, setRole]             = React.useState("editor");
  const [email, setEmail]           = React.useState("");
  const [pswd, setPswd]             = React.useState("");
  const [repeatPswd, setRepeatPswd] = React.useState("");

  const boxStyle = {
    position: "absolute",
    width: 400,
    border: "2px solid rgb(25 118 210)",
    boxShadow: 24,
    p: 4,
    backgroundColor: "white",
  };

  const handleClose = () => setOpen(false);

  const handleChangeRole = (e) => {
    setRole(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    //TODO: check if email (and password?) was already registered
    
    if (pswd !== repeatPswd)
    {
      return
    }

    //all ok
    console.log(name);
    console.log(role);
    console.log(email);
    console.log(pswd);
    console.log(repeatPswd);
  }

  React.useImperativeHandle(ref, () => ({
    handleOpen: (open) => {
      setOpen(open);
    },
  }));

  return (
    <Modal
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={boxStyle}>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <TextField
            margin="normal"
            id="outlined-name-input"
            label="Nombre completo"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <InputLabel>Rol</InputLabel>
          <Select
            labelId="rol"
            id="role"
            value={role}
            label="Rol"
            onChange={handleChangeRole}
          >
            <MenuItem value={`admin`}>Admin</MenuItem>
            <MenuItem value={`editor`}>Editor</MenuItem>
          </Select>

          <TextField
            margin="normal"
            id="outlined-email-input"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            margin="normal"
            id="outlined-password-input"
            label="Contraseña"
            type="password"
            autoComplete="current-password"
            value={pswd}
            onChange={(e) => {
              setPswd(e.target.value);
            }}
          />
          <TextField
            margin="normal"
            id="outlined-confirm-password-input"
            label="Confirmar Contraseña"
            type="password"
            autoComplete="current-password"
            value={repeatPswd}
            onChange={(e) => {
              setRepeatPswd(e.target.value);
            }}
          />
          <Button variant="contained" type="submit">
            Crear
          </Button>
        </form>
      </Box>
    </Modal>
  );
});

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

export { Card };
