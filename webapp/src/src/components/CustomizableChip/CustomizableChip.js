'use strict'
/* eslint-disable react/prop-types */
import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import { Chip, hexToRgb } from '@mui/material';
import { SketchPicker } from 'react-color';

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, setState] = React.useState({color: '#e310f1'})

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


 const handleChange = (color) => {
    setState({ color: color.hex })
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <FormatColorFillIcon sx={{ color: state.color, marginRight: '20px' }} onClick={handleClick} />
      <Chip label={'TESTE'} sx={{ color: '#fff', backgroundColor: state.color }} />

      <Popover
        id={id}
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
      >
<SketchPicker color={hexToRgb(state.color)} onChange={ handleChange } />
      </Popover>
    </div>
  )
}
