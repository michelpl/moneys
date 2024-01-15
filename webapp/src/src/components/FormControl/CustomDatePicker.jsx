import * as React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/de';
import 'dayjs/locale/en-gb';
import 'dayjs/locale/zh-cn';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function CustomDatePicker({ setDate, setParentState, id, initialValue, label }) {
  const [locale] = React.useState('en-gb');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
      <DatePicker
        fullWidth
        label={label}
        defaultValue={dayjs(initialValue)}
        onChange={(e) => {
          if (e != null && e.$d != undefined ) {
            const formated = e.$d.toLocaleDateString('en-gb');
            setDate(formated);
            setParentState(id, formated);
            return;
          }
          setDate('12/12/2020');
         }}
      />
    </LocalizationProvider>
  );
}
