'use strict'
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import rgba from 'assets/theme/functions/rgba'
import { Chip } from "@mui/material";

export default function CustomizableChip({ label, initialColor }) {
  // const color = useState();
  const [state, setState] = useState({
    displayColorPicker: false,
    color: initialColor,
  });

  const handleClick = () => {
    setState({ color: state.color, displayColorPicker: !state.displayColorPicker })
  };

  const handleClose = () => {
    setState({ color: state.color, displayColorPicker: false })
  };

  const handleChange = (color) => {
    console.log(`${state.color.r}${state.color.g}${state.color.b}${state.color.a}`)
    setState({ color: color.rgb,  displayColorPicker: state.displayColorPicker })
  };

  const styles = reactCSS({
    'default': {
      color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: `rgba(${state.color.r}, ${state.color.g}, ${state.color.b}, ${state.color.a})`,
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '999',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '-100px',
      },
    },
  });
    return (
      <div>
        <FormatColorFillIcon sx={{ color: styles.color.background, marginBottom: '-7px', marginRight: '20px' }} onClick={handleClick} />
        <Chip label={label} sx={{ color: '#fff', backgroundColor: styles.color.background }} />

        {state.displayColorPicker ? <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <SketchPicker color={state.color} onChange={handleChange} />
        </div> : null}
      </div>
    )
}

