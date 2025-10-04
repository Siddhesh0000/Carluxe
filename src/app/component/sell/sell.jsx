"'use client';"
import { useState } from 'react';
import { Car, Calendar, IndianRupee, Phone, User, Mail, MapPin, Gauge, Fuel, Upload, Sparkles, Shield, Clock } from 'lucide-react';

export default function Sell() {
  const [formData, setFormData] = useState({
    ownerName: '',
    email: '',
    phone: '',
    carBrand: '',
    carModel: '',
    year: '',
    price: '',
    mileage: '',
    fuelType: 'Petrol',
    location: '',
    description: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Your car listing has been submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl top-1/2 -right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 left-1/3 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,149,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,149,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Premium Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-6 mt-15">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 blur-xl opacity-50 animate-pulse "></div>
                <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 p-4 rounded-2xl">
                  <Car className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent ">
              Sell Your Car
            </h1>
            <p className="text-xl text-blue-300/80 font-light tracking-wide">Transform your ride into instant cash</p>
            <div className="flex items-center justify-center gap-8 mt-6">
              <div className="flex items-center gap-2 text-blue-400">
                <Shield className="w-5 h-5" />
                <span className="text-sm">100% Secure</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <Clock className="w-5 h-5" />
                <span className="text-sm">Quick Process</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm">Best Value</span>
              </div>
            </div>
          </div>

          {/* Premium Form Card */}
          <div className="relative group">
            {/* Glowing Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl shadow-2xl border border-blue-500/20 overflow-hidden">
              {/* Top Accent Line */}
              <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              
              <div className="p-10">
                <div className="space-y-8">
                  {/* Owner Details Section */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                        <User className="w-5 h-5 text-blue-400" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">Owner Details</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative">
                        <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-0 transition duration-300 ${focusedField === 'ownerName' ? 'opacity-30' : ''}`}></div>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400" />
                          <input
                            type="text"
                            name="ownerName"
                            value={formData.ownerName}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('ownerName')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/50 text-white border border-blue-500/30 focus:border-blue-500 focus:outline-none backdrop-blur-sm transition-all placeholder:text-blue-300/40"
                            placeholder="Full Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-0 transition duration-300 ${focusedField === 'email' ? 'opacity-30' : ''}`}></div>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/50 text-white border border-blue-500/30 focus:border-blue-500 focus:outline-none backdrop-blur-sm transition-all placeholder:text-blue-300/40"
                            placeholder="Email Address"
                            required
                          />
                        </div>
                      </div>
                      <div className="relative md:col-span-2">
                        <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-0 transition duration-300 ${focusedField === 'phone' ? 'opacity-30' : ''}`}></div>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('phone')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/50 text-white border border-blue-500/30 focus:border-blue-500 focus:outline-none backdrop-blur-sm transition-all placeholder:text-blue-300/40"
                            placeholder="Phone Number"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

                  {/* Car Details Section */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-cyan-600/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                        <Car className="w-5 h-5 text-cyan-400" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">Vehicle Information</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      <div className="relative">
                        <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-0 transition duration-300 ${focusedField === 'carBrand' ? 'opacity-30' : ''}`}></div>
                        <div className="relative">
                          <Car className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
                          <input
                            type="text"
                            name="carBrand"
                            value={formData.carBrand}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('carBrand')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/50 text-white border border-blue-500/30 focus:border-cyan-500 focus:outline-none backdrop-blur-sm transition-all placeholder:text-blue-300/40"
                            placeholder="Brand"
                            required
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-0 transition duration-300 ${focusedField === 'carModel' ? 'opacity-30' : ''}`}></div>
                        <div className="relative">
                          <Car className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
                          <input
                            type="text"
                            name="carModel"
                            value={formData.carModel}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('carModel')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/50 text-white border border-blue-500/30 focus:border-cyan-500 focus:outline-none backdrop-blur-sm transition-all placeholder:text-blue-300/40"
                            placeholder="Model"
                            required
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-0 transition duration-300 ${focusedField === 'year' ? 'opacity-30' : ''}`}></div>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
                          <input
                            type="number"
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('year')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/50 text-white border border-blue-500/30 focus:border-cyan-500 focus:outline-none backdrop-blur-sm transition-all placeholder:text-blue-300/40"
                            placeholder="Year"
                            min="1990"
                            max="2025"
                            required
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-0 transition duration-300 ${focusedField === 'price' ? 'opacity-30' : ''}`}></div>
                        <div className="relative">
                          <IndianRupee className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
                          <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('price')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/50 text-white border border-blue-500/30 focus:border-cyan-500 focus:outline-none backdrop-blur-sm transition-all placeholder:text-blue-300/40"
                            placeholder="Price (₹)"
                            required
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-0 transition duration-300 ${focusedField === 'mileage' ? 'opacity-30' : ''}`}></div>
                        <div className="relative">
                          <Gauge className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
                          <input
                            type="number"
                            name="mileage"
                            value={formData.mileage}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('mileage')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/50 text-white border border-blue-500/30 focus:border-cyan-500 focus:outline-none backdrop-blur-sm transition-all placeholder:text-blue-300/40"
                            placeholder="KM Driven"
                            required
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-0 transition duration-300 ${focusedField === 'fuelType' ? 'opacity-30' : ''}`}></div>
                        <div className="relative">
                          <Fuel className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
                          <select
                            name="fuelType"
                            value={formData.fuelType}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('fuelType')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/50 text-white border border-blue-500/30 focus:border-cyan-500 focus:outline-none backdrop-blur-sm transition-all appearance-none cursor-pointer"
                            required
                          >
                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                            <option value="CNG">CNG</option>
                            <option value="Electric">Electric</option>
                            <option value="Hybrid">Hybrid</option>
                          </select>
                        </div>
                      </div>
                      <div className="relative lg:col-span-3">
                        <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-0 transition duration-300 ${focusedField === 'location' ? 'opacity-30' : ''}`}></div>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
                          <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('location')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/50 text-white border border-blue-500/30 focus:border-cyan-500 focus:outline-none backdrop-blur-sm transition-all placeholder:text-blue-300/40"
                            placeholder="Location (City, State)"
                            required
                          />
                        </div>
                      </div>
                      <div className="relative lg:col-span-3">
                        <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-0 transition duration-300 ${focusedField === 'description' ? 'opacity-30' : ''}`}></div>
                        <div className="relative">
                          <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('description')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full px-4 py-4 rounded-xl bg-black/50 text-white border border-blue-500/30 focus:border-cyan-500 focus:outline-none backdrop-blur-sm transition-all resize-none placeholder:text-blue-300/40"
                            placeholder="Additional Details (Features, Condition, Service History...)"
                            rows="4"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

                  {/* Upload Section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                        <Upload className="w-5 h-5 text-blue-400" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">Upload Photos</h2>
                    </div>
                    <div className="relative group cursor-pointer">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                      <div className="relative border-2 border-dashed border-blue-500/40 rounded-xl p-12 text-center hover:border-blue-500/60 transition bg-black/30 backdrop-blur-sm">
                        <div className="relative inline-block mb-4">
                          <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-xl"></div>
                          <Upload className="relative w-16 h-16 text-blue-400 mx-auto" />
                        </div>
                        <p className="text-blue-200 mb-2 text-lg font-medium">Click to upload or drag and drop</p>
                        <p className="text-blue-400/60 text-sm">PNG, JPG up to 10MB each</p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                    <button
                      onClick={handleSubmit}
                      className="relative w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-700 text-white font-bold py-5 rounded-xl shadow-2xl transform transition hover:scale-[1.02] focus:outline-none text-lg tracking-wide"
                    >
                      Submit Listing
                    </button>
                  </div>

                  <p className="text-center text-blue-400/50 text-sm">
                    🔒 Your information is secure and encrypted
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-blue-500/20 text-center">
                <Clock className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                <div className="text-4xl font-black text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-2">24hrs</div>
                <div className="text-blue-300 font-medium">Lightning Fast Response</div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-cyan-500/20 text-center">
                <Shield className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                <div className="text-4xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2">100%</div>
                <div className="text-cyan-300 font-medium">Secure & Verified</div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-blue-500/20 text-center">
                <Sparkles className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                <div className="text-4xl font-black text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-2">Best</div>
                <div className="text-blue-300 font-medium">Market Value Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}