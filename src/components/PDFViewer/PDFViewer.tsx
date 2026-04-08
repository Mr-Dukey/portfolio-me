import { useState, useEffect, useMemo } from "react";
import { PDFDocumentProxy } from "pdfjs-dist";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Use worker from local node_modules
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

interface PdfProps {
  showAll?: boolean;
  onDocumentLoadSuccess: (pdf: PDFDocumentProxy) => void;
}

export default function PDFViewer({
  onDocumentLoadSuccess,
  showAll = true,
}: PdfProps) {
  const [width, setWidth] = useState(800);
  const [numPages, setNumPages] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(Math.min(800, window.innerWidth - 64));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLoadSuccess = (pdf: PDFDocumentProxy) => {
    setNumPages(pdf.numPages);
    onDocumentLoadSuccess(pdf);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <Document
        file="/Hariharan.pdf"
        onLoadSuccess={handleLoadSuccess}
        className="w-full flex flex-col items-center gap-8"
        renderMode="canvas"
      >
        {showAll && numPages ? (
          Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={width}
              className="shadow-2xl rounded-sm"
              loading={
                <div className="h-[60vh] flex items-center justify-center text-cyan-500 animate-pulse">
                  Loading Page {index + 1}...
                </div>
              }
            />
          ))
        ) : (
          <Page
            pageNumber={1}
            width={width}
            className="shadow-2xl rounded-sm"
          />
        )}
      </Document>
    </div>
  );
}
