import Layout from "@/components/Layout/Layout";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";

const cinematicTransition: any = {
  duration: 1.2,
  ease: [0.16, 1, 0.3, 1],
};

const PDFViewer = dynamic(() => import("../../components/PDFViewer/PDFViewer"), {
  ssr: false,
});

export default function Resume() {
  const [numPages, setNumPages] = useState<number | null>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <Layout>
      <Head>
        <title>Hariharan | CV</title>
        <link rel="shortcut icon" href="/logos/coding.png" type="image/x-icon" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-[85vh] py-12 px-4 text-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={cinematicTransition}
          className="w-full max-w-5xl flex flex-col items-center"
        >
          <div className="text-center mb-8 space-y-2">
            <span className="text-cyan-400 font-bold tracking-widest text-xs uppercase underline underline-offset-8 decoration-cyan-500/50">Full Professional Dossier</span>
            <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">Curriculum Vitae</h1>
          </div>

          {/* PDF Viewer Container - Full Vertical View */}
          <div className="w-full glass-dark rounded-4xl border border-white/10 shadow-2xl mb-12 p-4 md:p-12 relative overflow-hidden transition-all duration-700">
            <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-cyan-500/5 to-transparent pointer-events-none" />
            <PDFViewer onDocumentLoadSuccess={onDocumentLoadSuccess} showAll={true} />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-cyan-500/5 to-transparent pointer-events-none" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 w-full justify-center max-w-4xl">
            {/* Download Button - Primary Action */}
            <motion.a
              href="/Hariharan.pdf"
              download={'Hariharan.M-Resume.pdf'}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-3 px-12 py-4 text-lg group"
            >
              <HiDownload className="text-xl group-hover:animate-bounce" />
              Download Full PDF
            </motion.a>
          </div>
          
          {/* Scroll Tip */}
          {numPages && numPages > 1 && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 2 }}
              className="mt-4 text-xs tracking-widest uppercase text-slate-500"
            >
              Scroll to view all {numPages} pages
            </motion.p>
          )}
        </motion.div>
      </div>
    </Layout>
  );
}
