import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomePage from "./pages/HomePage";
import { messaging } from "../../init-fcm";

LandingPage.propTypes = {};

function LandingPage(props) {
  // messaging.requestPermission()
  //   .then(async function () {
  //     const token = await messaging.getToken();
  //     console.log(token);
  //   })
  //   .catch(function (err) {
  //     console.log("Unable to get permission to notify.", err);
  //   });
  // navigator.serviceWorker.addEventListener("message", (message) => console.log(message));
  // messaging.onMessage((payload) => {
  //   console.log('Message received. ', payload);
  //   // ...
  // });
  const match = useRouteMatch();
  return (
    <div>
      <Header />
      <Switch>
        <Route path={match.url} exact component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default LandingPage;
