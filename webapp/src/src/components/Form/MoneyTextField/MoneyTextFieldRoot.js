/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { forwardRef } from "react";
import { NumericFormat } from 'react-number-format';
import PropTypes from "prop-types";
import MoneyTextField from ".";

const ToMoneyFormat = forwardRef(function ToMoneyFormat(
  props,
  ref,
) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      decimalSeparator=','
      thousandSeparator='.'
      valueIsNumericString
      allowNegative={false}
      isAllowed={(values) => {
        const { floatValue } = values;
        return floatValue < 10000000;
      }}
      decimalScale='2'
      fixedDecimalScale={true}
      prefix="R$ "
    />
  );
});

ToMoneyFormat.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default moneyTextFieldRoot = () => {
  return (<></>)
}