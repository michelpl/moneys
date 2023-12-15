import React from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MedicationIcon from "@mui/icons-material/Medication";
import EggIcon from "@mui/icons-material/Egg";
import PaidIcon from '@mui/icons-material/Paid';
 
const Components = {
  DescriptionIcon: DescriptionIcon,
  ShoppingCartIcon: ShoppingCartIcon,
  MedicationIcon: MedicationIcon,
  EggIcon: EggIcon,
  PaidIcon: PaidIcon
};
 
export default block => {

  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
      key: Math.random(),
      block: block
    });
  }
  // component doesn't exist yet
  console.log(block.component);
  return React.createElement(
    () => <div>The component {block.component} not found</div>,
    { key: block._uid }
  );

}