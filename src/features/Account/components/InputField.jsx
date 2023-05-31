import { Input, TextField } from "@material-ui/core";
import React from "react";
import { Controller } from "react-hook-form";

InputField.propTypes = {};

function InputField(props) {
  //const classes = useStyles();
  const { name, label, className } = props;

  return (
    <TextField
      name={name}
      //className={classes}
      type="text"
      className={className}
      color="primary"
      label={label}
    />
  );
}

export default InputField;
