import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function Tags({categoryList, saveData}) {
  return (
    <Autocomplete
      width='100'
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
  { id: 'nubank', label: 'Nubank', color: '#820AD1', icon: '' },
  { id: 'rico', label: 'Rico', color: '#FE5200', icon: '' },
  { id: 'gastos-fixos', label: 'Gastos fixos', color: '#c7a839', icon: 'FaceIcon' },
  { id: 'gastos-variaveis', label: 'Gastos variáveis', color: '#c739a2', icon: '' }
];
