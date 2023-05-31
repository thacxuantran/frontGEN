import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ViewDetailEvent from "../EventDetail/ViewDetailEvent";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Loading from "../../../components/Loading";

ViewDetailEventPage.propTypes = {};

function ViewDetailEventPage(props) {
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
          <ViewDetailEvent />
          <Footer />
        </>
      )}
    </>
  );
}

export default ViewDetailEventPage;
