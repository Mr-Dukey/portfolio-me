import Layout from "@/components/Layout/Layout";
import dynamic from "next/dynamic";
import { useState } from "react";
const PDFViewer = dynamic(() => import("../../components/PDFViewer/PDFViewer"), {
  ssr: false,
});

export default function Resume() {
    const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState<number | null>(null);
   const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] py- px-4 text-white">

        <div className="w-full max-w-4xl h-[60vh] rounded-lg shadow-lg overflow-y-scroll scroll-bar-hidden scrollbar-hide mb-2">
          <PDFViewer onDocumentLoadSuccess={onDocumentLoadSuccess} pageNumber={pageNumber} />
        </div>

        <div className="flex gap-4 items-center">
        <button
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber((prev) => prev - 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <p>
          Page {pageNumber} of {numPages}
        </p>

        <button
          disabled={numPages !== null && pageNumber >= numPages}
          onClick={() => setPageNumber((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

        <a
          href="/Hariharan.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-6 py-3 border-2 border-cyan-400 text-white rounded-lg font-medium hover:scale-110 hover:shadow-2xl hover:shadow-cyan-300 hover hover:text-white transition"
        >
          Download Resume
        </a>
      </div>
    </Layout>
  );
}
