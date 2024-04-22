import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import ColorPicker from "../ColorPicker/ColorPicker";
import {faCheck, faEyeDropper} from "@fortawesome/free-solid-svg-icons";
import pxToRem from "../../assets/theme/functions/pxToRem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function NewCategoryInput() {
    return (
        <Paper
            component="div"
            sx={{ p: '2px 10px', display: 'flex', alignItems: 'center', width: '100%' }}
        >

            <ColorPicker/>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Criar categoria"
                inputProps={{ 'aria-label': 'Create category' }}
            />

            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="secondary" sx={{ p: '10px' }} aria-label="directions">
                <FontAwesomeIcon icon={faCheck} />
            </IconButton>
        </Paper>
    );
}
