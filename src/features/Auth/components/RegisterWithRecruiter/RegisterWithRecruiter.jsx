import React from "react";
import RegisterWithRecruiterForm from "../RegisterWithRecruiterForm/RegisterWithRecruiterForm";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
RegisterWithRecruiter.propTypes = {};

function RegisterWithRecruiter(props) {
  const handleSubmit = (values) => {
    try {
      // Auto set role = 'EMPLOYER'
      //    console.log(values);
      // values.role = 'EMPLOYER';
      // const action = register({
      // 	email: values.email,
      // 	password: values.password,
      // 	role: values.role,
      // });
      // const resultAction = await dispatch(action);
      // unwrapResult(resultAction);
      // history.push('/');
    } catch (error) {
      //enqueueSnackbar(error.message, { variant: "error" });
    }
  };
  return <RegisterWithRecruiterForm onSubmit={handleSubmit} />;
}

export default RegisterWithRecruiter;
