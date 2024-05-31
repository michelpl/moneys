/* eslint-disable react/prop-types */
import * as React from 'react';
import MuiAutocomplete, {autocompleteClasses} from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField';
import Popper from '@mui/material/Popper';
import {styled} from '@mui/material/styles';
import {randomId} from "@mui/x-data-grid-generator";
import { Chip } from "@mui/material";

export default function Autocomplete() {
  return (
    <MuiAutocomplete
      multiple
      id="tags-filled"
      options={categories.map((option) => option.label)}
      defaultValue={[categories[13].label]}
      freeSolo
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip sx={{backgroundColor: categories[index].backgroundColor}} key={randomId()} label={option} {...getTagProps({ index })} />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="filled"
          placeholder="Buscar"
        />
      )}
    />
  );
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const categories = [
  { label: "Despesas fixas", id: "23465633223", backgroundColor: "#FF5733" },
  { label: "Despesas variáveis", id: "e759af68-6a10-4f0d-bf63-64f29a781ac1", backgroundColor: "#3498db" },
  { label: "Alimentação", id: "1c3b1e56-c5d7-4cf1-ae58-ec5bc3f4a47a", backgroundColor: "#2ecc71" },
  { label: "Moradia", id: "96c3c9e4-2917-4791-8772-0df3e3f6d0e6", backgroundColor: "#f1c40f" },
  { label: "Transporte", id: "92ac2b3d-29b0-4693-8353-b0d417f30869", backgroundColor: "#9b59b6" },
  { label: "Saúde", id: "0b4fca21-5747-4854-b8d7-19b5726fd8e5", backgroundColor: "#e74c3c" },
  { label: "Educação", id: "0f3c7981-22b6-4b68-9e05-9c39e8f96b23", backgroundColor: "#3498db" },
  { label: "Lazer", id: "3f132a48-8aa3-46a4-8318-5d788bc8d2fb", backgroundColor: "#1abc9c" },
  { label: "Telecomunicações", id: "b929250e-bd56-40e7-93f1-2e102d1c2c9b", backgroundColor: "#9b59b6" },
  { label: "Energia", id: "8ecf4d4a-3a58-4c7d-91c7-c7154e66dd38", backgroundColor: "#f1c40f" },
  { label: "Água", id: "2b0498e7-f3d1-49bb-9a4b-0b0cb10ef5b7", backgroundColor: "#2ecc71" },
  { label: "Internet", id: "86b6a7a7-b9c2-45f6-ba14-68e701ad5403", backgroundColor: "#9b59b6" },
  { label: "Roupa", id: "e33b5ad1-56db-44b5-8b9f-d63de0d9e507", backgroundColor: "#e74c3c" },
  { label: "Entretenimento", id: "b537e61f-8c9a-4434-9311-b260c9d9a25a", backgroundColor: "#1abc9c" },
  { label: "Investimentos", id: "c684b40a-3a9a-4e11-90d8-1706f0d2b5fc", backgroundColor: "#3498db" },
  { label: "Presentes", id: "d3731987-aa63-4486-84a3-3a94be8c4b88", backgroundColor: "#f1c40f" },
  { label: "Impostos", id: "9f8f929d-89e0-4fb7-85a9-fb7ad7a7cf41", backgroundColor: "#2ecc71" },
  { label: "Seguros", id: "7e0af4b6-5419-4f4b-88fb-13be2c303042", backgroundColor: "#9b59b6" },
  { label: "Outros", id: "efa7e567-51c2-4905-9186-d726df529d20", backgroundColor: "#f1c40f" },
  { label: "Salário", id: "f54a4a94-5aeb-45b7-9881-6b7e60cb90ee", backgroundColor: "#e74c3c" }
]