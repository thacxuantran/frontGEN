import React from "react";
import PropTypes from "prop-types";
import InformationDetail from "./InformationDetail";

InformationFeature.propTypes = {};

const skill = [
  { id: 1, name: "Java" },
  { id: 2, name: "PHP" },
  { id: 3, name: "React" },
  { id: 4, name: "ASP .Net" },
  { id: 5, name: "Android" },
];

const language = [
  { id: 1, name: "English" },
  { id: 2, name: "Japanese" },
  { id: 3, name: "Chinese" },
];

const resume = [
  { id: 1, name: "TTKNResumeIntern" },
  { id: 2, name: "TTKNResumeJava" },
];

function InformationFeature({ studentProfile }) {
  return (
    <>
      <InformationDetail studentProfile={studentProfile} />
    </>
  );
}

export default InformationFeature;
