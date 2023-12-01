import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function Tags({categoryList, saveData}) {
  return (
    <Autocomplete
      width='100%'
      multiple
      id="tags-outlined"
      options={categories}
      getOptionLabel={(option) => option.label}
      onChange={(event, newValue) => {
        categoryList(newValue);
      }}
      onKeyUp={
        (e) => {
            if (e.key === "Enter") {
                saveData()
            }
        }
      }
      filterSelectedOptions
      renderInput={(params) => (
        <TextField
          {...params}
          label="Categorias"
          placeholder="Categorias"
        />
      )}
    />
  );
}

const categories = [
  { id: 123, label: 'Nubank', color: '#9B02D5' },
  { id: 456, label: 'Rico', color: '#FF5200' },
  { id: 777, label: 'Gastos fixos', color: '#c7a839' },
  { id: 777, label: 'Gastos variáveis', color: '#c739a2' }
];
