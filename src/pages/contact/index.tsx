// pages/contact.tsx
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";

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
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <Head>
        <title>Developer || Contact</title>
        <link rel="shortcut icon" href="/logos/coding.png" type="image/x-icon" />
      </Head>

      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
        <motion.div
          className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 border-2 border-white p-8 rounded-2xl shadow-lg bg-gray-900"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-cyan-500">Get in Touch</h2>
            <div className="space-y-3 text-white">
              <p>
                📧 Email:{" "}
                <span className="font-medium text-gray-300">contact@example.com</span>
              </p>
              <p>
                📞 Phone: <span className="font-medium text-gray-300">+91 98765 43210</span>
              </p>
              <p>
                📍 Address: <span className="font-medium text-gray-300">Chennai, India</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 bg-gray-800 text-white"
              />
            </div>
            <div>
              <label className="block text-white font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 bg-gray-800 text-white"
              />
            </div>
            <div>
              <label className="block text-white font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full mt-1 p-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 bg-gray-800 text-white"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-cyan-500 text-black rounded-lg font-semibold transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </Layout>
  );
}
