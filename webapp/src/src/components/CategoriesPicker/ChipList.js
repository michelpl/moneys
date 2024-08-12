/* eslint-disable react/prop-types */
import { memo } from "react";
import { Chip } from "@mui/material";
import { isNullOrUndef } from "chart.js/helpers";

export default memo(({ value, onValueChange, stopEditing }) => {

  if (isNullOrUndef(value)) {
    return;
  }
  const chipList = [];

  value.map((listItem) => {
    chipList.push(
    <>
      <Chip 
        size="small" 
        key={listItem.id} 
        label={listItem.label}
        title={listItem.label}
        sx={{
          backgroundColor: listItem.backgroundColor, 
          color: listItem.color
          }}
      />
      <span> </span>
      </>
  )
  });

  return (chipList);
});