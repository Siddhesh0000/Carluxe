"use client";
import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronRight, Star, Award, Users, Shield, Zap, TrendingUp, Clock } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1920&q=80',
      title: 'Experience Ultimate Luxury',
      subtitle: 'Premium Cars Await You'
    },
    {
      image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=1920&q=80',
      title: 'Drive Your Dreams',
      subtitle: 'Exclusive Collection'
    },
    {
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&q=80',
      title: 'Power Meets Elegance',
      subtitle: 'Discover Performance'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const featuredCars = [
    {
      id: 1,
      name: 'Lamborghini Huracán',
      price: '₹3.20 Cr',
      image: 'https://images.unsplash.com/photo-1519440692660-19e63072c22c?w=800&q=80',
      type: 'Super Sports',
      rating: 5.0,
      specs: '0-100 in 2.9s'
    },
    {
      id: 2,
      name: 'Porsche 911 Turbo S',
      price: '₹2.70 Cr',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
      type: 'Sports Coupe',
      rating: 4.9,
      specs: '640 HP'
    },
    {
      id: 3,
      name: 'Mercedes-AMG GT',
      price: '₹2.25 Cr',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
      type: 'Grand Tourer',
      rating: 4.8,
      specs: 'V8 BiTurbo'
    },
    {
      id: 4,
      name: 'Audi R8 V10',
      price: '₹2.65 Cr',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
      type: 'Super Sports',
      rating: 4.9,
      specs: '562 HP'
    },
    {
      id: 5,
      name: 'BMW M8 Competition',
      price: '₹2.40 Cr',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
      type: 'Luxury Sports',
      rating: 4.7,
      specs: '617 HP'
    },
    {
      id: 6,
      name: 'Ferrari F8 Tributo',
      price: '₹4.60 Cr',
      image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80',
      type: 'Super Sports',
      rating: 5.0,
      specs: '710 HP V8'
    }
  ];

  const categories = [
    {
      name: 'Luxury Sedans',
      image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=600&q=80',
      count: '150+ Cars'
    },
    {
      name: 'Sports Cars',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80',
      count: '200+ Cars'
    },
    {
      name: 'SUVs',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80',
      count: '180+ Cars'
    },
    {
      name: 'Electric',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80',
      count: '80+ Cars'
    }
  ];

  const features = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Instant Booking',
      description: 'Book test drives in seconds'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Certified Quality',
      description: 'Every car thoroughly inspected'
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Best Prices',
      description: 'Competitive market rates'
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: '24/7 Support',
      description: 'Always here to help you'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Slider */}
      <div className="relative h-screen pt-20">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center z-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-2xl md:text-3xl text-blue-400 mb-8 font-bold">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-xl text-lg font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all">
                      Explore Collection
                    </button>
                    <button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentSlide ? 'bg-blue-500 w-12' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Search Section */}
      <div className="relative -mt-24 z-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-900/90 to-blue-800/90 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30 shadow-2xl shadow-blue-500/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Brand"
              className="bg-black/50 border-2 border-blue-500/30 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-blue-500 transition"
            />
            <input
              type="text"
              placeholder="Model"
              className="bg-black/50 border-2 border-blue-500/30 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-blue-500 transition"
            />
            <input
              type="text"
              placeholder="Price Range"
              className="bg-black/50 border-2 border-blue-500/30 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-blue-500 transition"
            />
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-4 rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2 font-bold">
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-blue-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/50">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
              Browse By <span className="text-blue-500">Category</span>
            </h2>
            <p className="text-xl text-gray-400">Find your perfect match</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-blue-400 font-semibold">{category.count}</p>
                </div>
                <div className="absolute top-4 right-4 z-20 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  View All →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Cars */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-blue-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
                Featured <span className="text-blue-500">Collection</span>
              </h2>
              <p className="text-xl text-gray-400">Handpicked premium vehicles</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-blue-500 hover:text-blue-400 transition font-bold text-lg">
              View All
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <div key={car.id} className="group relative bg-gradient-to-br from-blue-950/50 to-black border-2 border-blue-900/30 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  FEATURED
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blue-400 text-sm font-bold uppercase tracking-wide">{car.type}</span>
                    <div className="flex items-center gap-1 bg-blue-500/20 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 fill-blue-400 text-blue-400" />
                      <span className="text-blue-400 text-sm font-bold">{car.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">{car.name}</h3>
                  <p className="text-gray-400 mb-4 font-semibold">{car.specs}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-blue-900/30">
                    <div>
                      <p className="text-gray-500 text-sm font-semibold">Starting at</p>
                      <span className="text-3xl font-black bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">{car.price}</span>
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all font-bold">
                      Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-500/90 to-cyan-500/90 z-10" />
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80"
              alt="CTA Background"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
              <div>
                <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                  Ready To Drive Your Dream?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join thousands of satisfied customers who found their perfect car with us
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/inventory">
                    <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-black text-lg hover:bg-gray-100 transition-all shadow-2xl">
                      Browse Inventory
                    </button>
                  </Link>
                  <button className="bg-black/30 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-xl font-black text-lg hover:bg-black/50 transition-all">
                    Schedule Test Drive
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}