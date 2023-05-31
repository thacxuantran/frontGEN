import React from "react";
import "./styles.scss";
import DialogUploadCV from "../DialogUploadCV";
import { useSnackbar } from "notistack";

const formatDate = (str) => {
  let date = new Date(str);
  return (
    (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
    "/" +
    (date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) +
    "/" +
    date.getFullYear()
  );
};
const Resume = ({ info, onUploadCV, studentDetail }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [openUpload, setOpenUpload] = React.useState(false);

  const handleClickOpenResumeDiaLog = () => {
    setOpenUpload(true);
  };

  const handleCloseResumeDiaLog = () => {
    setOpenUpload(false);
  };
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleFiles = (files) => {
    if (validateFile(files[0])) {
      setSelectedFile(files[0]);
      uploadFiles(files[0]);
    } else {
      setSelectedFile(files[0]);
      enqueueSnackbar("Not support this file extension", {
        variant: "error",
      });
    }
  };
  const dragOver = (e) => {
    // var node = document.querySelector('.resume-content__item__wrapper');
    // node.style.opacity = 0.5;
    e.preventDefault();
  };

  const dragEnter = (e) => {
    var node = document.querySelector(".resume-content__item__wrapper");
    node.style.opacity = 0.5;
    e.preventDefault();
  };

  const dragLeave = (e) => {
    var node = document.querySelector(".resume-content__item__wrapper");
    node.style.opacity = 1;
    e.preventDefault();
  };

  const fileDrop = (e) => {
    e.preventDefault();
    var node = document.querySelector(".resume-content__item__wrapper");
    node.style.opacity = 1;
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFiles(files);
    } else {
      return;
    }
  };
  const validateFile = (file) => {
    const validTypes = ["text/plain", "application/pdf"];
    if (
      validTypes.indexOf(file.type) === -1 &&
      file.name.indexOf("docx") === -1
    ) {
      return false;
    }
    return true;
  };

  const uploadFiles = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", file.name);
    formData.append("studentId", studentDetail.s_ProfileID);
    onUploadCV(formData);
  };
  return (
    <div className="resume-content">
      <div
        className="resume-content__wrapper"
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
      >
        <div className="resume-content__item">
          <div
            onClick={handleClickOpenResumeDiaLog}
            className="resume-content__item__wrapper"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 68 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M34 0C28.391 0.0175887 22.9733 2.04057 18.7255 5.7035C15.47 8.5085 13.1112 12.1635 12.5035 15.8312C5.3805 17.4037 0 23.6087 0 31.1015C0 39.8055 7.259 46.75 16.0693 46.75H31.875V24.2547L22.7545 33.3795C22.3555 33.7785 21.8143 34.0027 21.25 34.0027C20.6857 34.0027 20.1445 33.7785 19.7455 33.3795C19.3465 32.9805 19.1223 32.4393 19.1223 31.875C19.1223 31.3107 19.3465 30.7695 19.7455 30.3705L32.4955 17.6205C32.6929 17.4226 32.9274 17.2656 33.1856 17.1585C33.4437 17.0513 33.7205 16.9962 34 16.9962C34.2795 16.9962 34.5563 17.0513 34.8144 17.1585C35.0726 17.2656 35.3071 17.4226 35.5045 17.6205L48.2545 30.3705C48.6535 30.7695 48.8777 31.3107 48.8777 31.875C48.8777 32.4393 48.6535 32.9805 48.2545 33.3795C47.8555 33.7785 47.3143 34.0027 46.75 34.0027C46.1857 34.0027 45.6445 33.7785 45.2455 33.3795L36.125 24.2547V46.75H53.924C61.6335 46.75 68 40.6725 68 33.0352C68 26.0822 62.7215 20.417 55.9555 19.4608C54.9228 8.49575 45.4325 0 34 0ZM31.875 61.625V46.75H36.125V61.625C36.125 62.1886 35.9011 62.7291 35.5026 63.1276C35.1041 63.5261 34.5636 63.75 34 63.75C33.4364 63.75 32.8959 63.5261 32.4974 63.1276C32.0989 62.7291 31.875 62.1886 31.875 61.625Z"
                fill="#0DAB42"
              />
            </svg>
          </div>
        </div>
      </div>
      <DialogUploadCV
        studentDetail={studentDetail}
        onUploadCV={onUploadCV}
        open={openUpload}
        handleClickOpen={handleClickOpenResumeDiaLog}
        handleClose={handleCloseResumeDiaLog}
      />
    </div>
  );
};

export default Resume;
