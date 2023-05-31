import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  ButtonBase,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";

import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import InputField from "../../../../../components/form-control/InputField";

import OptionFilterField from "../../../../../components/form-control/OptionFilterField";
import {
  PHOTO_CATEGORY_OPTIONS,
  GENDER,
} from "../../../../../constants/global";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
  },
  root: {
    margin: "15px 25px",
    display: "flex",
  },
  main: {
    display: "flex",
    flexDirection: "column",
  },
  option: {
    margin: "14px auto",
    width: "80%",

    "& > p": {
      color: "white",
    },

    "& > .locationSearch": {
      width: "100%",
      border: "none",

      "& > div": {
        borderColor: "white",
        boxShadow: "0px 4px 18px rgba(0, 0, 0, 0.1)",
        "& > div:first-child": {
          "& > div:first-child": {
            color: "#404040",
            backgroundColor: "#fff",
            fontSize: "15px",
            fontFamily: "Samsung Sharp Sans Regular",
          },
        },
        "& > div:last-child": {
          "& > span": {
            display: "none",
            fontSize: "15px",
            fontFamily: "Samsung Sharp Sans Regular",
          },
        },
      },
    },
  },

  btn: {
    background: "white",
    width: "45%",
    marginLeft: '10px',
    boxShadow: "0px 4px 18px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    color: "#0DAB42",
    fontWeight: "bolder",
    fontSize: theme.spacing(2),
    textTransform: "none",

    "&:hover": {
      background: "#A3EABB",
    },
  },

  inputAge: {
    display: "flex",

    "& > div:first-child": {
      background: "white",
      height: "38px",
      borderColor: "white",
      marginRight: "15px",
      borderRadius: "10px",
      boxShadow: "0px 4px 18px rgba(0, 0, 0, 0.1)",
      "& > div": {
        background: "white",
        borderColor: "white",
        height: "38px",
        "& > input": {
          color: "#404040",
          fontFamily: "Samsung Sharp Sans Regular",
        },
        "& > fieldset": {
          borderColor: "white",
        },
      },
    },

    "& > div:last-child": {
      background: "white",
      height: "38px",
      boxShadow: "0px 4px 18px rgba(0, 0, 0, 0.1)",
      "& > div": {
        background: "white",
        height: "38px",

        "& > input": {
          color: "#404040",
          fontFamily: "Samsung Sharp Sans Regular",
        },
        "& > fieldset": {
          borderColor: "white",
        },
      },
    },

    "& > div > span": {
      fontSize: theme.spacing(5),
      color: "white",
      lineHeight: "40px",
    },
  },
  btngroup: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}));

FilterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function FilterForm({
  onSubmit,
  filterCareer,
  filterCountry,
  filterEducation,
  filterLanguage,
  filterLocation,
  onReset
}) {
  const classes = useStyles();

  const schema = Yup.object().shape({});

  const { handleSubmit, control, reset, formState } = useForm({
    defaultValues: {
      career: "",
      education: "",
      location: "",
      language: "",
      fromAge: "",
      toAge: "",
      country: "",
      gender: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitted = (values) => {
    if (onSubmit) {
      onSubmit(values);
    }
  };
  const handleReset = () => {
    reset();

    onReset();
  }

  return (
    <form
      action=""
      className={classes.form}
      onSubmit={handleSubmit(handleSubmitted)}
    >
      <Grid container>
        <Grid item xs={12} sm={6} md={4} lg={4} className={classes.main}>
          <Box className={classes.option}>
            <p
              style={{
                fontSize: "15px",
                fontFamily: "Samsung Sharp Sans",
                color: "#0DAB42",
                marginBottom: "10px",
              }}
            >
              Career
            </p>
            <OptionFilterField
              name="career"
              options={filterCareer}
              control={control}
              className="locationSearch"
              placeholder="All"
            />
          </Box>
          {/* <Box className={classes.option}>
            <p
              style={{
                fontSize: "15px",
                fontFamily: "Samsung Sharp Sans",
                color: "#404040",
                marginBottom: "5px",
              }}
            >
              Education
            </p>
            <OptionFilterField
              name="education"
              options={filterEducation}
              control={control}
              className="locationSearch"
            />
          </Box> */}
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} className={classes.main}>
          <Box className={classes.option}>
            <p
              style={{
                fontSize: "15px",
                fontFamily: "Samsung Sharp Sans",
                color: "#0DAB42",
                marginBottom: "10px",
              }}
            >
              Location
            </p>
            <OptionFilterField
              name="location"
              options={filterLocation}
              control={control}
              className="locationSearch"
              placeholder="All"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} className={classes.main}>
          <Box className={classes.option}>
            <p
              style={{
                fontSize: "15px",
                fontFamily: "Samsung Sharp Sans",
                color: "#0DAB42",
                marginBottom: "10px",
              }}
            >
              Language
            </p>
            <OptionFilterField
              name="language"
              options={filterLanguage}
              control={control}
              className="locationSearch"
              placeholder="All"
            />
          </Box>
          {/* <Box className={classes.option}>
            <p
              style={{
                fontSize: "15px",
                fontFamily: "Samsung Sharp Sans",
                color: "#404040",
                marginBottom: "5px",
              }}
            >
              Age
            </p>
            <Box className={classes.inputAge}>
              <InputField
                name="fromAge"
                control={control}
                className=""
                type="number"
                required={false}
                placeholder="From"
              />

              <InputField
                name="toAge"
                control={control}
                className=""
                type="number"
                required={false}
                placeholder="To"
              />
            </Box>
          </Box>
          <Box className={classes.option}>
            <p
              style={{
                fontSize: "15px",
                fontFamily: "Samsung Sharp Sans",
                color: "#404040",
                marginBottom: "5px",
              }}
            >
              Country
            </p>
            <OptionFilterField
              name="country"
              options={filterCountry}
              control={control}
              className="locationSearch"
            />
          </Box> */}
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} className={classes.main}>
          <Box className={classes.option}>
            <p
              style={{
                fontSize: "15px",
                fontFamily: "Samsung Sharp Sans",
                color: "#0DAB42",
                marginBottom: "10px",
              }}
            >
              Gender
            </p>
            <OptionFilterField
              name="gender"
              options={GENDER}
              control={control}
              className="locationSearch"
              placeholder="All"
            />
          </Box>
          {/* <Box className={classes.option}>
            <p
              style={{
                fontSize: "15px",
                fontFamily: "Samsung Sharp Sans",
                color: "#fff",
                marginBottom: "5px",
              }}
            >
              Language
            </p>
            <Button className={classes.btn} type="submit">
              Search
            </Button>
          </Box> */}
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} className={classes.main}>
          <Box className={classes.option}>
            <p
              style={{
                fontSize: "15px",
                fontFamily: "Samsung Sharp Sans",
                color: "#0DAB42",
                marginBottom: "10px",
              }}
            >
              Education
            </p>
            <OptionFilterField
              name="education"
              options={filterEducation}
              control={control}
              className="locationSearch"
              placeholder="All"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} className={classes.main}>
          <Box className={classes.option}>
            <p
              style={{
                fontSize: "15px",
                fontFamily: "Samsung Sharp Sans",
                color: "#fff",
                marginBottom: "10px",
              }}
            >
              Language
            </p>
            <div className={classes.btngroup}>
              <Button className={classes.btn} type="submit">
                Filter
              </Button>
              <Button className={classes.btn} onClick={handleReset}>
                Reset
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}

export default FilterForm;
