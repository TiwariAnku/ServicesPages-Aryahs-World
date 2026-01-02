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
          How we ensure success in GenAI & Automation solutions
        </h2>

        {/* Intro */}
        <p className="mt-6 max-w-3xl text-slate-600 leading-relaxed">
          Beyond technical expertise, Aryahs World Infotech follows a structured
          and proven approach to deliver successful GenAI and automation
          solutions. Our methodology ensures reliability, scalability, security,
          and real-world business impact.
        </p>

        {/* Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-16">

          {/* GenAI Scoping */}
          <div className="flex gap-5 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
              <FileText size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">
                GenAI Scoping & Use Case Definition
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                We evaluate business objectives, automation potential, data
                readiness, and feasibility to define the right GenAI use cases,
                agent workflows, and success metrics.
              </p>
            </div>
          </div>

          {/* Cost Estimation */}
          <div className="flex gap-5 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
              <Calculator size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">
                GenAI Cost & Infrastructure Planning
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                Our team estimates costs related to LLM usage, RAG pipelines,
                agent orchestration, cloud infrastructure, and ongoing
                optimization to ensure transparent pricing.
              </p>
            </div>
          </div>

          {/* Quality & Validation */}
          <div className="flex gap-5 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
              <CheckCircle size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">
                Model Quality & Workflow Validation
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                We validate GenAI outputs, agent decisions, and automation
                workflows using performance metrics, accuracy checks, and
                real-world testing to ensure reliability.
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
                Collaboration & Continuous Feedback
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                Continuous collaboration between GenAI engineers, automation
                architects, and stakeholders ensures alignment with business
                goals and rapid iteration.
              </p>
            </div>
          </div>

          {/* Security & Ethics */}
          <div className="flex gap-5 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">
                AI Security, Privacy & Ethics
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                We implement strong data security, access controls, privacy
                safeguards, and ethical AI practices to protect enterprise data
                and ensure compliance.
              </p>
            </div>
          </div>

          {/* Knowledge Management */}
          <div className="flex gap-5 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
              <BookOpen size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">
                Knowledge, Monitoring & Optimization
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                We maintain detailed documentation, versioning, monitoring, and
                optimization practices for GenAI models and automation workflows
                to ensure long-term scalability and performance.
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
            Get details about our GenAI & Automation project approach
          </button>
        </div>

      </div>
    </section>
  );
};

export default SuccessApproach;
