import { unstable_createMuiStrictModeTheme } from "@material-ui/core";
import React from "react";

import { Controller } from "react-hook-form";
import Select from "react-select";

function OptionFilterField(props) {
  const { name, label, control, className, placeholder, options } = props;

  const customTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary: "#0DAB42",
      },
      fontFamily: "Samsung Sharp Sans Regular",
    };
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          placeholder={placeholder}
          options={options}
          {...field}
          className={className}
          theme={customTheme}
        />
      )}
    />
  );
}

export default OptionFilterField;
