import React from "react";

const PricingModels = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600 mb-20">
          Average cost of different SaaS Product Engineering solutions
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* CARD 1 */}
          <PricingCard
            title="SaaS MVP Development"
            price="From ₹ 50,000 Onwards"
            variant="light"
          />

          {/* CARD 2 – HIGHLIGHT */}
          <PricingCard
            title="Custom SaaS Platform"
            price="From ₹ 1,50,000 Onwards"
            variant="highlight"
          />

          {/* CARD 3 */}
          <PricingCard
            title="Enterprise SaaS Solutions"
            price="From ₹ 3,00,000 Onwards"
            variant="light"
          />

        </div>

        {/* CTA */}
        <div className="mt-24 flex justify-center px-4">
          <button
            className="
              w-full sm:w-auto
              px-8 sm:px-12
              py-4
              rounded-md
              border-2 border-blue-600
              text-blue-600
              font-semibold
              transition-all duration-300
              hover:bg-blue-600 hover:text-white
              hover:scale-[1.03]
              active:scale-[0.97]
            "
          >
            Click here to know more about our SaaS Pricing Models
          </button>
        </div>

      </div>
    </section>
  );
};

const PricingCard = ({ title, price, variant }) => {
  const base =
    "text-center p-10 transition-all duration-500 hover:-translate-y-2";

  const variants = {
    light: `
      bg-white
      border border-blue-600
      text-slate-900
      shadow-sm
    `,
    highlight: `
      bg-blue-600
      text-white
      shadow-xl
      scale-105
    `,
  };

  return (
    <div className={`${base} ${variants[variant]}`}>
      <h3 className="text-xl sm:text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-6 text-sm sm:text-base font-medium opacity-90">
        {price}
      </p>

      <div className="mt-10">
        <button
          className={`
            px-6 py-2.5
            text-sm font-semibold
            border transition-all duration-300
            ${
              variant === "highlight"
                ? "bg-white text-blue-600 border-white hover:bg-blue-700 hover:text-white"
                : "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
            }
          `}
        >
          Get a customized quote
        </button>
      </div>
    </div>
  );
};

export default PricingModels;
