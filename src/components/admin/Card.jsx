import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Modal } from "@mui/material";
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

  // React.useEffect(() => {
  //   console.log(2);
  // }, [open])

  React.useImperativeHandle(ref, () => ({
    handleOpen: (open) => {
      setOpen(open);
    },
  }));

  return (
    <Modal open={open} onClose={handleClose}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
      </Typography>
    </Modal>
  );
});

export { Card };
