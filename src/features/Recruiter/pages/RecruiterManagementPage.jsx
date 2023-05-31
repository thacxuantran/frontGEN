import React from "react";
import Footer from "../../../components/Footer";
import HeaderRecruiter from "../../../components/HeaderRecruiter";
import RecruiterManagement from "../components/RecruiterManagement/RecruiterManagement";
RecruiterManagementPage.propTypes = {};

function RecruiterManagementPage(props) {
  return (
    <div>
      <HeaderRecruiter />
      <RecruiterManagement />
      <Footer />
    </div>
  );
}

export default RecruiterManagementPage;
