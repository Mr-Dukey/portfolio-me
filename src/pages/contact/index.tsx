// pages/contact.tsx
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import { useState } from "react";

export default function Index() {
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
        <link
          rel="shortcut icon"
          href="/logos/coding.png"
          type="image/x-icon"
        />
      </Head>
      <div className="h-[80vh] flex flex-col items-center justify-center px-4">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 border-2 border-white p-8 rounded-2xl shadow-lg">
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-cyan-500">Get in Touch</h2>
            <p className="text-white mb-6">
              Have a question or want to work together? Fill out the form or
              reach us directly:
            </p>
            <div className="space-y-3 text-white">
              <p>
                📧 Email:{" "}
                <span className="font-medium text-gray-700">contact@example.com</span>
              </p>
              <p>
                📞 Phone: <span className="font-medium text-gray-700">+91 98765 43210</span>
              </p>
              <p>
                📍 Address: <span className="font-medium text-gray-700">Chennai, India</span>
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
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 text-white focus:ring-blue-400"
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
                className="w-full mt-1 p-3 border text-white border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
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
                className="w-full mt-1 p-3 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
