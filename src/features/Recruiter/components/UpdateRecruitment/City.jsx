import Select from "react-select";
import { Controller } from "react-hook-form";
import recruiterApi from "../../../../api/axiosRecruiter";
import React, { Component, useEffect, useState } from "react";
import PropTypes from "prop-types";

City.propTypes = {};

function City(props) {
  var options = [];
  const [city, setCity] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        await Promise.all([recruiterApi.getCity()]).then((data) => {
          setCity(data[0].data);

          //  console.log("city " + data.data);
        });
      } catch (error) {
        console.log("err", error);
      }
    })();
  }, []);
  for (let i = 0; i < city.length; i++) {
    options.push({
      value: city[i].city_ID,
      label: city[i].name,
    });
  }
  const { name, label, control, className, defaultValue, onSetCityID } = props;
  const [normalSelectOption, setNormalSelectOption] = useState(defaultValue);
  const handleChange = (e) => {
    setNormalSelectOption(e.value);
    onSetCityID(e.value);
  };

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
              color="primary"
              defaultValue={options.find((obj) => obj.value === defaultValue)}
              options={options}
              className={className}
              //  {...field}
            />
          )}
        />
      </div>
    </div>
  );
}

export default City;
