"use client";
import React, { useState } from "react";
import { CheckCircle, User, Mail, Phone, Car, DollarSign } from 'lucide-react';
import Navbar from "../component/common/Navbar";
import Footer from "../component/common/Footer";

export default function ApplyFinance() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    carModel: "",
    downPayment: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="bg-blue-900 rounded-2xl max-w-lg w-full p-10 shadow-xl border border-blue-700">
          <h1 className="text-4xl font-extrabold text-blue-200 mb-6 text-center tracking-wide mt-16">
            Apply for Finance
          </h1>
          <p className="mb-10 text-blue-300 text-center text-lg leading-relaxed">
            Fill out this form to start your luxury car financing journey.
          </p>
          {!submitted ? (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <User className="w-5 h-5 text-blue-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-black text-blue-100 border border-blue-600 rounded-lg py-3 pl-10 pr-4 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition"
                />
              </div>
              <div className="relative">
                <Mail className="w-5 h-5 text-blue-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full bg-black text-blue-100 border border-blue-600 rounded-lg py-3 pl-10 pr-4 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition"
                />
              </div>
              <div className="relative">
                <Phone className="w-5 h-5 text-blue-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full bg-black text-blue-100 border border-blue-600 rounded-lg py-3 pl-10 pr-4 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition"
                />
              </div>
              <div className="relative">
                <Car className="w-5 h-5 text-blue-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  name="carModel"
                  value={form.carModel}
                  onChange={handleChange}
                  placeholder="Interested Car Model"
                  className="w-full bg-black text-blue-100 border border-blue-600 rounded-lg py-3 pl-10 pr-4 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition"
                />
              </div>
              <div className="relative">
                <DollarSign className="w-5 h-5 text-blue-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="number"
                  name="downPayment"
                  value={form.downPayment}
                  onChange={handleChange}
                  min="0"
                  placeholder="Down Payment (Optional)"
                  className="w-full bg-black text-blue-100 border border-blue-600 rounded-lg py-3 pl-10 pr-4 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-xl font-extrabold tracking-wide transform transition hover:scale-105 hover:from-cyan-500 hover:to-blue-600 shadow-lg"
              >
                Submit Application
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center text-blue-200 text-xl text-center py-20">
              <CheckCircle className="w-16 h-16 mb-4 text-cyan-400 animate-pulse" />
              Thank you for your application! Our finance team will contact you soon.
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
