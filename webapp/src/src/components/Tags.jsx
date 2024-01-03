import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AvatarGroup, Tooltip } from '@mui/material';
import CategoryAvatar from './CategoryAvatar';

const categories = [
  { id: '34243234', label: 'Nubank', image: 'nubank.png' },
  { id: '6666654543', label: 'Rico', image: 'rico.jpeg' },
  { id: '6222', label: 'Netflix', image: 'netflix.jpeg' },
  { id: '777', label: 'Prime Video', image: 'prime-video.jpeg' },
  { id: '7868', label: 'Rico', image: 'rico.jpeg' },
  { id: '555', label: 'Netflix', image: 'netflix.jpeg' },
  { id: '8756', label: 'Rico', image: 'rico.jpeg' },
  { id: '465', label: 'Mastercard', image: 'martercard.png' },
  { id: '38', label: 'Visa', image: 'visa.svg' },

];
const shownCategories = 4;

export default function Tags({ categoryList, saveData }) {

  const renderCategoryAvatars = (data, order) => {
    if (order < shownCategories) {
      return <CategoryAvatar key={data.id} image={ data.image } title={data.label} />
    }
  }
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


const renderSurplusTootipTitle = () => {
  var inlineCategories = ''
  categories.map((row, order) => {
    if (order >= shownCategories) {
      inlineCategories += row.label + ', '
    }
  });

  return inlineCategories.substring(0, inlineCategories.length - 2);
};