/* eslint-disable react/prop-types */
import React, { memo, useRef, useState } from "react";
import { Box, Modal } from "@mui/material";
import Typography from "@mui/material/Typography";
import Autocomplete from "./Autocomplete";
import outlined from "assets/theme/components/button/outlined";

export default memo(({ value, onValueChange, stopEditing, description }) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    bgcolor: 'background.paper',
    border: 'none',
    outline: 'none',
    borderRadius: '8px',
    boxShadow: 5,
    p: 3,
  };

  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    stopEditing();
  }
  return (<Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Categorias
      </Typography>
      <Box mt={3}>
        <Autocomplete data={value} item={{description: description}} />
      </Box>
    </Box>
  </Modal>);
});
