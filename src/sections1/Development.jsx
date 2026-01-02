import React from "react";

const Development = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">

        {/* Heading */}
        <h2 className="text-left text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600">
          GenAI & Automation Development Services
        </h2>

        {/* Top Content */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Content */}
          <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p>
              Intelligent GenAI solutions require a strong, scalable, and
              production-ready development foundation. Our{" "}
              <span className="font-semibold text-slate-900">
                GenAI & Automation development services
              </span>{" "}
              focus on building secure, high-performance systems that automate
              workflows and enable autonomous decision-making.
            </p>

            <p>
              Our GenAI development team leverages modern AI frameworks, cloud
              platforms, and best practices to deliver reliable, scalable, and
              enterprise-ready automation solutions. Aryahs World Infotech helps
              businesses transform operations using agentic AI and intelligent
              automation.
            </p>

            <p className="font-medium text-slate-900">
              Here are the various aspects of our GenAI & Automation development
              services:
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80"
                alt="GenAI & Automation Development Services"
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
              GenAI Proof of Concept (PoC)
            </h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              We develop GenAI Proof of Concept solutions to validate agent-based
              workflows, RAG pipelines, and automation use cases before
              enterprise-scale deployment, reducing risk and accelerating ROI.
            </p>
          </div>

          {/* AI Agents & Automation Development */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-blue-600">
              AI Agents & Automation Development
            </h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Our team designs and develops autonomous AI agents capable of
              reasoning, planning, and executing multi-step workflows across
              tools, APIs, databases, and enterprise systems.
            </p>
          </div>

          {/* Enterprise GenAI Solutions */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-blue-600">
              Enterprise GenAI Solutions
            </h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              We build enterprise-grade GenAI and automation solutions that
              integrate seamlessly with existing systems, support large-scale
              data processing, and ensure security, compliance, and long-term
              scalability.
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
            Click here to know more about our GenAI & Automation Development
            Process
          </button>
        </div>

      </div>
    </section>
  );
};

export default Development;
