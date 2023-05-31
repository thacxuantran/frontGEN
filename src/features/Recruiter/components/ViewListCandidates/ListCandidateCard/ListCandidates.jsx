import React from "react";
import PropTypes from "prop-types";
import CandidateCard from "./CandidateCard";
import { Box, Button, IconButton } from "@material-ui/core";
import "./ListCandidates.scss";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

ListCandidates.propTypes = {
  listCandidate: PropTypes.object,
};

ListCandidates.defaultProps = {
  listCandidate: {},
};
function ListCandidates({
  listCandidate,
  onPageChange,
  pagination,
  onCandidateChange,
}) {
  const { pageIndex, pageSize, totalCount } = pagination;
  const totalPage = Math.ceil(totalCount / pageSize);
  const handlePageChange = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  return (
    <Box className="listcan-container">
      {listCandidate.items.map((item, index) => (
        <CandidateCard
          key={item.s_ProfileID}
          index={index}
          candidate={item.student_Profile}
          state={item.state}
          onCandidateChange={onCandidateChange}
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

export default ListCandidates;
