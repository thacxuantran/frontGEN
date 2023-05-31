import React, { useEffect } from "react";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";
InputFieldNormal.propTypes = {};

function InputFieldNormal(props) {
  //const classes = useStyles();
  const { className } = props;
  return (
    <input
      required
      variant="outlined"
      style={{ border: "1px solid #0DAB42" }}
      className={className}
      color="primary"
    />
  );
}

export default InputFieldNormal;
