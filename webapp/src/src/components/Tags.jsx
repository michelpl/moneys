import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function Tags({ categoryList, saveData }) {
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
  { id: 'nubank', label: 'Nubank', backgroundColor: '#820AD1', color: 'text.primary', icon: '' },
  { id: 'rico', label: 'Rico', backgroundColor: '#FE5200', color: 'text.primary', icon: '' },
  { id: 'gastos-fixos', label: 'Gastos fixos', backgroundColor: '#E23738', color: 'text.primary', icon: 'DescriptionIcon' },
  { id: 'gastos-variaveis', label: 'Gastos variáveis', backgroundColor: '#7747CA', color: 'text.primary', icon: 'PaidIcon' },
  { id: 'supermercado', label: 'Supermercado', backgroundColor: '#c739a2', color: 'text.primary', icon: 'ShoppingCartIcon' },
  { id: 'farmacia', label: 'Farmácia', backgroundColor: '#FB7BB8', color: 'text.primary', icon: 'MedicationIcon' },
  { id: 'sacolao', label: 'Sacolão', backgroundColor: '#50D1B2', color: 'text.primary', icon: 'EggIcon' },
  { id: 'itau', label: 'Itaú', backgroundColor: '#c739a2', color: 'text.primary', icon: '' },
  { id: 'assinaturas', label: 'Assinaturas', backgroundColor: '#c739a2', color: 'text.primary', icon: '' },
  { id: 'investimentos', label: 'Investimentos', backgroundColor: '#c739a2', color: 'text.primary', icon: '' },
  { id: 'salario', label: 'Salário', backgroundColor: 'success.main', color: 'text.secondary', icon: '' },
  { id: 'renda-extra', label: 'Renda extra', backgroundColor: 'success.main', color: 'text.secondary', icon: '' },
];