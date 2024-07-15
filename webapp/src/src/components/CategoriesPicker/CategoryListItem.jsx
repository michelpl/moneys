/* eslint-disable react/prop-types */
import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import CustomizableChip from "components/CustomizableChip/CustomizableChip";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function CategoryListItem({value, handleDelete, handleToggle}) {
    const labelId = `checkbox-list-label-${value.label}`;
    return (
        <ListItem
            sx={{
              width: "100%", marginBottom: "5px"
            }}
            key={value.id}

            secondaryAction={
              
                <IconButton 
                
                onClick={() => {handleDelete(value.id)}} 
                variant={'small'} edge="end" color={value.backgroundColor} aria-label="comments" sx={{ marginRight: "15px" }}
                                  
                >
                  <DeleteForeverIcon />
                </IconButton>
              
            }
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
          </ListItem>
    )
}