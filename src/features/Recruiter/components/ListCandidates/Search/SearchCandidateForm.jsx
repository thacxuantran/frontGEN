import { yupResolver } from "@hookform/resolvers/yup";
import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import SearchIcon from "@material-ui/icons/Search";
import PropTypes from "prop-types";

import InputSearchField from "../../../../../components/form-control/InputSearchField";

SearchCandidateForm.propTypes = {
  onSubmit: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    justifyContent: "center",
    border: "1px solid #0DAB42",
    height: "40px",
    borderRadius: "7px",

    "& > .searchCandidate": {
      width: "90%",
      border: "none",
      margin: "auto",

      "& > div > input": {
        color: "green",
      },

      "& > div": {
        "&::before": {
          content: "none",
        },
        "&::after": {
          content: "none",
        },
      },
    },

    "& > button": {
      padding: 0,
      width: "58px",
      background: "#0DAB42",
      borderRadius: "5px",

      "&:hover": {
        background: "#0DAB42",
      },
    },
  },
}));

function SearchCandidateForm({ onSubmit }) {
  const classes = useStyles();

  const schema = Yup.object().shape({});

  const { handleSubmit, control, reset, formState } = useForm({
    defaultValues: {
      nameSearchCandidate: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitted = (values) => {
		if (onSubmit) {
			onSubmit(values);
		}
	};

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit(handleSubmitted)}>
        <InputSearchField
          name="nameSearchCandidate"
          placeholder="Name"
          control={control}
          className="searchCandidate"
          required={false}
        />
        <Button type="submit">
          <SearchIcon color="secondary" />
        </Button>
      </form>
    </>
  );
}

export default SearchCandidateForm;
