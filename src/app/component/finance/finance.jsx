"'use client';"
import { useState } from 'react';
import { Calculator, IndianRupee, Calendar, Percent, TrendingUp, CheckCircle, Shield, Clock, Sparkles, CreditCard, FileText, Award } from 'lucide-react';

export default function Finance() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(5);
  const [focusedField, setFocusedField] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    income: '',
    employment: 'Salaried'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // EMI Calculation
  const principal = loanAmount - downPayment;
  const monthlyRate = interestRate / 12 / 100;
  const months = loanTenure * 12;
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  const totalAmount = emi * months;
  const totalInterest = totalAmount - principal;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Finance application submitted successfully! Our team will contact you soon.');
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
        <div className="max-w-7xl mx-auto">
          {/* Premium Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-6 mt-20">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 blur-xl opacity-50 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 p-4 rounded-2xl">
                  <Calculator className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Car Finance
            </h1>
            <p className="text-xl text-blue-300/80 font-light tracking-wide">Drive your dream car today with flexible financing</p>
            <div className="flex items-center justify-center gap-8 mt-6">
              <div className="flex items-center gap-2 text-blue-400">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm">Instant Approval</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <Percent className="w-5 h-5" />
                <span className="text-sm">Low Interest Rates</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <Shield className="w-5 h-5" />
                <span className="text-sm">100% Secure</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* EMI Calculator Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              
              <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl shadow-2xl border border-blue-500/20 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                      <Calculator className="w-6 h-6 text-blue-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">EMI Calculator</h2>
                  </div>

                  <div className="space-y-8">
                    {/* Loan Amount */}
                    <div>
                      <div className="flex justify-between mb-3">
                        <label className="text-blue-300 font-medium">Loan Amount</label>
                        <span className="text-cyan-400 font-bold text-lg">₹{loanAmount.toLocaleString('en-IN')}</span>
                      </div>
                      <input
                        type="range"
                        min="100000"
                        max="5000000"
                        step="50000"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="w-full h-2 bg-blue-900/30 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                      <div className="flex justify-between text-xs text-blue-400/60 mt-2">
                        <span>₹1L</span>
                        <span>₹50L</span>
                      </div>
                    </div>

                    {/* Down Payment */}
                    <div>
                      <div className="flex justify-between mb-3">
                        <label className="text-blue-300 font-medium">Down Payment</label>
                        <span className="text-cyan-400 font-bold text-lg">₹{downPayment.toLocaleString('en-IN')}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max={loanAmount * 0.5}
                        step="10000"
                        value={downPayment}
                        onChange={(e) => setDownPayment(Number(e.target.value))}
                        className="w-full h-2 bg-blue-900/30 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                      />
                      <div className="flex justify-between text-xs text-blue-400/60 mt-2">
                        <span>₹0</span>
                        <span>₹{(loanAmount * 0.5).toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    {/* Interest Rate */}
                    <div>
                      <div className="flex justify-between mb-3">
                        <label className="text-blue-300 font-medium">Interest Rate</label>
                        <span className="text-cyan-400 font-bold text-lg">{interestRate.toFixed(1)}%</span>
                      </div>
                      <input
                        type="range"
                        min="6"
                        max="15"
                        step="0.5"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full h-2 bg-blue-900/30 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                      <div className="flex justify-between text-xs text-blue-400/60 mt-2">
                        <span>6%</span>
                        <span>15%</span>
                      </div>
                    </div>

                    {/* Loan Tenure */}
                    <div>
                      <div className="flex justify-between mb-3">
                        <label className="text-blue-300 font-medium">Loan Tenure</label>
                        <span className="text-cyan-400 font-bold text-lg">{loanTenure} Years</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="7"
                        step="1"
                        value={loanTenure}
                        onChange={(e) => setLoanTenure(Number(e.target.value))}
                        className="w-full h-2 bg-blue-900/30 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                      />
                      <div className="flex justify-between text-xs text-blue-400/60 mt-2">
                        <span>1 Year</span>
                        <span>7 Years</span>
                      </div>
                    </div>
                  </div>

                  {/* EMI Result Card */}
                  <div className="mt-8 relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-40 group-hover:opacity-60 transition"></div>
                    <div className="relative bg-gradient-to-br from-blue-950 to-cyan-950 rounded-2xl p-6 border border-cyan-500/30">
                      <div className="text-center mb-6">
                        <p className="text-blue-300 text-sm mb-2">Your Monthly EMI</p>
                        <div className="text-5xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                          ₹{Math.round(emi).toLocaleString('en-IN')}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-black/30 rounded-xl p-4 border border-blue-500/20">
                          <p className="text-blue-400/60 text-xs mb-1">Principal Amount</p>
                          <p className="text-white font-bold">₹{principal.toLocaleString('en-IN')}</p>
                        </div>
                        <div className="bg-black/30 rounded-xl p-4 border border-cyan-500/20">
                          <p className="text-cyan-400/60 text-xs mb-1">Total Interest</p>
                          <p className="text-white font-bold">₹{Math.round(totalInterest).toLocaleString('en-IN')}</p>
                        </div>
                        <div className="col-span-2 bg-black/30 rounded-xl p-4 border border-blue-500/20">
                          <p className="text-blue-400/60 text-xs mb-1">Total Amount Payable</p>
                          <p className="text-white font-bold text-xl">₹{Math.round(totalAmount).toLocaleString('en-IN')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 via-blue-500 to-cyan-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              
              <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl shadow-2xl border border-cyan-500/20 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-cyan-600/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
                      <FileText className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Apply for Finance</h2>
                  </div>

                  <div className="space-y-6">
                    {/* Personal Details */}
                    <div>
                      <h3 className="text-lg font-semibold text-blue-300 mb-4">Personal Information</h3>
                      <div className="space-y-4">
                        <div className="relative">
                          <div className={`absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-xl blur opacity-0 transition duration-300 ${focusedField === 'name' ? 'opacity-30' : ''}`}></div>
                          <div className="relative">
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('name')}
                              onBlur={() => setFocusedField(null)}
                              className="w-full px-4 py-4 rounded-xl bg-black/50 text-white border border-cyan-500/30 focus:border-cyan-500 focus:outline-none backdrop-blur-sm transition-all placeholder:text-blue-300/40"
                              placeholder="Full Name"
                              required
                            />
                          </div>
                        </div>

                        <div className="relative">
                          <div className={`absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-xl blur opacity-0 transition duration-300 ${focusedField === 'email' ? 'opacity-30' : ''}`}></div>
                          <div className="relative">
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('email')}
                              onBlur={() => setFocusedField(null)}
                              className="w-full px-4 py-4 rounded-xl bg-black/50 text-white border border-cyan-500/30 focus:border-cyan-500 focus:outline-none backdrop-blur-sm transition-all placeholder:text-blue-300/40"
                              placeholder="Email Address"
                              required
                            />
                          </div>
                        </div>

                        <div className="relative">
                          <div className={`absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-xl blur opacity-0 transition duration-300 ${focusedField === 'phone' ? 'opacity-30' : ''}`}></div>
                          <div className="relative">
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('phone')}
                              onBlur={() => setFocusedField(null)}
                              className="w-full px-4 py-4 rounded-xl bg-black/50 text-white border border-cyan-500/30 focus:border-cyan-500 focus:outline-none backdrop-blur-sm transition-all placeholder:text-blue-300/40"
                              placeholder="Phone Number"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Financial Details */}
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-300 mb-4">Financial Details</h3>
                      <div className="space-y-4">
                        <div className="relative">
                          <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-0 transition duration-300 ${focusedField === 'income' ? 'opacity-30' : ''}`}></div>
                          <div className="relative">
                            <input
                              type="number"
                              name="income"
                              value={formData.income}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('income')}
                              onBlur={() => setFocusedField(null)}
                              className="w-full px-4 py-4 rounded-xl bg-black/50 text-white border border-blue-500/30 focus:border-blue-500 focus:outline-none backdrop-blur-sm transition-all placeholder:text-blue-300/40"
                              placeholder="Monthly Income (₹)"
                              required
                            />
                          </div>
                        </div>

                        <div className="relative">
                          <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-0 transition duration-300 ${focusedField === 'employment' ? 'opacity-30' : ''}`}></div>
                          <div className="relative">
                            <select
                              name="employment"
                              value={formData.employment}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('employment')}
                              onBlur={() => setFocusedField(null)}
                              className="w-full px-4 py-4 rounded-xl bg-black/50 text-white border border-blue-500/30 focus:border-blue-500 focus:outline-none backdrop-blur-sm transition-all appearance-none cursor-pointer"
                              required
                            >
                              <option value="Salaried">Salaried</option>
                              <option value="Self-Employed">Self-Employed</option>
                              <option value="Business">Business Owner</option>
                              <option value="Professional">Professional</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Loan Summary */}
                    <div className="bg-gradient-to-br from-blue-950/50 to-cyan-950/50 rounded-xl p-5 border border-blue-500/20">
                      <h3 className="text-sm font-semibold text-blue-300 mb-3">Your Loan Summary</h3>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-blue-400/60">Loan Amount</p>
                          <p className="text-white font-bold">₹{(loanAmount - downPayment).toLocaleString('en-IN')}</p>
                        </div>
                        <div>
                          <p className="text-cyan-400/60">Monthly EMI</p>
                          <p className="text-white font-bold">₹{Math.round(emi).toLocaleString('en-IN')}</p>
                        </div>
                        <div>
                          <p className="text-blue-400/60">Interest Rate</p>
                          <p className="text-white font-bold">{interestRate}% p.a.</p>
                        </div>
                        <div>
                          <p className="text-cyan-400/60">Tenure</p>
                          <p className="text-white font-bold">{loanTenure} Years</p>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 via-blue-500 to-cyan-600 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                      <button
                        onClick={handleSubmit}
                        className="relative w-full bg-gradient-to-r from-cyan-600 via-blue-500 to-cyan-600 hover:from-cyan-700 hover:via-blue-600 hover:to-cyan-700 text-white font-bold py-5 rounded-xl shadow-2xl transform transition hover:scale-[1.02] focus:outline-none text-lg tracking-wide"
                      >
                        Apply Now
                      </button>
                    </div>

                    <p className="text-center text-cyan-400/50 text-xs">
                      🔒 Your information is secure and will only be used for loan processing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-blue-500/20 text-center">
                <Clock className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-black text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-2">30 Min</div>
                <div className="text-blue-300 text-sm font-medium">Quick Approval</div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-cyan-500/20 text-center">
                <Percent className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2">6.5%</div>
                <div className="text-cyan-300 text-sm font-medium">Interest Rates From</div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-blue-500/20 text-center">
                <Award className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-black text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-2">7 Yrs</div>
                <div className="text-blue-300 text-sm font-medium">Maximum Tenure</div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-cyan-500/20 text-center">
                <CreditCard className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2">₹50L</div>
                <div className="text-cyan-300 text-sm font-medium">Maximum Loan Amount</div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-12 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-8 border border-blue-500/20">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Finance?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/30 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Easy Documentation</h4>
                    <p className="text-blue-300/70 text-sm">Minimal paperwork with quick verification process</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-cyan-600/20 rounded-xl flex items-center justify-center border border-cyan-500/30 flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Flexible Repayment</h4>
                    <p className="text-cyan-300/70 text-sm">Choose tenure that suits your budget and needs</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/30 flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Transparent Process</h4>
                    <p className="text-blue-300/70 text-sm">No hidden charges, clear terms and conditions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}