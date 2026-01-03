import React from "react";

const Design = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">

        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600">
          SaaS Product Engineering
        </h2>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p>
              At <strong>Aryahs World Infotech</strong>, we help businesses design,
              build, and scale modern SaaS products with cloud-native architectures.
            </p>

            <p>
              Our SaaS solutions are built for performance, security, scalability,
              and long-term growth.
            </p>

            <p>
              Our engineers understand SaaS business models, multi-tenancy,
              subscriptions, and system scalability to deliver reliable platforms.
            </p>

            <p>
              Our{" "}
              <span className="font-semibold text-slate-900">
                SaaS Product Engineering services
              </span>{" "}
              focus on delivering production-ready platforms that scale with users.
            </p>

            <p className="font-medium text-slate-900">
              Here are the key aspects of our SaaS engineering services:
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="SaaS Product Engineering"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 max-w-5xl mx-auto space-y-14 px-6">
        <Item title="SaaS Architecture & MVP Development" />
        <Item title="Subscription & Billing Systems" />
        <Item title="Multi-Tenant SaaS Platforms" />
        <Item title="API Development & Integrations" />
      </div>

      <div className="mt-20 flex justify-center">
        <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300">
          Click here to explore our SaaS Product Engineering Services
        </button>
      </div>
    </section>
  );
};

const Item = ({ title }) => (
  <div>
    <h3 className="text-sm font-bold uppercase tracking-wide text-blue-600">
      {title}
    </h3>
    <p className="mt-3 text-slate-700 leading-relaxed">
      Secure, scalable, and production-ready SaaS implementation.
    </p>
  </div>
);

export default Design;
