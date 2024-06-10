"use strict";

import React from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import pxToRem from "../../assets/theme/functions/pxToRem";
import IconButton from "@mui/material/IconButton";
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
const shapeStyles = { bgcolor: "primary.main", width: 50, height: 50 };
const shapeCircleStyles = { borderRadius: "4px" };
const rectangle = <Box component="span" sx={shapeStyles} />;
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: "130",
      g: "94",
      b: "228",
      a: "1",
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb });
  };

  render() {

    const styles = reactCSS({
      "default": {
        color: {
          width: pxToRem(14),
          height: pxToRem(14),
          borderRadius: "4px",
          outline: "2px solid",
          outlineColor: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, 0.6)`,
          border: "1px solid #fff",
          padding: "5px",
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
        },
        swatch: {
          padding: "5px",
          background: "#fff",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer",
        },
        popover: {
          position: "absolute",
          zIndex: "2",
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
        },
      },
    });

    return (
      <div>
        <Stack spacing={3} direction="row">
          <FormatColorFillIcon />
        </Stack>
        {this.state.displayColorPicker ? <div style={styles.popover}>
          <div style={styles.cover} onClick={this.handleClose} />
          <SketchPicker color={this.state.color} onChange={this.handleChange} />
        </div> : null}
      </div>
    );
  }
}
export default ColorPicker;