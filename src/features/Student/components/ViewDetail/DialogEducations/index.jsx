import { React, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import { Container, Grid, makeStyles } from "@material-ui/core";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  useFormikContext,
  useField,
} from "formik";
// import DatePicker from "../../../../Recruiter/components/Create_Recruitment/DatePicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.scss";
const useStyles = makeStyles((theme) => ({
  dialog: {
    "& .MuiDialog-paperWidthXs": {
      width: 707,
      height: 630,
      background: "#FFFFFF",
      maxWidth: "unset !important",
      alignItems: "center",
      padding: 25,
    },
    "& textarea": {
      fontFamily: "Samsung Sharp Sans Regular",
      fontSize: "13px",
      background: "#FFFFFF",
      border: "1px solid #0DAB42",
    },
    "& h3": {
      fontFamily: "Samsung Sharp Sans",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "20px",
      lineHeight: "38px",
      marginBottom: 30,
      textAlign: "center",
      "& > span": {
        color: "#0DAB42",
        fontSize: "44px",
      },
    },
  },
}));
const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className="text-area" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const formatDate = (str) => {
  let date = new Date(str);
  return (
    (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
    "/" +
    (date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) +
    "/" +
    date.getFullYear()
  );
};
export default function DialogEducations({
  index,
  item,
  studentId,
  open,
  handleClickOpen,
  handleClose,
  onSubmitEducation,
}) {
  const classes = useStyles();
  const [defaultValues, setDefaultValues] = useState({
    School: !item ? "" : item.school,
    Major: !item ? "" : item.major,
    From_Date: !item ? "" : new Date(item.from_Date),
    To_Date: !item ? "" : new Date(item.to_Date),
    Achievements: !item ? "" : item.achievements,
  });

  return (
    <div>
      <Dialog
        className={classes.dialog}
        maxWidth="xs"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <h3>
          {!item ? "Create Education" : "Update Education"}
          <span>.</span>
        </h3>
        <Formik
          enableReinitialize
          initialValues={defaultValues}
          // validate={values => {
          //     const errors = {};
          //     if (!values.Email) {
          //         errors.Email = 'Required';
          //     } else if (
          //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)
          //     ) {
          //         errors.Email = 'Invalid email address';
          //     }
          //     return errors;
          // }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              if (item) {
                var tmp = {
                  ...values,
                  EducationId: item.education_ID,
                };
                onSubmitEducation(tmp, index);
              } else {
                var tmp = {
                  ...values,
                  StudentId: studentId,
                };
                onSubmitEducation(tmp);
              }
              setDefaultValues(values);
              setSubmitting(false);
              handleClose();
            }, 400);
          }}
        >
          {({ isSubmitting, values, setFieldValue }) => (
            <Form className="form-root">
              <div className="input-wrapper">
                <span className="input-title">School</span>
                <Field className="full-input" name="School" />
                <ErrorMessage name="School" component="div" />
              </div>
              <div className="input-wrapper">
                <span className="input-title">Major</span>
                <Field className="full-input" name="Major" />
                <ErrorMessage name="Major" component="div" />
              </div>
              <div className="input-wrapper-two">
                <div className="wrapper-half right">
                  <span className="input-title">From Date</span>
                  <DatePicker
                    selected={values.From_Date}
                    className="half-input"
                    name="From_Date"
                    dateFormat="dd/MM/yyyy"
                    onChange={(val) => setFieldValue("From_Date", val)}
                  />
                </div>
                <div className="wrapper-half right">
                  <span className="input-title">To Date</span>
                  <DatePicker
                    selected={values.To_Date}
                    className="half-input"
                    name="To_Date"
                    dateFormat="dd/MM/yyyy"
                    onChange={(val) => setFieldValue("To_Date", val)}
                  />
                </div>
              </div>
              <div className="input-wrapper">
                <span className="input-title">Achievements</span>
                <MyTextArea
                  name="Achievements"
                  rows="10"
                  placeholder="Once upon a time there was a princess who lived at the top of a glass hill."
                />
                <ErrorMessage name="Achievements" component="div" />
              </div>
              <div className="wrap-btn">
                <button
                  className="btn-submit"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
}
