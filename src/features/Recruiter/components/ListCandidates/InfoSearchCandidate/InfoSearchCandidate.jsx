import { yupResolver } from "@hookform/resolvers/yup";
import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import OptionFilterFieldOnChange from "../../../../../components/form-control/OptionFilterFieldOnChange";
import {
  skill,
  SORT_OPTIONS,
  SORT_OPTIONS_CANDIDATE,
} from "../../../../../constants/global";

InfoSearchCandidate.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "0px 8px 27px 2px rgba(0, 0, 0, 0.1)",

    "& > p": {
      lineHeight: "38px",
      marginLeft: "30px",
    },
  },
  search: {
    width: "13%",

    "& > div": {
      border: "none",
      boxShadow: "none",
      fontFamily: "Samsung Sharp Sans Regular",
      fontSize: "14px",
      width: "147px",
      color: "black",

      "& > div:first-child": {},
      "& > div:last-child": {
        "& > span": {
          display: "none",
        },
        "& > div": {},
      },
    },
  },
}));
function InfoSearchCandidate({ onChangeSort, count }) {
  const classes = useStyles();

  const schema = Yup.object().shape({});

  const { handleSubmit, control, reset, formState } = useForm({
    defaultValues: {
      nameSearch: "",
    },
    resolver: yupResolver(schema),
  });

  const onHandleChangeSort = (values) => {
    if (onChangeSort) {
      onChangeSort(values);
    }
  };

  return (
    <Box className={classes.root}>
      <Typography variant="body2">{count} result of ...</Typography>
      <OptionFilterFieldOnChange
        name="locationSearch"
        placeholder="Sort: Default"
        options={SORT_OPTIONS_CANDIDATE}
        control={control}
        className={classes.search}
        onChangeFilter={onHandleChangeSort}
      />
    </Box>
  );
}

export default InfoSearchCandidate;
