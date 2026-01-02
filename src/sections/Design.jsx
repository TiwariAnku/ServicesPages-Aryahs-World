import React from "react";

const Design = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">

        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600">
          AI & Machine Learning Solutions
        </h2>

        {/* Content */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Content */}
          <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p>
              At <strong>Aryahs World Infotech</strong>, we help businesses unlock
              the power of Artificial Intelligence and Machine Learning to drive
              innovation, automation, and intelligent decision-making.
            </p>

            <p>
              Modern businesses require AI solutions that are scalable, accurate,
              and aligned with real-world objectives.
            </p>

            <p>
              Our AI engineers and data scientists deeply understand business
              challenges, data patterns, and model behavior to deliver solutions
              that create measurable impact.
            </p>

            <p>
              Our{" "}
              <span className="font-semibold text-slate-900">
                AI & Machine Learning services
              </span>{" "}
              focus on building intelligent systems that learn from data and
              continuously improve over time.
            </p>

            <p className="font-medium text-slate-900">
              Here are the various aspects of our AI & Machine Learning solutions:
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
                alt="AI & Machine Learning Solutions - Aryahs World Infotech"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>

      {/* SERVICES LIST SECTION */}
      <div className="mt-20 max-w-5xl mx-auto space-y-14 px-6">

        {/* Generative AI */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-blue-600">
            Generative AI Applications
          </h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            We develop Generative AI solutions that can create text, images,
            summaries, and insights. These applications help businesses automate
            content creation, enhance creativity, and improve operational
            efficiency.
          </p>
        </div>

        {/* Computer Vision */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-blue-600">
            Computer Vision Systems
          </h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Our computer vision solutions enable machines to analyze images and
            videos for object detection, facial recognition, image classification,
            and real-time visual insights.
          </p>
        </div>

        {/* NLP & Chatbots */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-blue-600">
            NLP & Chatbot Development
          </h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            We build AI-powered NLP systems and chatbots that understand human
            language, automate customer support, and deliver personalized
            conversational experiences.
          </p>
        </div>

        {/* Recommendation Systems */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-blue-600">
            Recommendation Engines
          </h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Our recommendation systems analyze user behavior and preferences to
            deliver personalized product, content, or service suggestions that
            increase engagement and conversions.
          </p>
        </div>

        {/* Predictive Analytics */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-blue-600">
            Predictive Analytics & Forecasting
          </h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            We design predictive analytics models that forecast trends, identify
            risks, and enable data-driven decision-making using historical and
            real-time data.
          </p>
        </div>
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
          Click here to explore our AI & Machine Learning Solutions
        </button>
      </div>

    </section>
  );
};

export default Design;
