import React from "react";

const FAQ = () => {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-600 mb-16">
          SaaS Product Engineering FAQs
        </h2>

        {/* FAQ LIST */}
        <div className="max-w-4xl mx-auto space-y-5">
          {faqData.map((item, index) => (
            <details
              key={index}
              className="
                group
                border border-blue-200
                rounded-xl
                p-5 sm:p-6
                transition-all duration-300
                hover:border-blue-400
              "
            >
              <summary
                className="
                  flex justify-between items-center
                  cursor-pointer
                  font-semibold
                  text-slate-900
                  text-base sm:text-lg
                  list-none
                "
              >
                {item.q}
                <span
                  className="
                    ml-4
                    text-blue-600
                    transition-transform duration-300
                    group-open:rotate-180
                  "
                >
                  ▼
                </span>
              </summary>

              <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                {item.a}
              </p>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
};

const faqData = [
  {
    q: "What is SaaS product engineering?",
    a: "SaaS product engineering covers the complete lifecycle of building cloud-based software, including architecture, development, deployment, and scaling.",
  },
  {
    q: "Do you build multi-tenant SaaS platforms?",
    a: "Yes, we design secure multi-tenant SaaS platforms with proper data isolation, role-based access, and scalability.",
  },
  {
    q: "Can you integrate subscription billing systems?",
    a: "Absolutely. We integrate billing and payment systems such as Stripe, Razorpay, PayPal, and other subscription-based payment gateways.",
  },
  {
    q: "How long does SaaS MVP development take?",
    a: "Typically, a SaaS MVP takes around 6–10 weeks depending on features, integrations, and complexity.",
  },
];

export default FAQ;
