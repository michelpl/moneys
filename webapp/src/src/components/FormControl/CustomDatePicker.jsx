import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function CustomDatePicker({id, label}) {
  return (
    <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
      <DemoContainer fullWidth components={['DatePicker']}>
        <DatePicker 
          label={label}
          id={id}
          fullWidth={true}
          sx={{width: '100%'}}
         />
      </DemoContainer>
    </LocalizationProvider>
  );
}
