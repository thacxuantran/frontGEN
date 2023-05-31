import AsyncSelect from "react-select/async";
import Select from "react-select";
import { Controller } from "react-hook-form";
import recruiterApi from "../../../../api/axiosRecruiter";
import React, { Component, useEffect, useState } from "react";
import PropTypes from "prop-types";

TypeOfCategory.propTypes = {};

function TypeOfCategory(props) {
  const [normalSelectOption, setNormalSelectOption] = useState("");
  const options = [
    { value: "Designer", label: "Designer" },
    { value: "Developer", label: "Developer" },
  ];
  const { name, label, control, className } = props;
  const handleChange = (e) => {
    setNormalSelectOption(e.value);
    console.log(e.value);
  };

  return (
    <div style={{ width: "100%" }}>
      <div>
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              isSearchable
              required
              value={options.find((obj) => obj.value === normalSelectOption)}
              // value="1"
              // value={normalSelectOption}
              onChange={handleChange}
              color="primary"
              options={options}
              className={className}
              {...field}
            />
          )}
        />
      </div>
    </div>
  );
}

export default TypeOfCategory;
