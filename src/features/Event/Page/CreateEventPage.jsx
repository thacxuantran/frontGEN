import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import HomeEvent from "../LandingPage/HomeEvent";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Loading from "../../../components/Loading";
import CreateEvent from "../LandingPage/CreateEvent/CreateEvent";
CreateEventPage.propTypes = {};

function CreateEventPage(props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <CreateEvent />
          <Footer />
        </>
      )}
    </>
  );
}

export default CreateEventPage;
