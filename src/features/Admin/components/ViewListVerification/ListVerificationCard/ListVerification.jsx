import React from "react";
import PropTypes from "prop-types";
import "./ListVerification.scss";
import { Box, IconButton } from "@material-ui/core";
import VerificationCard from "../VerificationCard/VerificationCard";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

ListVerification.propTypes = {
  listVerification: PropTypes.array,
};

ListVerification.defaultProps = {
  listVerification: [],
};

function ListVerification({
  listVerification,
  onPageChange,
  pagination,
  onVerificationChange,
}) {
  const { pageIndex, pageSize, totalCount } = pagination;
  const totalPage = Math.ceil(totalCount / pageSize);
  const handlePageChange = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  return (
    <Box className="list-verify-container">
      {listVerification.map((item, index) => (
        <VerificationCard
          key={item.r_ProfileID}
          index={index}
          verification={item.recruiter_Information}
          onVerificationChange={onVerificationChange}
          avatar={item.logo_Image_Link}
        />
      ))}
      <Box className="paging">
        <IconButton
          onClick={() => handlePageChange(pageIndex - 1)}
          disabled={pageIndex <= 1}
          size="medium"
        >
          <NavigateBeforeIcon
            fontSize="inherit"
            style={pageIndex > 1 ? { color: "#0DAB42", fontSize: 25 } : {}}
          />
        </IconButton>
        <Box>
          {pageIndex}/{totalPage}
        </Box>
        <IconButton
          onClick={() => handlePageChange(pageIndex + 1)}
          disabled={pageIndex === totalPage}
          size="medium"
        >
          <NavigateNextIcon
            style={
              pageIndex !== totalPage ? { color: "#0DAB42", fontSize: 25 } : {}
            }
            fontSize="inherit"
          />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ListVerification;
