import AsyncSelect from "react-select/async";
import Select from "react-select";
import { Controller } from "react-hook-form";
import recruiterApi from "../../../../api/axiosRecruiter";
import React, { Component, useEffect, useState } from "react";
import PropTypes from "prop-types";

ReactSelectExample.propTypes = {};

function ReactSelectExample(props) {
  const options = [
    { value: true, label: "Full Time" },
    { value: false, label: "Part Time" },
  ];
  const { name, label, control, className, defaultValue, onSetJobType } = props;
  const handleChange = (e) => {
    setNormalSelectOption(e.value);
    onSetJobType(e.value);
    console.log(e.value);
  };
  const [normalSelectOption, setNormalSelectOption] = useState(
    options.find((obj) => obj.value === defaultValue)
  );
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
              // value="1"
              // value={normalSelectOption}
              onChange={handleChange}
              color="primary"
              defaultValue={options.find((obj) => obj.value === defaultValue)}
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

export default ReactSelectExample;
