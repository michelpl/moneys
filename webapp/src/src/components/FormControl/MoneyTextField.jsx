import * as React from 'react';
import PropTypes from 'prop-types';
import { NumericFormat } from 'react-number-format';
import TextField from '@mui/material/TextField';

const ToMoneyFormat = React.forwardRef(function ToMoneyFormat(
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

export default function MoneyTextField({setState, setParentState , initialValue, id, label}) {
  const [values, setValues] = React.useState({
    textmask: '(100) 000-0000',
    numberformat: initialValue,
  });

  const handleChange = (event) => {
    setState(event.target.value);
    setParentState(id, event.target.value);
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
      <TextField
        label={label}
        value={values.numberformat}
        onChange={handleChange}
        name="numberformat"
        fullWidth
        id={id}
        InputProps={{
          inputComponent: ToMoneyFormat,
        }}
        variant="outlined"
      />
  );
}