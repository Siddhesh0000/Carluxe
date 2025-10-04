"use client";
import React, { useState } from "react";
import { ChevronDown, Star, Filter } from "lucide-react";
import Link from 'next/link';

export default function Inventory() {
  const brands = ["All Brands", "Mercedes-Benz", "BMW", "Porsche", "Audi"];
  const types = ["All Types", "Luxury Sedan", "Sports Sedan", "Sports Car", "Electric"];
  const prices = [
    "All Prices",
    "₹1 Cr - ₹1.5 Cr",
    "₹1.5 Cr - ₹2 Cr",
    "₹2 Cr - ₹2.5 Cr",
    "₹2.5 Cr+",
  ];

  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [selectedPrice, setSelectedPrice] = useState("All Prices");
  const [selectedType, setSelectedType] = useState("All Types");

  // Dropdown visibility states
  const [brandDropdownOpen, setBrandDropdownOpen] = useState(false);
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [priceDropdownOpen, setPriceDropdownOpen] = useState(false);

  const cars = [
    {
      id: 1,
      name: "Mercedes-Benz S-Class",
      type: "Luxury Sedan",
      price: "₹2.65 Cr",
      image:
        "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80",
      year: "2025",
      mileage: "0 km",
      rating: 5.0,
      brand: "Mercedes-Benz",
      features: ["Premium Interior", "Level 3 Autonomous", "Digital Light LED"],
      priceValue: 2.65,
    },
    {
      id: 2,
      name: "BMW M5 Competition",
      type: "Sports Sedan",
      price: "₹1.95 Cr",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
      year: "2025",
      mileage: "2,000 km",
      rating: 4.9,
      brand: "BMW",
      features: ["625 HP", "M xDrive", "Carbon Package"],
      priceValue: 1.95,
    },
    {
      id: 3,
      name: "Porsche 911 GT3",
      type: "Sports Car",
      price: "₹2.50 Cr",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      year: "2024",
      mileage: "1,500 km",
      rating: 5.0,
      brand: "Porsche",
      features: ["520 HP", "Track Ready", "PDK Transmission"],
      priceValue: 2.5,
    },
    {
      id: 4,
      name: "Audi RS e-tron GT",
      type: "Electric",
      price: "₹2.05 Cr",
      image:
        "https://images.unsplash.com/photo-1614200179396-2bdb77879f0c?w=800&q=80",
      year: "2025",
      mileage: "500 km",
      rating: 4.8,
      brand: "Audi",
      features: ["Electric", "640 HP", "Matrix LED"],
      priceValue: 2.05,
    },
  ];

  // Filtering function to apply on cars based on selected filters
  const applyFilters = () => {
    return cars.filter((car) => {
      // Brand filter
      if (selectedBrand !== "All Brands" && car.brand !== selectedBrand) {
        return false;
      }

      // Type filter
      if (selectedType !== "All Types" && car.type !== selectedType) {
        return false;
      }

      // Price filter parsing
      if (selectedPrice !== "All Prices") {
        const price = car.priceValue; // in Cr

        switch (selectedPrice) {
          case "₹1 Cr - ₹1.5 Cr":
            if (!(price >= 1 && price <= 1.5)) return false;
            break;
          case "₹1.5 Cr - ₹2 Cr":
            if (!(price > 1.5 && price <= 2)) return false;
            break;
          case "₹2 Cr - ₹2.5 Cr":
            if (!(price > 2 && price <= 2.5)) return false;
            break;
          case "₹2.5 Cr+":
            if (!(price > 2.5)) return false;
            break;
          default:
            break;
        }
      }

      return true;
    });
  };

  // State for filtered cars after applying filters
  const [filteredCars, setFilteredCars] = useState(cars);

  const handleApplyFilters = () => {
    const filtered = applyFilters();
    setFilteredCars(filtered);
  };

  // Helper to toggle dropdown and close others
  const toggleDropdown = (type) => {
    if (type === "brand") {
      setBrandDropdownOpen(!brandDropdownOpen);
      setTypeDropdownOpen(false);
      setPriceDropdownOpen(false);
    } else if (type === "type") {
      setTypeDropdownOpen(!typeDropdownOpen);
      setBrandDropdownOpen(false);
      setPriceDropdownOpen(false);
    } else if (type === "price") {
      setPriceDropdownOpen(!priceDropdownOpen);
      setBrandDropdownOpen(false);
      setTypeDropdownOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gradient-to-r from-blue-600 to-blue-900 ">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 ">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 mt-20">
            Our Exclusive Collection
          </h1>
          <p className="text-xl text-blue-200">
            Discover our handpicked selection of luxury vehicles
          </p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-blue-950/30 border-t border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 py-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-20">
            {/* Brand Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("brand")}
                className="w-full bg-black/50 border-2 border-blue-500/30 text-white px-6 py-4 rounded-xl flex items-center justify-between hover:border-blue-500 transition"
              >
                <span>{selectedBrand}</span>
                <ChevronDown className="w-5 h-5" />
              </button>
              {brandDropdownOpen && (
                <ul className="absolute z-30 mt-1 w-full bg-black/90 border border-blue-700 rounded-xl max-h-60 overflow-auto text-white">
                  {brands.map((brand) => (
                    <li
                      key={brand}
                      onClick={() => {
                        setSelectedBrand(brand);
                        setBrandDropdownOpen(false);
                      }}
                      className={`cursor-pointer px-6 py-3 hover:bg-blue-700 ${
                        selectedBrand === brand ? "bg-blue-800" : ""
                      }`}
                    >
                      {brand}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Type Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("type")}
                className="w-full bg-black/50 border-2 border-blue-500/30 text-white px-6 py-4 rounded-xl flex items-center justify-between hover:border-blue-500 transition"
              >
                <span>{selectedType}</span>
                <ChevronDown className="w-5 h-5" />
              </button>
              {typeDropdownOpen && (
                <ul className="absolute z-30 mt-1 w-full bg-black/90 border border-blue-700 rounded-xl max-h-60 overflow-auto text-white">
                  {types.map((type) => (
                    <li
                      key={type}
                      onClick={() => {
                        setSelectedType(type);
                        setTypeDropdownOpen(false);
                      }}
                      className={`cursor-pointer px-6 py-3 hover:bg-blue-700 ${
                        selectedType === type ? "bg-blue-800" : ""
                      }`}
                    >
                      {type}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Price Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("price")}
                className="w-full bg-black/50 border-2 border-blue-500/30 text-white px-6 py-4 rounded-xl flex items-center justify-between hover:border-blue-500 transition"
              >
                <span>{selectedPrice}</span>
                <ChevronDown className="w-5 h-5" />
              </button>
              {priceDropdownOpen && (
                <ul className="absolute z-30 mt-1 w-full bg-black/90 border border-blue-700 rounded-xl max-h-60 overflow-auto text-white">
                  {prices.map((price) => (
                    <li
                      key={price}
                      onClick={() => {
                        setSelectedPrice(price);
                        setPriceDropdownOpen(false);
                      }}
                      className={`cursor-pointer px-6 py-3 hover:bg-blue-700 ${
                        selectedPrice === price ? "bg-blue-800" : ""
                      }`}
                    >
                      {price}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Apply Filters Button */}
            <button
              onClick={handleApplyFilters}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-4 rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2 font-bold"
            >
              <Filter className="w-5 h-5" />
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Inventory Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {filteredCars.length === 0 ? (
          <p className="text-center text-white text-2xl font-semibold">
            No cars found matching the filters.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="group relative bg-gradient-to-br from-blue-950/50 to-black border-2 border-blue-900/30 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blue-400 text-sm font-bold uppercase tracking-wide">
                      {car.type}
                    </span>
                    <div className="flex items-center gap-1 bg-blue-500/20 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 fill-blue-400 text-blue-400" />
                      <span className="text-blue-400 text-sm font-bold">
                        {car.rating}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">
                    {car.name}
                  </h3>
                  <div className="flex gap-4 mb-4">
                    <span className="text-gray-400">{car.year}</span>
                    <span className="text-gray-400">{car.mileage}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {car.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-gray-400 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center pt-4 border-t border-blue-900/30">
                    <div>
                      <p className="text-gray-500 text-sm font-semibold">Price</p>
                      <span className="text-3xl font-black bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        {car.price}
                      </span>
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all font-bold">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* footer moved to shared Footer component */}
    </div>
  );
}
