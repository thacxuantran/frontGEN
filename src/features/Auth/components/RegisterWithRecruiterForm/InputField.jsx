import { TextField } from "@material-ui/core";
import React from "react";
import { Controller } from "react-hook-form";
import { Formik, Form, Field, ErrorMessage, FormFeedback } from "formik";
InputField.propTypes = {};

function InputField(props) {
  const { name, label, control, className, type, require } = props;
  // const { errors, touched } = form;
  // const showError = errors[name] && touched[name];
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          variant="outlined"
          required={require}
          // className='paper__form__container__textInput'
          className={className}
          color="primary"
          {...field}
          label={label}
          type={type}
        />
      )}
    />
  );
}

export default InputField;
