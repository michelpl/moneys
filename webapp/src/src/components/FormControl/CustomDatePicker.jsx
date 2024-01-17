import * as React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function CustomDatePicker({ setDate, setParentState, id, initialValue, label }) {
  const [locale] = React.useState('en-gb');
  const [value, setValue] = React.useState(initialValue)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
      <DatePicker 
        label={label} 
        defaultValue={dayjs(value)}
        onChange={(value) =>{
          if (value !== null && value.$d !== undefined && value.$d !== null) {
            setValue(value.$d.toString());
            setDate(value.$d.toString())
            setParentState(id, value.$d.toString())
            return;
          }
          setValue('');
          setDate('');
          setParentState('');
        }}
      />
    </LocalizationProvider>
  );
}