import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import { HiBriefcase, HiAcademicCap, HiBadgeCheck, HiCalendar } from "react-icons/hi";

export default function About() {
  const logos = [
    "react.png", "nextjs.png", "nodeJS.png", "express.png", "mongodb.png", 
    "javascript.png", "typescript.png", "tailwind.png", "bootstrap.png", 
    "flutter.png", "git.png", "github.png"
  ];

  const marqueeLogos = [...logos, ...logos, ...logos];

  const cinematicTransition: any = {
    duration: 1.2,
    ease: [0.16, 1, 0.3, 1],
  };

  const experience = [
    {
      role: "Full Stack Developer",
      company: "Segolsys, Coimbatore",
      period: "Aug 2023 – Present",
      points: [
        "Designed and maintained responsive UIs using React and Next.js.",
        "Developed high-performance RESTful APIs with Node.js and Express.",
        "Optimized MongoDB schemas and queries, enhancing data processing efficiency.",
        "Implemented secure server-side authentication and fine-grained authorization."
      ],
      color: "cyan"
    },
    {
      role: "Java Developer Intern",
      company: "SHIASH Info Solutions, Chennai",
      period: "Dec 2022 – Feb 2023",
      points: [
        "Built scalable microservices with Spring Boot, reducing deployment time by 40%.",
        "Optimized database indexing, leading to a 30% reduction in API response times.",
        "Collaborated on backend logic and database architectural improvements."
      ],
      color: "purple"
    }
  ];

  const education = [
    {
      degree: "B.Sc Computer Science",
      institution: "Kongunadu Arts and Science College, Coimbatore",
      year: "2020 – 2023",
      grade: "First Class"
    }
  ];

  const certifications = [
    { 
      title: "MERN Stack Development", 
      provider: "IDM Techpark, Coimbatore",
      period: "June 2023 – Aug 2023"
    },
    { 
      title: "Java Developer Training", 
      provider: "SHIASH Info Solutions, Chennai",
      period: "Dec 2022 – Feb 2023"
    },
    { 
      title: "MEAN Stack Development Intern", 
      provider: "KCS AAKKAM Institution, Coimbatore",
      period: "Aug 2022 – Oct 2022"
    },
    { 
      title: "Python Development", 
      provider: "Shiash Info Solutions, Chennai",
      period: "2022"
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Hariharan | About My Journey</title>
        <link rel="shortcut icon" href="/logos/coding.png" type="image/x-icon" />
      </Head>

      <div className="flex flex-col w-full min-h-[80vh] py-12 px-4 md:px-0 space-y-32">
        {/* Section 1: Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={cinematicTransition}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-cyan-400 font-bold tracking-widest text-sm uppercase bg-white/5 px-3 py-1 rounded-full border border-white/10">
                About My Journey
              </span>
              <h1 className="text-5xl md:text-7xl font-bold bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent tracking-tighter">
                Bridging Logic <br />
                <span className="text-cyan-400 italic font-medium">&</span> Aesthetics.
              </h1>
            </div>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl font-light">
              I am a <span className="text-white font-medium">MERN Stack Developer</span> with over 2 years of experience 
              building dynamic applications. I find beauty in clean code and specialized in optimizing 
              performance—reducing load times by up to <span className="text-cyan-400 font-bold">30%</span> in mission-critical projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={cinematicTransition}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/20 to-purple-600/20 blur-[100px] rounded-full animate-pulse" />
            <div className="relative h-full w-full glass rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
                alt="Programming" 
                fill 
                className="object-cover opacity-60"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-dark to-transparent" />
              <div className="absolute bottom-10 left-10 space-y-2">
                <div className="h-1 w-12 bg-cyan-500 rounded-full" />
                <p className="text-slate-400 text-sm font-light uppercase tracking-[0.2em]">Based in</p>
                <p className="text-2xl font-bold text-white uppercase tracking-tight">Tamil Nadu, IN</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 2: Work Experience Timeline */}
        <div className="space-y-16">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase">Professional Path</h2>
            <div className="h-1 w-24 bg-linear-to-r from-cyan-500 to-purple-600 rounded-full" />
          </div>

          <div className="relative max-w-4xl mx-auto space-y-12">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 hidden md:block" />
            
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...cinematicTransition, delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-dark border-2 border-white/20 z-10 items-center justify-center">
                   <div className={`w-1.5 h-1.5 rounded-full bg-${job.color}-500`} />
                </div>
                
                <div className="w-full md:w-1/2 space-y-4 glass-dark p-8 rounded-4xl border border-white/5 hover:border-white/20 transition-all group">
                  <div className="flex items-center gap-3">
                    <HiBriefcase className={`text-2xl text-${job.color}-400 group-hover:scale-110 transition-transform`} />
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">{job.role}</h3>
                  </div>
                  <div className="space-y-1">
                    <p className={`text-sm font-bold text-${job.color}-400`}>{job.company}</p>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <HiCalendar /> {job.period}
                    </div>
                  </div>
                  <ul className="space-y-3 pt-4 border-t border-white/5">
                    {job.points.map((p, j) => (
                      <li key={j} className="text-sm text-slate-400 leading-relaxed flex gap-2">
                        <span className={`text-${job.color}-500`}>▹</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 3: Tech Arsenal (Existing Marquee) */}
        <div className="space-y-12 py-12">
          <div className="text-center space-y-3">
            <p className="text-cyan-400 font-bold tracking-[0.3em] text-xs uppercase underline underline-offset-8 decoration-cyan-500/50">My Toolkit</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter">Technology Arsenal</h2>
          </div>
          
          <div className="relative overflow-hidden w-full h-32 flex items-center">
            <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-dark to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-dark to-transparent z-10" />
            
            <motion.div 
              className="flex gap-16 whitespace-nowrap"
              animate={{ x: [0, -100 * logos.length] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {marqueeLogos.map((logo, index) => (
                <div key={index} className="flex-none group">
                  <Image
                    src={`/logos/${logo}`}
                    alt={logo}
                    width={80}
                    height={80}
                    className="opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 cursor-pointer object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Section 4: Academic & Training */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={cinematicTransition}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <HiAcademicCap className="text-4xl text-cyan-400" />
              <h3 className="text-3xl font-bold text-white uppercase tracking-tight underline decoration-cyan-500/30 underline-offset-8">Academic Grounding</h3>
            </div>
            {education.map((edu, i) => (
              <div key={i} className="glass-dark p-8 rounded-3xl border border-white/5 space-y-4 group hover:bg-white/5 transition-all">
                <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                <div className="space-y-1">
                  <p className="text-cyan-400 font-medium">{edu.institution}</p>
                  <p className="text-sm text-slate-500 uppercase tracking-widest">{edu.year} | {edu.grade}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={cinematicTransition}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <HiBadgeCheck className="text-4xl text-purple-400" />
              <h3 className="text-3xl font-bold text-white uppercase tracking-tight underline decoration-purple-500/30 underline-offset-8">Certifications</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, i) => (
                <div key={i} className="glass-dark p-6 rounded-2xl border border-white/5 flex flex-col space-y-2 group hover:bg-white/5 transition-all">
                  <h4 className="text-white font-bold tracking-tight text-lg group-hover:text-purple-400 transition-colors uppercase">{cert.title}</h4>
                  <div className="flex flex-col space-y-0.5">
                    <p className="text-sm text-slate-300 font-medium">{cert.provider}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{cert.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Section 5: Projects Highlight (Refined with Metrics) */}
        <div className="space-y-12">
           <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase">Project Spotlight</h2>
            <div className="h-1.5 w-24 bg-linear-to-r from-purple-500 to-cyan-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard 
              title="MCQ Web Platform" 
              desc="A full-stack MERN quiz engine with secure authentication and admin controls for real-time score management." 
              link="#" 
              tag="MERN Stack"
              metrics="200+ Active Users"
            />
            <ProjectCard 
              title="Greeny E-Commerce" 
              desc="Sustainable shopping platform for organic products, featuring high-speed 30% reduction in API overhead." 
              link="#" 
              tag="E-Commerce"
              metrics="Optimized Performance"
            />
            <ProjectCard 
              title="Attendance V2" 
              desc="Next-gen student tracking using automated verification across web and mobile ecosystems." 
              link="#" 
              tag="Full-Stack"
              metrics="Improved Scalability"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

function ProjectCard({ title, desc, link, tag, metrics }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="glass-dark p-8 rounded-[3rem] border border-white/5 flex flex-col justify-between h-full group hover:bg-white/5 transition-all relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-5 bg-white/10 rounded-bl-3xl">
         <span className="text-[10px] uppercase tracking-widest text-white">{tag}</span>
      </div>
      <div className="space-y-4">
        <h4 className="text-2xl font-bold text-white tracking-tight">{title}</h4>
        <p className="text-slate-400 text-sm leading-relaxed font-light">{desc}</p>
      </div>
      <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
        <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-[0.2em]">{metrics}</span>
        <Link href={link} className="text-white hover:text-cyan-400 transition-colors text-sm font-medium">Explore ▹</Link>
      </div>
    </motion.div>
  );
}
