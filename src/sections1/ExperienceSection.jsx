import React from "react";
import { Users, Briefcase, Scale, Building2 } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section className="w-full bg-white">
      <div
        className="
          max-w-7xl mx-auto
          px-6 sm:px-8 lg:px-12
          py-24 sm:py-28
        "
      >
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          
          {/* Card 1 */}
          <div className="flex gap-6">
            <div className="mt-1">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-600/10 text-blue-600">
                <Briefcase size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                <span className="text-blue-600">6+</span> Years Of Experience In <br />
                GenAI & Automation
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Aryahs World Infotech has over 6+ years of experience delivering
                <strong> Generative AI and automation solutions</strong> that help
                organizations streamline operations and adopt intelligent systems.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex gap-6">
            <div className="mt-1">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-600/10 text-blue-600">
                <Users size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                <span className="text-blue-600">50+</span> GenAI Engineers & <br />
                Automation Specialists
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Our expert team of GenAI engineers, ML specialists, and automation
                architects design and deploy intelligent AI agents, RAG systems,
                and enterprise automation solutions.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex gap-6">
            <div className="mt-1">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-600/10 text-blue-600">
                <Scale size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                <span className="text-blue-600">200+</span> GenAI & Automation <br />
                Projects Delivered
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We have successfully delivered over 200+ GenAI and automation
                projects, including AI agents, intelligent workflows, vision
                systems, and AI-powered business automation.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex gap-6">
            <div className="mt-1">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-600/10 text-blue-600">
                <Building2 size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                GenAI Solutions For <br />
                <span className="text-blue-600">50+</span> Industries
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Our GenAI and automation solutions are deployed across more than
                50 industries, enabling intelligent decision-making, operational
                efficiency, and scalable digital transformation.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <button
            className="
              px-10 py-4
              border-2 border-slate-900
              text-slate-900
              font-semibold
              rounded-md
              hover:bg-slate-900 hover:text-white
              transition-all duration-300
            "
          >
            Click here to explore our GenAI & Automation Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
