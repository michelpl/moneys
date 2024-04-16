/* eslint-disable react/prop-types */
import * as React from 'react';
import Autocomplete, {autocompleteClasses} from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField';
import Popper from '@mui/material/Popper';
import {styled} from '@mui/material/styles';
import CategoryChip from "./CategoryChip";
import {randomId} from "@mui/x-data-grid-generator";

const StyledPopper = styled(Popper)({
    [`& .${autocompleteClasses.listbox}`]: {
        boxSizing: 'border-box',
        backgroundColor: "#fff",
        '& ul': {
            padding: 0,
            margin: 0,
            backgroundColor: "#fff"
        },
    },
});

export default function CategoriesPicker() {
    return (
        <Autocomplete
            multiple
            id="tags-outlined"
            noOptionsText="Sem opções restantes"
            options={options}
            PopperComponent={StyledPopper}
            getOptionLabel={(option) => option.title}
            //defaultValue={initialValueIndex}
            filterSelectedOptions
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <CategoryChip key={randomId()} data={option} tagProps={{...getTagProps({index})}} />
                ))
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    sx={{width: '100%'}}
                />
            )}
        />
    );
}

const options = [
    { key:randomId(), title: 'Gastos variáveis', backgroundColor: "#fc6b28", fontColor: "#fff", img: 'logos/rico.png'},
    { key:randomId(), title: 'Gastos fixos', backgroundColor: "#fc6b28", fontColor: "#fff", img: 'logos/rico.png'}
];