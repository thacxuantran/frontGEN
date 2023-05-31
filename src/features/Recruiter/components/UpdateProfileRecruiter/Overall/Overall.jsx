import React from "react";
import PropTypes from "prop-types";
import "./Overall.scss";
import { Box, Typography } from "@material-ui/core";
import CKE from "../CKE/CKE";
import ReactHtmlParser from "react-html-parser";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import ClassicEditor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
Overall.propTypes = {};

function Overall({ recruiterProfile, onChangeOverall }) {
  const [isUpdate, setIsUpdate] = React.useState(false);
  const handleUpdate = (value) => {
    setIsUpdate(value);
  };
  return (
    <Box className="Overall">
      <Box className="Overall__header">
        <Typography
          style={{ fontFamily: "Samsung Sharp Sans", fontSize: "20px" }}
        >
          Overall
        </Typography>
        <Box className="infor-profile__header__editIcon">
          <BorderColorOutlinedIcon
            onClick={() => setIsUpdate(true)}
            style={{ color: "#0DAB42", fontSize: 25 }}
          />
        </Box>
      </Box>
      <hr />
      {!isUpdate ? (
        <Box className="Overall__body ck-content">
          <div className="body__description">
            {recruiterProfile.description
              ? ReactHtmlParser(recruiterProfile.description)
              : ""}
          </div>
        </Box>
      ) : (
        <CKE
          onSetUpdate={handleUpdate}
          defaultRecruiter={recruiterProfile}
          onChangeOverall={onChangeOverall}
        />
      )}
    </Box>
  );
}

export default Overall;
