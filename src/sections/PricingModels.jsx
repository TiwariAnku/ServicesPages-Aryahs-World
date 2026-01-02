import React from "react";

const PricingModels = () => {
  return (
    <section className="w-full bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.05),transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-28">

        {/* Heading */}
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-16">
          Average cost of different AI & Machine Learning solutions
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Proof of Concept */}
          <div className="group bg-black text-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2">
            <div className="p-10 text-center">
              <h3 className="text-xl font-semibold mb-4">
                AI Proof of Concept (PoC)
              </h3>
              <p className="text-sm text-slate-300 mb-8">
                From <span className="text-lg font-bold">₹ 40,000</span> Onwards
              </p>
            </div>
            <div className="bg-white p-6 text-center">
              <button className="px-6 py-2 border border-slate-900 text-slate-900 font-medium rounded-md hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                Get a customized quote
              </button>
            </div>
          </div>

          {/* Custom AI / ML Solutions (Highlighted) */}
          <div className="group bg-blue-600 text-white rounded-xl shadow-xl scale-105 overflow-hidden transition-all duration-300 hover:-translate-y-2">
            <div className="p-10 text-center">
              <h3 className="text-xl font-semibold mb-4">
                Custom AI / ML Solutions
              </h3>
              <p className="text-sm text-blue-100 mb-8">
                From <span className="text-lg font-bold">₹ 1,00,000</span> Onwards
              </p>
            </div>
            <div className="bg-white p-6 text-center">
              <button className="px-6 py-2 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-600 hover:text-white transition-all">
                Get a customized quote
              </button>
            </div>
          </div>

          {/* Enterprise AI Solutions */}
          <div className="group bg-black text-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2">
            <div className="p-10 text-center">
              <h3 className="text-xl font-semibold mb-4">
                Enterprise AI Solutions
              </h3>
              <p className="text-sm text-slate-300 mb-8">
                From <span className="text-lg font-bold">₹ 2,50,000</span> Onwards
              </p>
            </div>
            <div className="bg-white p-6 text-center">
              <button className="px-6 py-2 border border-slate-900 text-slate-900 font-medium rounded-md hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                Get a customized quote
              </button>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex justify-center">
          <button
            className="
              px-10 py-4
              border-2 border-blue-600
              text-blue-600
              font-semibold
              rounded-md
              hover:bg-blue-600 hover:text-white
              transition-all duration-300
            "
          >
            Click here to know more about our AI & ML Pricing Models
          </button>
        </div>

      </div>
    </section>
  );
};

export default PricingModels;
