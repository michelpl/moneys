import Box from '@mui/material/Box';
import { Input, InputBase } from '@mui/material';
import PropTypes from "prop-types";
import { BorderColor } from '@mui/icons-material';
import { useState } from 'react';


export default function UnderlineTextField({ initialValue }) {
  const [borderColor, setBorderColor] = useState(initialValue ? '#fff' : '#ededed');
  const [value, setValue] = useState('');

  const changeBorderColor = (inputValue) => {
    if (inputValue != '') {
      setBorderColor('#fff');
      return;
    }
    setBorderColor('#ededed');
  }

  return (
    <Box>
      <InputBase
          sx={
            {
              borderBottomColor: borderColor,
              borderLeftColor: '#fff',
              borderRightColor: '#fff',
              borderTopColor: '#fff',
              borderRadius: 0
            }
          }
          onChange={(e) => {
            console.log('onchange', e.target.value)
          }}
          onBlur={(e) => {
            console.log('onblur', e.target.value)
            changeBorderColor(e.target.value);
          }}
          className='underlineTextField'
          defaultValue={initialValue}
        />
    </Box>
  );
}

// Typechecking props for the MoneyTextField
UnderlineTextField.propTypes = {
  initialValue: PropTypes.string,
};



