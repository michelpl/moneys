import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';

export default function SelectSmall() {
    const getYears = () => {
        let options = [];
        for (var i = 2020; i < 2030; i++) {
            options.push(i);
        }
        return options;
    };
    const [yearsList] = React.useState(getYears());

  const [year, setYear] = React.useState('');

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Ano</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={year}
        label="Ano"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Selecione</em>
        </MenuItem>
        {
            yearsList.map((year) => {
                return (
                <MenuItem key={ year }  value={ year }>
                    <Link to={'year/' + year } >{year}</Link>
                </MenuItem>
                )
            })
        }
      </Select>
    </FormControl>
  );
}
