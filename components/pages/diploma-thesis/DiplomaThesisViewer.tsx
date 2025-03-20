import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

const DiplomaThesisViewer = ({
  onDocumentLoadSuccess,
  pageNumber,
  setPageLoading,
  setPageNumber,
  setNoData,
  width,
  height,
}) => {
  return (
    <Document
      className="select-text drop-shadow-pixel"
      file="diploma-thesis.pdf"
      loading={null}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      <Page
        className="clip-rounded-pixel"
        pageNumber={pageNumber}
        loading={() => setPageLoading(true)}
        onLoadSuccess={() => setPageLoading(false)}
        onLoadError={() => setPageNumber(1)}
        noData={() => setNoData(true)}
        renderAnnotationLayer={false}
        width={width}
        height={height}
      />
    </Document>
  );
};

export default DiplomaThesisViewer;
