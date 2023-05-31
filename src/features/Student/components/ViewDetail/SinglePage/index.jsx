import React, { useState, useMemo } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./styles.scss";
import DialogResumeOverview from "../DialogResumeOverview";
import loading from "../../../../../assets/gif/Rolling-1.4s-200px.gif";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function _usfTruncate(str, size = 100, description_words = "...") {
  if (!str) return "";
  if (str.length && str.length <= size) return str;
  return str.slice(0, size) + description_words;
}
export default React.memo(function SinglePage(props) {
  console.log("load");
  const loadingGif = <img src={loading}></img>;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page
  const [openOverview, setOpenOverview] = React.useState(false);

  const handleClickOpenResumeDiaLog = (event) => {
    setOpenOverview(true);
  };

  const handleCloseResumeDiaLog = () => {
    setOpenOverview(false);
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  function handleDeleteResume(event) {
    event.stopPropagation();
    event.target.parentElement.style.opacity = 0.5;
    props.onDeleteCV(props.id);
  }

  const { pdf, title } = props;
  const file = useMemo(() => pdf, [pdf]);

  return (
    <>
      <loadingGif />
      <div className="resume-content">
        <div className="resume-content__wrapper">
          <div
            onClick={handleClickOpenResumeDiaLog}
            className="resume-content__item"
          >
            <Document
              loading={
                <div
                  style={{
                    width: "180px",
                    height: "231px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src={loading}
                  ></img>
                </div>
              }
              file={
                "data:application/pdf;base64," +
                (file ? file.replaceAll("\\", "") : "")
              }
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page
                pageNumber={pageNumber}
                options={{ workerSrc: "/pdf.worker.js" }}
              >
                <span onClick={handleDeleteResume} class="close"></span>
                <p className="resume-content__item__bottom">
                  {_usfTruncate(title, 15)}
                </p>
              </Page>
            </Document>
          </div>
        </div>
      </div>
      <DialogResumeOverview
        pdf={file}
        open={openOverview}
        handleClickOpen={handleClickOpenResumeDiaLog}
        handleClose={handleCloseResumeDiaLog}
      />
    </>
  );
})
