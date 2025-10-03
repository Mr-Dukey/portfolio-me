import { PDFDocumentProxy } from "pdfjs-dist";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Use worker from local node_modules instead of CDN
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

interface PdfProps {
  pageNumber: number;
  onDocumentLoadSuccess: (pdf: PDFDocumentProxy) => void;
}

export default function PDFViewer({
  onDocumentLoadSuccess,
  pageNumber,
}: PdfProps) {
  return (
    <div className="w-full flex flex-col items-center ">
      <Document file="/Hariharan.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} width={800} />
      </Document>
    </div>
  );
}
