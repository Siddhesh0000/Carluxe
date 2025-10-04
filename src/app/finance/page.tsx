"use client";
import React from "react";
import Finance from "../component/finance/finance";
import Navbar from "../component/common/Navbar";
import Footer from "../component/common/Footer";

export default function FinancePage() {
  return (
    <>
      <Navbar />
      <Finance />
      <Footer />
    </>
  );
}
