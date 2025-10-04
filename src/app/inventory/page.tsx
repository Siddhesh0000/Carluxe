"use client";
import React from "react";
import Inventory from "../component/Inventory/Inventory";
import Navbar from "../component/common/Navbar";
import Footer from "../component/common/Footer";

export default function InventoryPage() {
  return (
    <>
      <Navbar />
      <Inventory />
      <Footer />
    </>
  );
}