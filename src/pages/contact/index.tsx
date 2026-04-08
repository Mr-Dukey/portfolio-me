import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const cinematicTransition: any = {
  duration: 1.2,
  ease: [0.16, 1, 0.3, 1],
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <Head>
        <title>Hariharan | Contact Me</title>
        <link rel="shortcut icon" href="/logos/coding.png" type="image/x-icon" />
      </Head>

      <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 py-12 perspective-1000">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateX: -5 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          whileHover={{ rotateY: 2, rotateX: -1 }}
          transition={cinematicTransition}
          className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-5 gap-0 overflow-hidden glass-dark rounded-4xl border border-white/10 shadow-2xl preserve-3d"
        >

          {/* Left Side: Contact Info (2 columns) */}
          <div className="lg:col-span-2 bg-linear-to-br from-cyan-600/20 to-purple-600/20 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-[50px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 blur-[50px] rounded-full" />
            
            <div className="relative z-10 space-y-6">
              <div>
                <span className="text-cyan-400 font-bold tracking-widest text-xs uppercase">Available for hire</span>
                <h2 className="text-4xl font-bold text-white mt-2">Let&apos;s build something <span className="text-cyan-400">great</span> together.</h2>
              </div>
              
              <div className="space-y-6 pt-8">
                <motion.a 
                  href="mailto:harimahe.1317@gmail.com"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <HiMail className="text-cyan-400 text-2xl" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Email</p>
                    <p className="text-slate-200 font-medium group-hover:text-cyan-400 transition-colors">harimahe.1317@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a 
                  href="https://www.linkedin.com/in/hariharan-m-20116a21a" 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                    <FaLinkedinIn className="text-blue-400 text-2xl" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">LinkedIn</p>
                    <p className="text-slate-200 font-medium group-hover:text-blue-400 transition-colors">hariharan-m</p>
                  </div>
                </motion.a>

                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300">
                    <HiLocationMarker className="text-purple-400 text-2xl" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Location</p>
                    <p className="text-slate-200 font-medium">Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form (3 columns) */}
          <div className="lg:col-span-3 p-8 md:p-12 bg-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300 ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-dark/50 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-dark/50 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 ml-1">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full bg-dark/50 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all placeholder:text-slate-600 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full py-4 text-lg"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

