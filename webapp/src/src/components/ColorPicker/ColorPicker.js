'use strict'

import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import { Icon } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import {faMessage} from "@fortawesome/free-regular-svg-icons";
import pxToRem from "../../assets/theme/functions/pxToRem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEyeDropper} from "@fortawesome/free-solid-svg-icons";
import IconButton from "@mui/material/IconButton";
import rgba from "../../assets/theme/functions/rgba";

const shapeStyles = { bgcolor: 'primary.main', width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: '50%' };
const rectangle = <Box component="span" sx={shapeStyles} />;
const circle = (
    <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);

class ColorPicker extends React.Component {
    state = {
        displayColorPicker: false,
        color: {
            r: '130',
            g: '94',
            b: '228',
            a: '1',
        },
    };

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        this.setState({ color: color.rgb })
    };

    render() {

        const styles = reactCSS({
            'default': {
                color: {
                    width: pxToRem(14),
                    height: pxToRem(14),
                    borderRadius: '50%',
                    outline: '2px solid',
                    outlineColor: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, 0.6)`,
                    border: '1px solid #fff',
                    padding: '5px',
                    background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
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
                    zIndex: '2',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
            },
        });

        return (
            <div>
                <Stack spacing={3} direction="row">
                    <IconButton
                        title={'Cor'}
                        onClick={this.handleClick}
                        aria-label="Select color"
                        style={styles.color}
                        sx={{
                            height: styles.height,
                    }}
                    >
                    </IconButton>
                </Stack>
                {this.state.displayColorPicker ? <div style={styles.popover}>
                    <div style={styles.cover} onClick={this.handleClose} />
                    <SketchPicker color={this.state.color} onChange={this.handleChange} />
                </div> : null}
            </div>
        )
    }
}

export default ColorPicker