import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import InputField from "../../../../components/form-control/InputField";
import PasswordField from "../../../../components/form-control/PasswordField";
import Loading from "../../../../components/Loading";
import LinearProgress from "@material-ui/core/LinearProgress";

import "./styles.scss";

const useStyles = makeStyles((theme) => ({
  left: {
    width: "50%",
  },

  right: {
    // flex: '1 1 0',

    width: "50%",
    height: "50vh",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    boxSizing: "border-box",
    marginTop: "3%",
  },
  google: {
    boxShadow: "none !important",
  },

  login: {
    marginBottom: "250px",
  },
}));

function LoginForm({ onSubmit }) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const schema = Yup.object().shape({});

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit, control, reset, formState } = form;

  const { isSubmitting } = formState;

  const handleSubmited = (values) => {
    if (onSubmit) {
      onSubmit(values);
    }
    reset();
  };

  return (
    <Box>
      {loading ? (
        <Loading />
      ) : (
        <div className="containerAuth1">
          <Box className="login">
            <Container component="main">
              <img src="/img2.png" alt="" className="login__img" />
              <Grid
                container
                spacing={2}
                classes={{
                  container: classes.container, // class name, e.g. `classes-nesting-root-x`
                }}
              >
                <Grid item className={classes.left}>
                  <div className="imageAuth">
                    <img
                      style={{
                        width: "500px",
                        height: "500px",
                        marginBottom: "30px",
                      }}
                      src="/admin.png"
                      alt="Hiring"
                    />
                  </div>
                </Grid>
                <Grid item className={classes.right}>
                  <div className="paperAuth1">
                    <img
                      className="paperAuth1__ellipse-png"
                      src="/Ellipse.png"
                      alt="Ellipse"
                    />
                    {isSubmitting && <LinearProgress />}
                    <p className="paperAuth1__title">Sign in</p>
                    <form
                      className="paperAuth1__form"
                      onSubmit={handleSubmit(handleSubmited)}
                    >
                      <div className="paperAuth1__form__container">
                        <InputField
                          label="Admin"
                          name="email"
                          form={form}
                          className="paperAuth1__form__container__textInput"
                        />
                      </div>
                      <div className="paperAuth1__form__container">
                        <PasswordField
                          control={control}
                          label="Password"
                          name="password"
                          className="paperAuth1__form__container__textInput"
                        />
                      </div>

                      <div className="paperAuth1__form__container">
                        <button
                          type="submit"
                          className="paperAuth1__form__container__btn"
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </div>
      )}
    </Box>
  );
}

export default LoginForm;
