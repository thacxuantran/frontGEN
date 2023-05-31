import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Loading from "../../../components/Loading";
import ManageEvent from "../ManageEvent/ManageEvent";
ManageEventPage.propTypes = {};

function ManageEventPage(props) {
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
          <ManageEvent />
          <Footer />
        </>
      )}
    </>
  );
}

export default ManageEventPage;
