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
          How we ensure success in EdTech & CareerTech solutions
        </h2>

        {/* Intro */}
        <p className="mt-6 max-w-3xl text-slate-600 leading-relaxed">
          Beyond technical expertise, Aryahs World Infotech follows a structured
          and proven approach to deliver successful EdTech and CareerTech
          platforms. Our processes ensure learning effectiveness, scalability,
          data security, performance, and timely delivery of digital education
          solutions.
        </p>

        {/* Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-16">

          {/* Solution Scoping */}
          <div className="flex gap-5 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
              <FileText size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">
                Solution Scoping
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                We analyze educational objectives, learner needs, and platform
                requirements to define the right EdTech and CareerTech solution
                scope and roadmap.
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
                content delivery, and maintenance to provide accurate and
                transparent project estimates.
              </p>
            </div>
          </div>

          {/* Quality & Learning Effectiveness */}
          <div className="flex gap-5 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
              <CheckCircle size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">
                Quality & Learning Effectiveness
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                We ensure content quality, platform performance, and usability
                through continuous testing and validation across devices.
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
                Continuous collaboration with educators, institutions, and
                stakeholders ensures alignment and faster delivery cycles.
              </p>
            </div>
          </div>

          {/* Security & Privacy */}
          <div className="flex gap-5 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">
                Security & Data Privacy
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                We implement strong data security, privacy controls, and
                compliance standards to protect student and institutional data.
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
                Knowledge & Platform Management
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                We maintain detailed documentation, version control, and platform
                monitoring to ensure scalability and long-term success.
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
            Get details about our EdTech & CareerTech solution approach
          </button>
        </div>

      </div>
    </section>
  );
};

export default SuccessApproach;
