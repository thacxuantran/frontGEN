import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import './styles.scss';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function AllPagePDF(props) {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const { pdf } = props;

    return (
        <Document
            file={"data:application/pdf;base64," + pdf}
            options={{ workerSrc: "/pdf.worker.js" }}
            onLoadSuccess={onDocumentLoadSuccess}
        >
            {Array.from(new Array(numPages), (el, index) => (
                <Page size="A4" key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
        </Document>
    );
}