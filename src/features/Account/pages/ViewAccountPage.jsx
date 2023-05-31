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
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../../../components/Footer";
import HeaderAuth from "../../Auth/components/Header";
import Header from "../../../components/Header";
import ViewAccount from "../components/ViewAccount";
import Loading from "../../../components/Loading";

ViewAccountPage.propTypes = {};

function ViewAccountPage(props) {
  const [loading, setLoading] = useState(false);
  const { accountId } = useParams();
  console.log("account ID:", accountId);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Box>
      {loading ? (
        <Loading />
      ) : (
        <Box className="container">
          <Header />
          <ViewAccount accountId={accountId} />
          <Footer />
        </Box>
      )}
    </Box>
  );
}

export default ViewAccountPage;
