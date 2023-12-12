import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function Tags({categoryList, saveData}) {
  return (
    <Stack spacing={3} sx={{ minWidth: '100%' }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={categories}
        getOptionLabel={(option) => option.label}
        filterSelectedOptions
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
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Categorias"
          />
        )}
      />
    </Stack>
  );
}

const categories = [
  { id: 'nubank', label: 'Nubank', color: '#820AD1', icon: '' },
  { id: 'rico', label: 'Rico', color: '#FE5200', icon: '' },
  { id: 'gastos-fixos', label: 'Gastos fixos', color: '#c7a839', icon: 'FaceIcon' },
  { id: 'gastos-variaveis', label: 'Gastos variáveis', color: '#c739a2', icon: '' }
];
