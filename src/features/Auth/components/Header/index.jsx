import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "25px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  sign: {
    display: "flex",
    justifyContent: "flex-end",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
  img: {
    display: "flex",
    alignItems: "center",
  },
  Header_button: {
    marginTop: "-60%",
    marginRight: "50px",
  },
}));

export default function HeaderAuth({ switchHeader }) {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Box className={classes.center}>
        <Link className={classes.img} to="/">
          <img src="/logo.png" alt="GEN Logo" />
        </Link>
      </Box>
      <Box className={classes.sign}>
        {switchHeader === "signin" ? (
          //   <button size="large">
          //     <Link to="/auth/signup">Sign Up</Link>
          //   </button>
          <div className="paper__form__container">
            <Button
              color="primary"
              size="medium"
              variant="contained"
              className={classes.Header_button}
              style={{ borderRadius: "10px", textTransform: "none" }}
            >
              <Link
                to="/auth/selectRole/signup"
                style={{ color: "white" }}
                className='Header_button"__link'
              >
                Sign Up
              </Link>
            </Button>
          </div>
        ) : switchHeader === "signup" ? (
          <div className="paper__form__container">
            <Button
              color="primary"
              size="medium"
              variant="contained"
              className={classes.Header_button}
              style={{ borderRadius: "10px", textTransform: "none" }}
            >
              <Link
                to="/auth/selectRole/signin"
                style={{ color: "white" }}
                className='Header_button"__link'
              >
                Sign In
              </Link>
            </Button>
          </div>
        ) : (
          <></>
        )
      
      }
      </Box>
    </div>
  );
}
