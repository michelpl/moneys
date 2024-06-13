/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */

import React, { memo, useRef, useState } from "react";
import { Box, Modal } from "@mui/material";
import Typography from "@mui/material/Typography";
import Autocomplete from "./Autocomplete";

export default memo(({ value, onValueChange, stopEditing }) => {
  const isHappy = (value) => value === "Happy";

  const [ready, setReady] = useState(false);
  const refContainer = useRef(null);

  const unselected = {
    paddingLeft: 10, paddingRight: 10, border: "1px solid transparent", padding: 4,
  };

  const selected = {
    paddingLeft: 10, paddingRight: 10, border: "1px solid lightgreen", padding: 4,
  };

  const happyStyle = isHappy(value) ? selected : unselected;
  const sadStyle = !isHappy(value) ? selected : unselected;
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    bgcolor: 'background.paper',
    border: '1px solid #fff',
    borderRadius: '8px',
    boxShadow: 5,
    p: 3,
  };

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <Autocomplete categorizedItem={'Descrição da transação'} />
      </Box>
    </Box>
  </Modal>);
});
