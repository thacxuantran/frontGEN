import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import OptionFilterField from "../../../components/form-control/OptionFilterField";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import SearchIcon from "@material-ui/icons/Search";
import InputSearchField from "../../../components/form-control/InputSearchField";
import { PHOTO_CATEGORY_OPTIONS } from "../../../constants/global";
import { motion } from "framer-motion";
IntroSearch.propTypes = {};

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    width: "150%",
    justifyContent: "space-between",
    marginTop: theme.spacing(3.2),

    "& > .searchHomePageStudent": {
      width: "60%",

      "& > div > input": {
        color: "green",
      },

      "& > div": {
        border: "1px solid #0DAB42",
        borderRadius: "10px",

        "&::before": {
          content: "none",
        },

        "&::after": {
          content: "none",
        },

        "& > div:last-child > span": {
          display: "none",
        },

        "& > div:last-child > div": {
          //color: "#0DAB42",
        },
      },
    },

    "& > .locationSearch": {
      width: "20%",
      border: "none",

      "& > div > input": {
        color: "green",
      },

      "& > div": {
        border: "1px solid #0DAB42",
        borderRadius: "10px",

        "&::before": {
          content: "none",
        },

        "&::after": {
          content: "none",
        },

        "& > div:last-child > span": {
          display: "none",
        },
        "& > div:last-child > div": {
          //color: "#0DAB42",
        },
      },
    },

    "& > button": {
      padding: 0,
      minWidth: "52px",

      background: "#0DAB42",
      borderRadius: "12px",
    },
  },

  boxSearch: {
    margin: "auto",
    "& > div > h3, & > div > p, & > div > form": {
      paddingLeft: theme.spacing(5),
    },

    "& > div > h3": {
      fontWeight: "bolder",
    },
  },
}));

function IntroSearch(props) {
  const classes = useStyles();
  const schema = Yup.object().shape({
    email: Yup.string().email(),
    password: Yup.string().required(),
  });
  //const parallax = useRef < IParallax > null;
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <motion.img
          initial={{ opacity: 0, y: 300 }}
          animate={{ y: -80, opacity: 1, duration: 4 }}
          transition={{ type: "spring", stiffness: 120 }}
          style={{ width: "95%", marginTop: 100 }}
          src="/landingpage/banner1.png"
          alt="banner"
        />
      </Grid>
      <motion.div
        initial={{ opacity: 0, x: -120, y: -200 }}
        animate={{ x: -120, y: 20, opacity: 1, duration: 4 }}
        transition={{ type: "spring", stiffness: 120 }}
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        className={classes.boxSearch}
      >
        <Box>
          <Typography variant="h3" color="primary">
            Find your job!
          </Typography>
          <Typography style={{ marginTop: "10px" }} variant="body1">
            Search by skill, View Salaries, One-Click Apply
          </Typography>
          <form>
            <Box className={classes.form}>
              <OptionFilterField
                name="nameSearch"
                placeholder="Software Engineer..."
                control={control}
                className="searchHomePageStudent"
                options={PHOTO_CATEGORY_OPTIONS}
              />
              <OptionFilterField
                name="locationSearch"
                placeholder="Location"
                options={PHOTO_CATEGORY_OPTIONS}
                control={control}
                className="locationSearch"
              />
              <Button>
                <SearchIcon color="secondary" />
              </Button>
            </Box>
          </form>
        </Box>
      </motion.div>
    </Grid>
  );
}

export default IntroSearch;
