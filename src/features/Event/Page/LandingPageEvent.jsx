import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../../../components/Header";
import HomeEvent from "../LandingPage/HomeEvent";
import Footer from "../../../components/Footer";
import Loading from "../../../components/Loading";

LandingPageEvent.propTypes = {};

function LandingPageEvent(props) {
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
          <HomeEvent />
          <Footer />
        </>
      )}
    </>
  );
}

export default LandingPageEvent;
