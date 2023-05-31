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
      height: 530,
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
      marginBottom: "20px",
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
export default function DialogCert({
  item,
  index,
  studentId,
  open,
  handleClickOpen,
  handleClose,
  onSubmitCert,
}) {
  const classes = useStyles();
  const [defaultValues, setDefaultValues] = useState({
    Certificate_Title: !item ? "" : item.certificate_Title,
    Certificate_Description: !item ? "" : item.certificate_Description,
    Certificate_Image_Link: !item ? "" : item.certificate_Image_Link,
    Issuing_Organization: !item ? "" : item.issuing_Organization,
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
          Create Certificate<span>.</span>
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
                  Certificate_ID: item.certificate_ID,
                };
                onSubmitCert(tmp, index);
              } else {
                var tmp = {
                  ...values,
                  StudentId: studentId,
                };
                onSubmitCert(tmp);
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
                <span className="input-title">Certificate Title</span>
                <Field className="full-input" name="Certificate_Title" />
                <ErrorMessage name="Certificate_Title" component="div" />
              </div>
              <div className="input-wrapper">
                <span className="input-title">Issuing Organization</span>
                <Field className="full-input" name="Issuing_Organization" />
                <ErrorMessage name="Issuing_Organization" component="div" />
              </div>
              <div className="input-wrapper">
                <span className="input-title">Certificate Description</span>
                <MyTextArea
                  name="Certificate_Description"
                  rows="10"
                  placeholder="Once upon a time there was a princess who lived at the top of a glass hill."
                />
                <ErrorMessage name="Certificate_Description" component="div" />
              </div>
              <div className="input-wrapper">
                <span className="input-title">Link</span>
                <Field className="full-input" name="Certificate_Image_Link" />
                <ErrorMessage name="Certificate_Image_Link" component="div" />
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
