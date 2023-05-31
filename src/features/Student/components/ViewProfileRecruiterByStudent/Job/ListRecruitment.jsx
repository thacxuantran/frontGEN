import React from "react";
import RecruitmentCard from "./RecuitmentCard";

function ListRecruitment({ recruiment, avt, nameCompany }) {
  return (
    <div>
      <RecruitmentCard
        avt={avt}
        recruiment={recruiment}
        nameCompany={nameCompany}
      />
    </div>
  );
}

ListRecruitment.propTypes = {};

export default ListRecruitment;
