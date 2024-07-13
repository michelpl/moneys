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
    chipList.push(<Chip key={listItem.id} label={listItem.label} />)
  });

  return (chipList);
});