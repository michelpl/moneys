/* eslint-disable react/prop-types */

import { useState } from "react";
import List from "@mui/material/List";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import ArgonBox from "../Argon/ArgonBox";
import ArgonInput from "../Argon/ArgonInput";
import Icon from "@mui/material/Icon";
import ArgonTypography from "../Argon/ArgonTypography";
import CategoryListItem from "./CategoryListItem";

export default function Autocomplete({ data, item }) {
  const [categories, setCategories] = useState(data);
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
    const filtered = categories.filter(item => item.id !== itemId)
    setList(filtered);
    setCategories(filtered);
  }

  return (
    <Box>
      <ArgonBox p={1} mb={2}>
        <ArgonBox mb={2} lineHeight={1}>
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            Adicionar categorias em: <strong>{item.description}</strong>
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