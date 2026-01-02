import React from "react";

const Design = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">

        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600">
          GenAI & Automation Services
        </h2>

        {/* Content */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Content */}
          <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p>
              At <strong>Aryahs World Infotech</strong>, we empower businesses
              with next-generation Generative AI and intelligent automation
              solutions that enhance productivity, streamline operations, and
              enable autonomous decision-making.
            </p>

            <p>
              Modern enterprises require AI systems that can reason, retrieve
              knowledge, and automate complex workflows efficiently.
            </p>

            <p>
              Our AI experts design and deploy scalable GenAI architectures that
              integrate seamlessly with enterprise systems and real-world
              business processes.
            </p>

            <p>
              Our{" "}
              <span className="font-semibold text-slate-900">
                GenAI & Automation services
              </span>{" "}
              focus on building intelligent systems that can plan, execute, and
              continuously improve with minimal human intervention.
            </p>

            <p className="font-medium text-slate-900">
              Here are the key offerings under our GenAI & Automation services:
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80"
                alt="GenAI & Automation Services - Aryahs World Infotech"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>

      {/* SERVICES LIST SECTION */}
      <div className="mt-20 max-w-5xl mx-auto space-y-14 px-6">

        {/* AI Agents */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-blue-600">
            AI Agents & Agentic Workflows
          </h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            We build autonomous AI agents capable of reasoning, planning, and
            executing multi-step workflows across APIs, tools, databases, and
            enterprise systems to automate complex business operations.
          </p>
        </div>

        {/* RAG */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-blue-600">
            RAG (Retrieval-Augmented Generation) Systems
          </h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Our RAG solutions combine large language models with enterprise data
            sources to deliver accurate, context-aware responses while ensuring
            data security and minimizing hallucinations.
          </p>
        </div>

        {/* Video & Image Intelligence */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-blue-600">
            Video & Image Intelligence Platforms
          </h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            We develop AI-powered platforms for video analytics, image
            recognition, object detection, facial recognition, and real-time
            visual intelligence across industries.
          </p>
        </div>

        {/* Automation */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-blue-600">
            Business Process Automation using AI
          </h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Our AI-driven automation solutions streamline repetitive and
            decision-intensive business processes such as document processing,
            approvals, reporting, and operational workflows.
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
          Click here to explore our GenAI & Automation Services
        </button>
      </div>

    </section>
  );
};

export default Design;
