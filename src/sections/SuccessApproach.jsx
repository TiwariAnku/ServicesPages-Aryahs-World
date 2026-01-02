import React from "react";
import {
  FileText,
  Calculator,
  CheckCircle,
  Handshake,
  ShieldCheck,
  BookOpen
} from "lucide-react";

const SuccessApproach = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">

        {/* Heading */}
        <h2 className="text-left text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 max-w-3xl">
          How we ensure success in AI & Machine Learning solutions
        </h2>

        {/* Intro */}
        <p className="mt-6 max-w-3xl text-slate-600 leading-relaxed">
          Beyond technical expertise, Aryahs World Infotech follows a structured
          and proven approach to deliver successful AI & Machine Learning
          solutions. Our processes ensure data accuracy, model reliability,
          scalability, security, and timely delivery of AI-driven systems.
        </p>

        {/* Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-16">

          {/* AI Scoping */}
          <div className="flex gap-5 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
              <FileText size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">AI Scoping</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                We analyze business objectives, data availability, and feasibility
                to define the right AI problem statement, model scope, and success
                metrics while avoiding unnecessary complexity.
              </p>
            </div>
          </div>

          {/* Cost Estimation */}
          <div className="flex gap-5 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
              <Calculator size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">AI Cost Estimation</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                Our team evaluates data preparation, model training, cloud
                infrastructure, and maintenance costs to provide accurate and
                transparent AI project estimates.
              </p>
            </div>
          </div>

          {/* Quality & Model Validation */}
          <div className="flex gap-5 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
              <CheckCircle size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">
                Model Quality & Validation
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                We continuously evaluate AI models using performance metrics,
                bias detection, and validation techniques to ensure accuracy,
                reliability, and real-world effectiveness.
              </p>
            </div>
          </div>

          {/* Collaboration */}
          <div className="flex gap-5 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
              <Handshake size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">
                Collaboration & Feedback
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                Continuous collaboration between data scientists, engineers, and
                stakeholders ensures model alignment with business goals and
                faster iteration cycles.
              </p>
            </div>
          </div>

          {/* AI Security & Ethics */}
          <div className="flex gap-5 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">
                AI Security & Ethics
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                We implement robust data security, privacy controls, and ethical
                AI practices to protect sensitive data and ensure compliance with
                industry standards.
              </p>
            </div>
          </div>

          {/* Knowledge & Model Management */}
          <div className="flex gap-5 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
              <BookOpen size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">
                Knowledge & Model Management
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                We maintain detailed documentation, version control, and model
                monitoring practices to ensure scalability, maintainability,
                and long-term success of AI solutions.
              </p>
            </div>
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
            Get details about our AI & ML project approach
          </button>
        </div>

      </div>
    </section>
  );
};

export default SuccessApproach;
