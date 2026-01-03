import React from "react";

const Design = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">

        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600">
          EdTech & CareerTech Solutions
        </h2>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p>
              At <strong>Aryahs World Infotech</strong>, we design and develop
              innovative EdTech and CareerTech platforms that transform how
              students learn, grow, and build their careers.
            </p>

            <p>
              Our solutions are built to support digital learning, skill
              development, assessments, and AI-powered career guidance.
            </p>

            <p>
              We create scalable platforms for schools, colleges, training
              institutes, and enterprises with a strong focus on user experience
              and performance.
            </p>

            <p>
              Our{" "}
              <span className="font-semibold text-slate-900">
                EdTech & CareerTech solutions
              </span>{" "}
              empower learners and educators through data-driven insights and
              modern technology.
            </p>

            <p className="font-medium text-slate-900">
              Here are the key aspects of our EdTech & CareerTech services:
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f
"
                alt="EdTech & CareerTech Solutions"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 max-w-5xl mx-auto space-y-14 px-6">
        <Item title="AI-Powered Career Guidance Platforms" />
        <Item title="LMS & Online Learning Platforms" />
        <Item title="Admission & Placement Portals" />
      </div>

      <div className="mt-20 flex justify-center">
        <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300">
          Click here to explore our EdTech & CareerTech Solutions
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
      Scalable, secure, and user-centric digital education solutions.
    </p>
  </div>
);

export default Design;
