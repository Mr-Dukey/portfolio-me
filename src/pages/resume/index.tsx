import Layout from "@/components/Layout/Layout";
import dynamic from "next/dynamic";
import Head from "next/head";
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
      <Head>
        <title>Developer || Resume</title>
        <link rel="shortcut icon" href="/logos/coding.png" type="image/x-icon" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] py-8 px-4 text-white">
        {/* PDF Viewer Container */}
        <div className="w-full max-w-4xl h-[60vh] rounded-lg shadow-2xl overflow-y-scroll scrollbar-hide mb-4 bg-gray-900">
          <PDFViewer onDocumentLoadSuccess={onDocumentLoadSuccess} pageNumber={pageNumber} />
        </div>

        {/* Page Navigation */}
        <div className="hidden md:flex md:flex-row gap-4 items-center mb-6">
          <button
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber((prev) => prev - 1)}
            className="px-4 py-2 bg-cyan-500 text-black rounded-md font-medium disabled:opacity-50 transition hover:scale-105"
          >
            Previous
          </button>

          <p className="text-lg">
            Page {pageNumber} of {numPages ?? 1}
          </p>

          <button
            disabled={numPages !== null && pageNumber >= numPages}
            onClick={() => setPageNumber((prev) => prev + 1)}
            className="px-4 py-2 bg-cyan-500 text-black rounded-md font-medium disabled:opacity-50 transition hover:scale-105"
          >
            Next
          </button>
        </div>

        {/* Download Button */}
        <a
          href="/Hariharan.pdf"
          download={'Hariharan.M'}
          className="mt-4 px-6 py-3 border-2 border-cyan-400 text-white rounded-lg font-medium hover:scale-110 hover:shadow-2xl hover:shadow-cyan-300 transition"
        >
          Download Resume
        </a>
      </div>
    </Layout>
  );
}
