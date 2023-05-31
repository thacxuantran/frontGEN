import Select from "react-select";
import { Controller } from "react-hook-form";
import recruiterApi from "../../../../api/axiosRecruiter";
import React, { Component, useEffect, useState } from "react";
import PropTypes from "prop-types";

TypeOfCategory.propTypes = {};

function TypeOfCategory(props) {
  const { name, label, control, className, defaultValue, onSetJobCategory } =
    props;
  const options = [
    { value: "Designer", label: "Designer" },
    { value: "Developer", label: "Developer" },
  ];
  const [normalSelectOption, setNormalSelectOption] = useState(
    options.find((obj) => obj.value === defaultValue)
  );
  const handleChange = (e) => {
    setNormalSelectOption(e.value);
    onSetJobCategory(e.value);
  };

  //console.log("test thu ne:", normalSelectOption);

  return (
    <div style={{ width: "100%" }}>
      <div>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select
              required
              value={options.find((obj) => obj.value === normalSelectOption)}
              onChange={handleChange}
              defaultValue={options.find((obj) => obj.value === defaultValue)}
              color="primary"
              options={options}
              className={className}
              //{...field}
            />
          )}
        />
      </div>
    </div>
  );
}

export default TypeOfCategory;
