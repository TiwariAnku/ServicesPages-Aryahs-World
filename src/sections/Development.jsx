import React from "react";

const Development = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">

        {/* Heading */}
        <h2 className="text-left text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600">
          AI & Machine Learning Development Services
        </h2>

        {/* Top Content */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Content */}
          <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p>
              Intelligent AI solutions require a strong and scalable development
              foundation. Our{" "}
              <span className="font-semibold text-slate-900">
                AI & Machine Learning development services
              </span>{" "}
              focus on building secure, scalable, and high-performance AI systems
              that solve real-world business problems.
            </p>

            <p>
              To ensure reliability and accuracy, our AI development team uses
              modern frameworks, cloud platforms, and industry best practices.
              Aryahs World Infotech delivers AI-driven solutions that enable
              automation, insight generation, and smarter decision-making.
            </p>

            <p className="font-medium text-slate-900">
              Here are the various aspects of our AI & Machine Learning
              development services:
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
                alt="AI & Machine Learning Development Services"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>

        {/* SERVICES LIST */}
        <div className="mt-20 max-w-5xl space-y-14">

          {/* AI Proof of Concept */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-blue-600">
              AI Proof of Concept (PoC)
            </h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              We develop AI Proof of Concept solutions to validate ideas, assess
              feasibility, and demonstrate value before full-scale deployment.
              This helps businesses reduce risk and make informed investment
              decisions.
            </p>
          </div>

          {/* Custom AI / ML Model Development */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-blue-600">
              Custom AI & ML Model Development
            </h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Our team designs and develops custom machine learning models
              tailored to your data and business objectives, including predictive
              models, classification systems, recommendation engines, and NLP
              solutions.
            </p>
          </div>

          {/* Enterprise AI Solutions */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-blue-600">
              Enterprise AI Solutions
            </h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              We build enterprise-grade AI solutions that integrate seamlessly
              with existing systems, support large-scale data processing, and
              ensure security, compliance, and long-term scalability.
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
            Click here to know more about our AI & ML Development Process
          </button>
        </div>

      </div>
    </section>
  );
};

export default Development;
