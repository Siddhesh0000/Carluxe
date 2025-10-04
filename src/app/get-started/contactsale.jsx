"use client";
import React, { useState } from "react";
import Navbar from "../component/common/Navbar";
import Footer from "../component/common/Footer";

export default function ContactSales() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // yahan API call ya form handle logic ayega
    setSent(true);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="max-w-lg w-full bg-blue-900 rounded-xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-blue-200 mb-4 text-center">
            Contact Our Sales Team
          </h1>
          <p className="text-blue-100 mb-8 text-center">
            Get in touch, our team will respond as soon as possible.
          </p>
          {!sent ? (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded bg-black text-blue-100 border border-blue-500 focus:outline-none"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded bg-black text-blue-100 border border-blue-500 focus:outline-none"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded bg-black text-blue-100 border border-blue-500 focus:outline-none"
                placeholder="How can we help you?"
                value={form.message}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-bold"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="text-blue-200 text-xl text-center py-8">
              Thank you for reaching out! Our sales team will contact you soon.
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
