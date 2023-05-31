import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { login, loginGoogle } from "../../userSlice";
import LoginForm from "../LoginForm";
import { messaging } from "../../../../init-fcm";

Login.propTypes = {};

function Login(props) {
  const dispatch = useDispatch();
  const { role } = useParams();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [googleSubmit, setGoogleSubmit] = useState(false);

  const handleSubmit = async (values) => {
    try {
      // Auto set role = 'EMPLOYER'
      console.log(values);
      let token = '';
      try {
        token = await messaging.getToken();
      } catch (err) {
        console.log(err);
      }

      const action = login({
        email: values.email,
        password: values.password,
        device_token: token,
      });

      // navigator.serviceWorker.addEventListener("message", (message) => console.log(message));
      // messaging.onMessage((payload) => {
      // 	console.log('Message received. ', payload);
      // 	// ...
      // });
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      if (resultAction.payload.role === "STUDENT") {
        history.push("/homepage");
        return;
      } else {
        history.push("/recruiter/manage");
      }
    } catch (error) {
      enqueueSnackbar("Invalid username or password!", { variant: "error" });
    }
  };

  const handleResponseGoogle = async (data, callback) => {
    setGoogleSubmit(true)
    try {
      // Auto set role = 'EMPLOYER'
      console.log(data);
      let token = '';
      await messaging.getToken().then((data) => {
        token = data
      }).catch((err) => {
        console.log(err)
      });

      // await messaging.requestPermission()
      // 	.then(async function () {

      // 	})
      // 	.catch(function (err) {
      // 		console.log("Unable to get permission to notify.", err);
      // 	});
      const action = await loginGoogle({
        IdToken: data.tokenId,
        role: role,
        device_token: token,
      });
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      if (resultAction.payload.data.role === "STUDENT") {
        history.push("/homepage");
        return;
      } else {
        history.push("/recruiter/manage");
      }
      setGoogleSubmit(false)
    } catch (error) {
      console.log(error)
      enqueueSnackbar("Invalid username or password!", { variant: "error" });
      setGoogleSubmit(false);
    }
  };

  return (
    <>
      <LoginForm
        onSubmit={handleSubmit}
        role={role}
        onHandleResponseGoogle={handleResponseGoogle}
        googleSubmit={googleSubmit}
      />
    </>
  );
}

export default Login;
