import * as React from 'react';
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
  { id: 'gastos-fixos', label: 'Gastos fixos', color: '#E23738', icon: 'DescriptionIcon' },
  { id: 'gastos-variaveis', label: 'Gastos variáveis', color: '#7747CA', icon: 'PaidIcon'},
  { id: 'supermercado', label: 'Supermercado', color: '#c739a2', icon: 'ShoppingCartIcon' },
  { id: 'farmacia', label: 'Farmácia', color: '#FB7BB8', icon: 'MedicationIcon' },
  { id: 'sacolao', label: 'Sacolão', color: '#50D1B2', icon: 'EggIcon'},
];