import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const images = [
    "/assests/img1.svg",
    "/assests/img2.svg",
    "/assests/img3.svg",
    "/assests/img4.svg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [imageIndex]);

  return (
    <Layout>
      <div className="flex-grow grid grid-cols-2 w-full h-[85vh] relative">
        {/* Left Column with animated cyan gradient */}
        <div className="relative flex flex-col justify-center items-start px-12 text-white overflow-hidden">
          {/* Content */}
          <h1 className="text-5xl font-bold mb-4 relative z-10">
            Hi, I&apos;m Hariharan
          </h1>
          <h2 className="text-2xl mb-6 relative z-10">Full-Stack Developer</h2>
          <p className="text-lg mb-6 relative z-10">
            I build modern and responsive web applications using React, Next.js,
            Node.js, and MongoDB.
          </p>
          <div className="flex gap-4 relative z-10">
            <a
              href="#projects"
              className="px-6 py-3 font-medium relative hover:text-blue-400 after:block after:h-[2px] after:w-0 after:mt-1 after:rounded-full after:bg-gradient-to-r after:from-blue-600 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 font-medium relative hover:text-blue-400 after:block after:h-[2px] after:w-0 after:mt-1 after:rounded-full after:bg-gradient-to-r after:from-blue-600 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex items-center justify-center">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute w-1/3 h-auto transition-opacity duration-1000 ${
                index === imageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-contain"
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
