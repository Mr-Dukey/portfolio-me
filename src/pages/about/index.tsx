import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function About() {
  const logos = [
    "react.png",
    "nextjs.png",
    "nodeJS.png",
    "express.png",
    "mongodb.png",
    "javascript.png",
    "typescript.png",
    "tailwind.png",
    "bootstrap.png",
    "flutter.png",
    "git.png",
    "github.png",
  ];

  return (
    <Layout>
      <Head>
        <title>Developer || About</title>
        <link rel="shortcut icon" href="/logos/coding.png" type="image/x-icon" />
      </Head>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-[calc(100vh-150px)] overflow-hidden">
        {/* Left Column */}
        <div className="relative flex items-center justify-center px-8 overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 blur-3xl opacity-70"></div>

          <div className="relative z-10 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent animate-text">
              About Me
            </h1>
            <p className="text-lg md:text-xl mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-500 bg-clip-text text-transparent animate-text">
              I&apos;m Hariharan, a passionate Full-Stack Developer specializing in
              building modern, responsive, and scalable web applications.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative flex flex-col justify-center px-8 gap-8  text-white overflow-hidden">
          {/* Skills Section */}
          <div className="space-y-4 relative overflow-hidden">
            <h2 className="text-3xl font-semibold mb-4">Skills</h2>
            <div className="skills-scroll relative w-full overflow-hidden">
              <div className="flex gap-6 animate-scroll">
                {logos.concat(logos).map((logo, i) => (
                  <div
                    key={i}
                    className="flex gap-2 items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400 flex-shrink-0"
                  >
                    <Image src={`/logos/${logo}`} alt={logo} width={50} height={50} />
                    <span>{logo.split(".")[0]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience / Projects Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Projects & Experience</h2>
            <div className="space-y-3">
              <div className="p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-lg">MCQ Web Application</h3>
                <p className="text-sm text-gray-300">React + Node.js + MongoDB, JWT Auth.</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-lg">Greeny</h3>
                <p className="text-sm text-gray-300">React + Node.js + MongoDB, JWT Auth.</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-lg">Portfolio Website</h3>
                <p className="text-sm text-gray-300">
                  Next.js, Tailwind CSS, animated gradient backgrounds and 3D carousel.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-2">
            <Link
              href="/contact"
              className="px-6 py-3 bg-cyan-500 text-black rounded-lg font-medium hover:bg-cyan-400 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        /* Animated Text Gradient */
        @keyframes text {
          50% { filter: hue-rotate(90deg); }
        }
        .animate-text {
          background-size: 200% 200%;
          animation: text 2s linear infinite;
        }

        /* Auto-Scroll Logos */
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          gap: 1.5rem;
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Fade edges for logos */
        .skills-scroll::before,
        .skills-scroll::after {
          content: '';
          position: absolute;
          top: 0;
          width: 80px;
          height: 100%;
          z-index: 10;
        }
        .skills-scroll::before {
          left: 0;
          background: linear-gradient(to right, #111, transparent);
        }
        .skills-scroll::after {
          right: 0;
          background: linear-gradient(to left, #111, transparent);
        }
      `}</style>
    </Layout>
  );
}
