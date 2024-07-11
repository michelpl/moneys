/* eslint-disable react/prop-types */

import { useState } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CustomizableChip from "../CustomizableChip/CustomizableChip";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";
import { Directions, SearchRounded } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import ArgonBox from "../Argon/ArgonBox";
import ArgonInput from "../Argon/ArgonInput";
import Icon from "@mui/material/Icon";
import ArgonTypography from "../Argon/ArgonTypography";

export default function Autocomplete({ categorizedItem }) {

  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
  const categories = [{
    label: "Despesas fixas",
    id: "23465633223",
    backgroundColor: "#FF5733",
  }, {
    label: "Despesas variáveis",
    id: "e759af68-6a10-4f0d-bf63-64f29a781ac1",
    backgroundColor: "#3498db",
  }, { label: "Alimentação", id: "1c3b1e56-c5d7-4cf1-ae58-ec5bc3f4a47a", backgroundColor: "#2ecc71" }, {
    label: "Moradia",
    id: "96c3c9e4-2917-4791-8772-0df3e3f6d0e6",
    backgroundColor: "#f1c40f",
  }, { label: "Transporte", id: "92ac2b3d-29b0-4693-8353-b0d417f30869", backgroundColor: "#9b59b6" }, {
    label: "Saúde",
    id: "0b4fca21-5747-4854-b8d7-19b5726fd8e5",
    backgroundColor: "#e74c3c",
  }, { label: "Educação", id: "0f3c7981-22b6-4b68-9e05-9c39e8f96b23", backgroundColor: "#3498db" }, {
    label: "Lazer",
    id: "3f132a48-8aa3-46a4-8318-5d788bc8d2fb",
    backgroundColor: "#1abc9c",
  },{ label: "Seguros", id: "7e0af4b6-5419-4f4b-88fb-13be2c303042", backgroundColor: "#9b59b6" }, {
    label: "Outros",
    id: "efa7e567-51c2-4905-9186-d726df529d20",
    backgroundColor: "#f1c40f",
  }, { label: "Salário", id: "f54a4a94-5aeb-45b7-9881-6b7e60cb90ee", backgroundColor: "#e74c3c" }];

  const [list, setList] = useState(categories);
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = value;
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleSearch = (value) => {
    const filtered = categories.filter(item => item.label.toLowerCase().includes(value.toLowerCase()));
    setList(filtered);
  }

  return (
    <Box>
      <ArgonBox p={1} mb={2}>
        <ArgonBox mb={2} lineHeight={1}>
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            Adicionar categorias em: <strong>{categorizedItem}</strong>
          </ArgonTypography>
        </ArgonBox>
        <ArgonInput
          sx={{ border: '1px solid #dfdfdf', borderRadius: '8px' }}
          placeholder="Buscar"
          startAdornment={
            <Icon fontSize="small" style={{ marginRight: "6px" }}>
              search
            </Icon>
          }
          onKeyUp={(e) => {
            handleSearch(e.target.value)
          }}
        />
        <Divider />
      </ArgonBox>
      <List sx={{
        width: "100%", bgcolor: "background.paper", maxHeight: 300, overflowY: "auto", overflowX: "hidden",
      }}>
        {list.map((value) => {
          const labelId = `checkbox-list-label-${value.label}`;

          return (<ListItem
            sx={{
              width: "100%", marginBottom: "5px"
            }}
            key={value.id}

            secondaryAction={(
              <>
                <IconButton variant={'small'} edge="end" color={value.backgroundColor} aria-label="comments" sx={{ marginRight: "15px" }}>
                  <DeleteIcon />
                </IconButton>
              </>
            )}
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={handleToggle(value.id)}
            >
              <ListItemIcon
                sx={{
                  marginX: '5px'
                }}
              >
                <Checkbox
                  edge="start"
                  tabIndex={-1}

                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <IconButton edge="end" aria-label="comments" sx={{ color: value.backgroundColor, marginRight: "5px" }}>
                <CustomizableChip label={value.label} initialColor={value.backgroundColor} />
              </IconButton>
            </ListItemButton>
          </ListItem>);
        })}
      </List>
    </Box>);

}