import React, { useState } from "react";
import PropTypes from "prop-types";
import { Autocomplete } from "@material-ui/lab";
import { Chip, makeStyles, TextField } from "@material-ui/core";
import "./tagInput.scss";
import { Controller } from "react-hook-form";
TagInput.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
function TagInput(props) {
  // const handleDelete = (chipToDelete) => () => {
  //   setChipData((chips) =>
  //     chips.filter((chip) => chip.key !== chipToDelete.key)
  //   );
  // };
  const { name, names, label, control, className, onSetTags, defaultValue } =
    props;
  const [normalSelectOption, setNormalSelectOption] = useState(names);
  console.log("nihon: ", normalSelectOption);
  const classes = useStyles();
  // const [chipData, setChipData] = React.useState([
  //   { key: 0, label: "Angular" },
  //   { key: 1, label: "jQuery" },
  //   { key: 2, label: "Polymer" },
  //   { key: 3, label: "React" },
  //   { key: 4, label: "Vue.js" },
  // ]);
  const top100Films = [
    { label: 'Java', value: '1' },
    { label: 'JavaScript', value: '2' },
    { label: '.Net Core', value: '3' },
    { label: 'ReactJS', value: '4' },
    { label: 'Microservice', value: '5' },
    { label: 'Azure', value: '6' },
    { label: 'AWS', value: '7' },
    { label: 'Vuejs', value: '8' },
    { label: 'Docker', value: '9' },
    { label: 'Golang', value: '10' },
    { label: 'Python', value: '11' },
    { label: 'Ruby', value: '12' },
  ];

  const handleChange = (e, value) => {
    setNormalSelectOption(value);
    onSetTags(value);
  };

  return (
    <div>
      <Controller
        name={name}
        render={({ field }) => (
          <Autocomplete
            multiple
            id="tags-filled"
            options={top100Films.map((option) => option.label)}
            // getOptionLabel={(top100Films) => top100Films.title}
            freeSolo
            required
            onChange={handleChange}
            value={normalSelectOption}
            renderTags={(defaultValue, getTagProps) =>
              defaultValue.map((option, index) => (
                <Chip
                  className="chip"
                  variant="outlined"
                  color="primary"
                  // onDelete={handleDelete}
                  label={option}
                  size="medium"
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                class="text_field"
                variant="filled"
                placeholder="Input Job tag"
              />
            )}
          />
        )}
        control={control}
      />
    </div>
  );
}
export default TagInput;
