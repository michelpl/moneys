import * as React from 'react';
import PropTypes from 'prop-types';
import { NumericFormat } from 'react-number-format';
import TextField from '@mui/material/TextField';

const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(
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
      decimalScale={2}
      prefix="R$ "
    />
  );
});

NumericFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function MoneyTextField({setState, setParentState , initialValue, id, label}) {
  const [values, setValues] = React.useState({
    textmask: '(100) 000-0000',
    numberformat: initialValue,
  });

  const handleChange = (event) => {
    // setState(event.target.value);
    // setParentState(id, event.target.value);
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
        inputComponent: NumericFormatCustom,
      }}
      variant="outlined"
    />
  );
}


MoneyTextField.defaultProps = {
  size: "medium",
  error: false,
  success: false,
  disabled: false,
  initialValue: '',
  label: '',
  id: '',
  setState: '',
  setParentState: ''
};

// Typechecking props for the MoneyTextField
MoneyTextField.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  initialValue: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  setState: PropTypes.string,
  setParentState: PropTypes.string
};
