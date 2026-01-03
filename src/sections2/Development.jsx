import React from "react";

const Development = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">

        {/* Heading */}
        <h2 className="text-left text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600">
          SaaS Development Services
        </h2>

        {/* Content + Image */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p>
              A scalable SaaS product requires a robust development architecture.
              Our <strong>SaaS development services</strong> are designed to build
              secure, scalable, and cloud-ready platforms that meet modern
              business demands.
            </p>

            <p>
              To ensure optimal performance, our SaaS engineers leverage
              cloud-native technologies, DevOps practices, and industry best
              standards. We are committed to delivering high-quality SaaS
              solutions that drive long-term business growth.
            </p>

            <p>
              Here are the various aspects of our SaaS development services:
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                alt="SaaS Development Services"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* SERVICE POINTS */}
        <div className="mt-20 max-w-5xl space-y-14">
          <Item
            title="SaaS MVP Development"
            desc="We build SaaS MVPs with core features to validate business ideas quickly while ensuring scalability and performance."
          />
          <Item
            title="Custom SaaS Platform Development"
            desc="Our custom SaaS solutions are tailored to specific business requirements with flexible architecture and integrations."
          />
          <Item
            title="Enterprise SaaS Development"
            desc="We develop enterprise-grade SaaS platforms with advanced security, multi-tenancy, and high availability."
          />
        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <button
            className="
              px-8 py-4
              border-2 border-blue-600
              text-blue-600
              font-semibold
              rounded-md
              hover:bg-blue-600 hover:text-white
              transition-all duration-300
            "
          >
            Click here to know more about our SaaS Development Process
          </button>
        </div>

      </div>
    </section>
  );
};

const Item = ({ title, desc }) => (
  <div>
    <h3 className="text-sm font-bold uppercase tracking-wide text-blue-600">
      {title}
    </h3>
    <p className="mt-3 text-slate-700 leading-relaxed">
      {desc}
    </p>
  </div>
);

export default Development;
