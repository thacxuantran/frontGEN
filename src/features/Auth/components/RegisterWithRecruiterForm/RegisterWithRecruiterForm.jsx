import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import { Check } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import GoogleLogin from "react-google-login";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import Footer from "../../../../components/Footer";
import InputField from "./InputField";
import PasswordField from "../../../../components/form-control/PasswordField";
import Loading from "../../../../components/Loading";
import InputFieldNormal from "../../../Recruiter/components/Create_Recruitment/InputFieldNormal";
import HeaderAuth from "../Header";
import "./styles.scss";

RegisterWithRecruiterForm.propTypes = {
  onSubmit: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  left: {
    width: "50%",
  },

  right: {
    // flex: '1 1 0' ,

    width: "50%",
    height: "50vh",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    boxSizing: "border-box",
    marginTop: "5%",
  },
  google: {
    boxShadow: "none !important",
  },
}));
const GreenCheckbox = withStyles({
  root: {
    color: "#0DAB42",
    "&$checked": {
      color: "#0DAB42",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function RegisterWithRecruiterForm({ onSubmit }) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [state, setState] = React.useState({
    checked: false,
  });
  const [transition, setTransition] = useState("img");
  const [paper, setPaper] = useState("paper");
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    if (event.target.checked) {
      setTransition("img1");
      setPaper("paper1");
    } else {
      setTransition("img");
      setPaper("paper");
    }
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const schema = Yup.object().shape({
    phoneNumber: Yup.number("Phone Number must be number"),
  });

  const { handleSubmit, control, reset, formState, errors } = useForm({
    defaultValues: {
      nameCompany: "",
      location: "",
      phoneNumber: "",
      companyIndustry: "",
      companySize: "",
      taxCode: "",
    },

    resolver: yupResolver(schema),
  });

  const handleSubmitted = (values) => {
    if (onSubmit) {
      onSubmit(values);
      console.log(values);
    }
    reset();
  };
  return (
    <Box>
      {loading ? (
        <Loading />
      ) : (
        <Box className="container">
          <HeaderAuth />
          <Box className="login">
            <Container className="container" component="main">
              <img src="/img2.png" alt="" className="login__img" />
              <Grid
                container
                spacing={1}
                classes={{
                  container: classes.container, // class name, e.g. `classes-nesting-root-x`
                }}
              >
                <Grid item className={classes.right}>
                  <div className={paper}>
                    <img
                      className="paper__ellipse-png"
                      src="/Ellipse.png"
                      alt="Ellipse"
                    />
                    {/* <Avatar className={classes.avatar}>
                                                <CodeIcon />
                                            </Avatar> */}
                    <p className="paper__title">Register Company</p>
                    <form
                      className="paper__form"
                      onSubmit={handleSubmit(handleSubmitted)}
                    >
                      <div className="paper__form__container">
                        <InputField
                          label="Name Company"
                          name="nameCompany"
                          require={true}
                          control={control}
                          className="paper__form__container__textInput"
                        />
                      </div>
                      <div className="paper__form__container">
                        <InputField
                          label="Location"
                          name="location"
                          control={control}
                          require={true}
                          className="paper__form__container__textInput"
                        />
                      </div>
                      <div className="paper__form__container">
                        <InputField
                          label="Phone Number"
                          name="phoneNumber"
                          control={control}
                          require={true}
                          className="paper__form__container__textInput"
                        />
                        {errors.phoneNumber && (
                          <p className="error">{errors.phoneNumber.message}</p>
                        )}
                      </div>
                      <div className="paper__form__container">
                        <InputField
                          label="Company Industry"
                          name="companyIndustry"
                          control={control}
                          require={true}
                          className="paper__form__container__textInput"
                        />
                      </div>
                      <div className="paper__form__container">
                        <InputField
                          label="Company Size"
                          name="companySize"
                          control={control}
                          require={true}
                          className="paper__form__container__textInput"
                        />
                      </div>
                      <div className="paper__form__container">
                        <FormControlLabel
                          control={
                            <GreenCheckbox
                              checked={state.checked}
                              onChange={handleChange}
                              name="checked"
                            />
                          }
                          label="Verify Company"
                        />

                        <img src="/arrow.png" className={transition} />
                      </div>
                      {state.checked && (
                        <div className="paper__form__container">
                          <InputField
                            label="Tax Code"
                            name="taxCode"
                            control={control}
                            className="paper__form__container__textInput"
                          />
                        </div>
                      )}

                      <div className="paper__form__container">
                        <button
                          type="submit"
                          className="paper__form__container__btn"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Footer />
        </Box>
      )}
    </Box>
  );
}

export default RegisterWithRecruiterForm;
