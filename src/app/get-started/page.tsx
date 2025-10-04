"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "../component/common/Navbar";
import Footer from "../component/common/Footer";

export default function GetStarted() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="max-w-3xl text-center p-8">
          <h1 className="text-5xl font-black text-white mb-6">
            Get Started with CarLuxe
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Fill out a short form or contact our sales team to begin your journey towards owning a luxury car.
          </p>
          <div className="flex justify-center gap-4">
            <button
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-bold"
              onClick={() => router.push("/contact-sales")}
            >
              Contact Sales
            </button>
            <button
              className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold"
              onClick={() => router.push("/apply-finance")}
            >
              Apply for Finance
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
