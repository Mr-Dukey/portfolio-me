import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const nameWords = "Hariharan".split("");
  
  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse move values
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Transform values for different layers
  const textX = useTransform(smoothMouseX, [0, 1000], [-30, 30]);
  const textY = useTransform(smoothMouseY, [0, 1000], [-30, 30]);
  const cardRotateX = useTransform(smoothMouseY, [0, 1000], [10, -10]);
  const cardRotateY = useTransform(smoothMouseX, [0, 1000], [-10, 10]);
  const blobX = useTransform(smoothMouseX, [0, 1000], [50, -50]);
  const blobY = useTransform(smoothMouseY, [0, 1000], [50, -50]);

  // Handle Mouse Move
  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cinematicTransition: any = {
    duration: 1.2,
    ease: [0.16, 1, 0.3, 1],
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: cinematicTransition
    },
  };

  const stats = [
    { label: "Projects Completed", value: "3+", color: "cyan" },
    { label: "Modern Stack", value: "10+", color: "purple" },
    { label: "Experience", value: "1 Year", color: "blue" },
  ];

  const expertises = [
    { 
      title: "Frontend Excellence", 
      desc: "Architecting high-performance, responsive UIs using Next.js and Tailwind CSS.", 
      icon: "🎨",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    { 
      title: "Backend Scalability", 
      desc: "Building robust, secure server-side logic with Node.js, Express, and MongoDB.", 
      icon: "⚙️",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    { 
      title: "Mobile Innovation", 
      desc: "Crafting beautiful cross-platform mobile experiences with Flutter.", 
      icon: "📱",
      gradient: "from-blue-500/20 to-indigo-500/20"
    }
  ];

  const sections = ["hero", "bio", "expertise", "showcase"];
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <Head>
        <title>Hariharan | Full-Stack Developer</title>
        <link rel="shortcut icon" href="/logos/coding.png" type="image/x-icon" />
      </Head>

      {/* Side Dot Navigation */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6">
        {sections.map((id) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`group relative flex items-center justify-end gap-4`}
          >
            <span className={`text-[10px] uppercase tracking-[0.3em] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ${activeSection === id ? 'opacity-100 text-cyan-400' : ''}`}>
              {id}
            </span>
            <div className={`w-3 h-3 rounded-full border border-white/20 transition-all duration-500 scale-100 ${activeSection === id ? 'bg-cyan-500 border-cyan-500 scale-125 shadow-[0_0_15px_rgba(6,182,212,0.8)]' : 'bg-white/5'}`} />
          </button>
        ))}
      </div>

      <div 
        onMouseMove={handleMouseMove} 
        className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth scrollbar-hide relative"
      >
        {/* Cinematic Background Artifacts */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.1, x: Math.random() * 1000, y: Math.random() * 1000 }}
              animate={{ 
                x: [null, Math.random() * 1000, Math.random() * 500],
                y: [null, Math.random() * 1000, Math.random() * 500],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ duration: Math.random() * 20 + 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-1 h-1 bg-cyan-500 rounded-full blur-[2px]"
            />
          ))}
        </div>

        {/* Section 1: Hero */}
        <section id="hero" className="snap-start min-h-screen flex items-center justify-center p-4 md:p-12 relative z-10 overflow-hidden">
          <div className="flex flex-col md:flex-row w-full max-w-7xl items-center justify-center gap-12">
            {/* Parallax Background Aura */}
            <motion.div 
              style={{ x: blobX, y: blobY }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-tr from-cyan-500/10 to-purple-500/10 blur-[150px] rounded-full"
            />

            {/* Left Column: Hero Text */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ x: textX, y: textY }}
              className="flex-1 flex flex-col justify-center items-start space-y-6 max-w-2xl"
            >
              <motion.div variants={itemVariants} className="space-y-3">
                <span className="text-cyan-400 font-bold tracking-widest text-xs sm:text-sm uppercase bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  Welcome to my universe
                </span>
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter">
                  Hi, I&apos;m{" "}
                  <span className="inline-block">
                    {nameWords.map((char, index) => (
                      <motion.span
                        key={index}
                        variants={{
                          hidden: { opacity: 0, y: 50, rotate: 10 },
                          visible: { 
                            opacity: 1, 
                            y: 0, 
                            rotate: 0,
                            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }
                          }
                        }}
                        className="inline-block bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x text-glow"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                </h1>
              </motion.div>

              <motion.p 
                variants={itemVariants} 
                className="text-lg md:text-2xl text-slate-300 max-w-lg leading-relaxed font-light"
              >
                I build <span className="text-white font-medium border-b border-cyan-500/50">immersive digital experiences</span> where 
                clean code meets stunning design.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                <Link href="/contact" className="btn-primary">
                  Get In Touch
                </Link>
                <Link href="/resume" className="btn-outline">
                  View Resume
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column: Profile Image/Art */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ rotateX: cardRotateX, rotateY: cardRotateY }}
              className="flex-1 relative group w-full max-w-md aspect-square preserve-3d"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl group-hover:scale-110 transition-all duration-700 animate-pulse" />
              <motion.div 
                whileHover={{ rotateY: 15, rotateX: -15, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full h-full glass rounded-4xl border border-white/10 overflow-hidden shadow-2xl preserve-3d group"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
                  alt="Workspace" 
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-radial from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-8 left-8 right-8 space-y-2 transform translate-z-20">
                  <div className="h-1 w-12 bg-cyan-500 rounded-full" />
                  <h3 className="text-xl font-bold text-white tracking-wide uppercase">Software Architect</h3>
                  <p className="text-slate-400 text-sm font-light">Transforming ideas into reality.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50"
          >
            <div className="w-[2px] h-10 bg-linear-to-b from-cyan-500 to-transparent" />
            <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          </motion.div>
        </section>

        {/* Section 2: Quick Bio & Stats */}
        <section id="bio" className="snap-start min-h-screen flex items-center justify-center p-4 md:p-12 relative z-10">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={cinematicTransition}
              className="lg:col-span-2 space-y-10"
            >
              <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight tracking-tighter uppercase font-outline-small">
                Crafting <span className="text-cyan-400">clean code</span> for <br />
                <span className="italic text-slate-500">extraordinary</span> humans.
              </h2>
              <p className="text-slate-400 text-xl md:text-3xl leading-relaxed max-w-2xl font-light">
                My approach to development is centered on creating seamless user journeys paired with efficient, 
                scalable backend architectures.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...cinematicTransition, delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="glass-dark p-8 md:p-12 rounded-4xl border border-white/5 flex flex-col items-center justify-center text-center group"
                >
                  <span className={`text-5xl md:text-6xl font-bold text-cyan-400 group-hover:scale-110 transition-transform`}>{stat.value}</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-500 mt-3 font-bold">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Core Expertise */}
        <section id="expertise" className="snap-start min-h-screen flex items-center justify-center p-4 md:p-12 relative z-10">
          <div className="max-w-7xl w-full space-y-16">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase">Core Expertise</h2>
              <div className="h-2 w-24 bg-linear-to-r from-cyan-500 to-purple-600 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {expertises.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...cinematicTransition, delay: i * 0.2 }}
                  whileHover={{ y: -15 }}
                  className={`relative p-10 h-full rounded-4xl glass-dark border border-white/5 overflow-hidden group`}
                >
                  <div className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  <div className="relative space-y-8 h-full flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="text-6xl group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                      <h3 className="text-2xl font-bold text-white uppercase tracking-tight">{item.title}</h3>
                      <p className="text-slate-400 text-lg leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Project Showcase Intro */}
        <section id="showcase" className="snap-start min-h-screen flex items-center justify-center p-4 md:p-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={cinematicTransition}
            className="w-full max-w-6xl relative rounded-5xl overflow-hidden bg-linear-to-br from-cyan-600/10 to-purple-800/20 border border-white/10 p-12 md:p-32 flex flex-col items-center text-center space-y-10"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />
            
            <h2 className="text-5xl md:text-8xl font-bold text-white max-w-4xl tracking-tight leading-tight uppercase">
              Ready to bring your <span className="text-glow text-cyan-400">vision</span> to life?
            </h2>
            <p className="text-slate-300 text-xl md:text-3xl max-w-2xl font-light">
              Check out my full project portfolio to see how I turn complexity into elegance.
            </p>
            <div className="pt-8 scale-125">
              <Link href="/about" className="btn-primary">
                View All Projects
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
}
