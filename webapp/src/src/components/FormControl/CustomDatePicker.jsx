import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function CustomDatePicker({id, initialValue, label}) {
  const [initvalue] = React.useState(initialValue)

  return (
    <LocalizationProvider fullWidth value={'01/02/2024'} dateAdapter={AdapterDayjs}>
      <DemoContainer fullWidth components={['DatePicker']}>
        <DatePicker 
          label={label}
          
          id={id}
          fullWidth={true}
          sx={{width: '100%'}}
          
         >
          {"2000-01-31T12:59-0500"}
          </DatePicker>
      </DemoContainer>
    </LocalizationProvider>
  );
}
