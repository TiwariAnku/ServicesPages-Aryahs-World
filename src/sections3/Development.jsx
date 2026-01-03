import React from "react";

const Development = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">

        {/* Heading */}
        <h2 className="text-left text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600">
          EdTech & CareerTech Development Services
        </h2>

        {/* Content + Image */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p>
              A modern education ecosystem requires scalable and intelligent
              digital platforms. Our{" "}
              <strong>EdTech & CareerTech development services</strong> focus on
              building secure, learner-centric, and future-ready education and
              career platforms.
            </p>

            <p>
              We leverage cloud technologies, analytics, and modern development
              practices to deliver high-performance learning management systems,
              AI-powered career guidance platforms, and student engagement
              portals.
            </p>

            <p>
              Here are the various aspects of our EdTech & CareerTech development
              services:
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="EdTech & CareerTech Development Services"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* SERVICE POINTS */}
        <div className="mt-20 max-w-5xl space-y-14">
          <Item
            title="AI-Powered Career Guidance Platforms"
            desc="We develop intelligent career guidance systems that help students make informed career decisions using data-driven insights."
          />
          <Item
            title="LMS & Online Learning Platforms"
            desc="Our scalable LMS platforms support digital learning, assessments, content delivery, and student progress tracking."
          />
          <Item
            title="Admission & Placement Portals"
            desc="We build secure admission and placement portals that streamline student onboarding, applications, and hiring workflows."
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
            Click here to know more about our EdTech & CareerTech Development Process
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
