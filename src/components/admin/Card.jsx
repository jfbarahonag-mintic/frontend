import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Modal, TextField } from "@mui/material";
import { Form } from "@mui/material";
import { Typography } from "@mui/material";

import { TableUsers } from "./TableUsers";

const FormModal = React.forwardRef((props, ref) => {
  
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    width: 400,

    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    backgroundColor: 'white'
  };

  React.useImperativeHandle(ref, () => ({
    handleOpen: (open) => {
      setOpen(open);
    },
  }));

  return (
    <Modal
      style={{display:'flex', alignItems:'center', justifyContent:'center'}}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </div>
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
