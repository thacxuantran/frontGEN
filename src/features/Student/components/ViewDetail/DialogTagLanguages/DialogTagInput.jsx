import React, { useState } from "react";
import PropTypes from "prop-types";
import { Autocomplete } from "@material-ui/lab";
import { Chip, makeStyles, TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";
DialogTagInput.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
function DialogTagInput(props) {
  const [normalSelectOption, setNormalSelectOption] = useState(props.names);
  const { name, label, control, className, onSetTags } = props;
  const classes = useStyles();

  const top100Films = [
    { label: "The Shawshank Redemption", value: "1994" },
    { label: "The Godfather", value: "1972" },
    { label: "The Godfather: Part II", value: "1974" },
  ];

  const handleChange = (e, value) => {
    setNormalSelectOption(value);
    onSetTags(value);
  };
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Autocomplete
            multiple
            id="tags-filled"
            options={top100Films.map((option) => option.label)}
            // getOptionLabel={(top100Films) => top100Films.title}
            freeSolo
            onChange={handleChange}
            value={normalSelectOption}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  className="chip"
                  variant="outlined"
                  color="primary"
                  label={option}
                  size="medium"
                  {...getTagProps({ index })}
                  {...field}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                class="text_field"
                variant="filled"
                placeholder="Input Skills"
              />
            )}
          />
        )}
      />
    </div>
  );
}
export default DialogTagInput;
