import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AvatarGroup, Tooltip } from '@mui/material';
import CategoryAvatar from '../CategoryAvatar';

const shownCategories = 4;
const options = [
  { id: '34243234', label: 'Nubank', icon: 'nubank.png' },
  { id: '6666654543', label: 'Rico', icon: 'rico.jpeg' },
  { id: '6222', label: 'Netflix', icon: 'netflix.jpeg' },
  { id: '777', label: 'Prime Video', icon: 'prime-video.jpeg' },
  { id: '7868', label: 'Outros', icon: 'rico.jpeg' },
  { id: '555', label: 'Netflixa', icon: 'netflix.jpeg' },
  { id: '8756', label: 'Ricou', icon: 'rico.jpeg' },
  { id: '465', label: 'Mastercard', icon: 'martercard.png' },
  { id: 'salario', label: 'Salário', icon: 'rico.jpeg' },
];

export default function CategorySelector({setState, childToParent, initialValue }) {
  const [categories, setCategories] = React.useState(initialValue);

  const renderSurplusTootipTitle = () => {
    var inlineCategories = ''
    categories.map((row, order) => {
      if (order >= shownCategories) {
        inlineCategories += row.label + ', '
      }
      return inlineCategories;
    });

    return inlineCategories.substring(0, inlineCategories.length - 2);
  };

  const renderCategoryAvatars = (data, order) => {
    if (order < shownCategories) {
      return <CategoryAvatar key={data.id} image={data.icon} title={data.label} />
    }
  }
  return (
    <Stack spacing={3} sx={{ minWidth: '100%' }}>
      <Autocomplete
        multiple
        value={categories}
        id="tags-outlined"
        options={options}
        getOptionLabel={(option) => option.label}
        filterSelectedOptions
        onChange={(event, newValue) => {
          //childToParent('categories', newValue);
          setCategories(newValue);
          setState(newValue);
        }}
        onKeyUp={
          (e) => {
            if (e.key === "Enter") {
              //saveData()
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
      <AvatarGroup
        renderSurplus={(surplus) =>
          <Tooltip title={renderSurplusTootipTitle()} arrow><span>+{surplus.toString()}</span></Tooltip>}
        total={categories.length}
      >
        {
          categories.map((row, order) => {
            return renderCategoryAvatars(row, order)
          })
        }
      </AvatarGroup>
    </Stack>
  );
}