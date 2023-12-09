import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';

export default function SelectSmall() {
    const getCurrentYear = () => {
        var currentYear = new Date().getFullYear();
        return currentYear;
    }
    
    const [year, setAge] = React.useState(getCurrentYear);

    const getYears = () => {
        let options = [];
        for (var i = 2020; i < 2030; i++) {
            options.push(i);
        }
        return options;
    };

    const [years, setYears] = React.useState(getYears());

    const handleChange = (event) => {
        setAge(event.target.value);
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
                    <em>{ getCurrentYear() }</em>
                </MenuItem>
                {

                    years.map((year) => {
                        return (
                            <Link to={year}>
                                <MenuItem value={year}>{year}</MenuItem>
                            </Link>
                        )
                    })
                }
            </Select>
        </FormControl>
    );
}
