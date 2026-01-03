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
          How we ensure success in SaaS Product Engineering
        </h2>

        {/* Intro */}
        <p className="mt-6 max-w-3xl text-slate-600 leading-relaxed">
          Beyond technical expertise, Aryahs World Infotech follows a structured
          and proven approach to deliver successful SaaS products. Our processes
          ensure scalability, security, performance, cost efficiency, and timely
          delivery of subscription-based platforms.
        </p>

        {/* Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-16">

          {/* SaaS Scoping */}
          <div className="flex gap-5 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
              <FileText size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">
                Product Scoping
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                We analyze business goals, SaaS requirements, and technical
                feasibility to define the right product scope and roadmap while
                preventing scope creep.
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
                Cost Estimation
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                Our team evaluates development effort, cloud infrastructure,
                subscriptions, and maintenance to provide transparent and
                accurate SaaS cost estimates.
              </p>
            </div>
          </div>

          {/* Quality Management */}
          <div className="flex gap-5 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
              <CheckCircle size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">
                Quality Management
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                We ensure quality at every stage through testing, performance
                checks, and validation to deliver reliable and scalable SaaS
                platforms.
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
                Collaboration & Communication
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                Continuous collaboration with stakeholders ensures alignment,
                faster feedback cycles, and smooth SaaS product execution.
              </p>
            </div>
          </div>

          {/* Security Management */}
          <div className="flex gap-5 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">
                Security & Compliance
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                We implement strong security measures, data protection policies,
                and compliance standards to safeguard SaaS platforms and user
                data.
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
                Knowledge Management
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                We maintain proper documentation, version control, and monitoring
                to ensure maintainability and long-term SaaS success.
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
            Get details about our SaaS product engineering approach
          </button>
        </div>

      </div>
    </section>
  );
};

export default SuccessApproach;
