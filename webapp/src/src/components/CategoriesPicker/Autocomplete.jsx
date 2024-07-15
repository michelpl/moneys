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
import CategoryListItem from "./CategoryListItem";

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
  }, 
  { 
    label: "Alimentação", 
    id: "1c3b1e56-c5d7-4cf1-ae58-ec5bc3f4a47a", 
    backgroundColor: "#2ecc71" 
  }, 
  {
    label: "Moradia",
    id: "96c3c9e4-2917-4791-8772-0df3e3f6d0e6",
    backgroundColor: "#f1c40f",
  }
  ];

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

  const handleDelete = (itemId) => {
    const filtered = list.filter(item => item.id !== itemId)
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
          return (<CategoryListItem key={value.id} handleDelete={handleDelete} handleToggle={handleToggle} value={value} />);
        })}
      </List>
    </Box>);
}