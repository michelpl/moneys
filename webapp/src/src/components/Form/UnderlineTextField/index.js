import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Input, InputBase } from '@mui/material';
import PropTypes from "prop-types";

export default function UnderlineTextField({value}) {
  return (
    <Box>
      <InputBase 
        sx={
          {
            borderBottomColor: '#ededed',
            borderLeftColor: '#fff',
            borderRightColor: '#fff',
            borderTopColor: '#fff',
            borderRadius: 0
          }
        }
        
        className='underlineTextField'
        defaultValue={value}
      />
    </Box>
  );
}

// Typechecking props for the MoneyTextField
UnderlineTextField.propTypes = {
  value: PropTypes.string,
};