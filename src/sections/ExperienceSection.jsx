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
                AI & Machine Learning
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Aryahs World Infotech has been delivering{" "}
                <strong>AI & Machine Learning solutions</strong> for over 6+ years,
                helping businesses leverage data-driven intelligence, automation,
                and advanced analytics.
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
                <span className="text-blue-600">50+</span> AI Engineers & <br />
                Data Scientists
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Our experienced team of AI engineers, data scientists, and ML
                specialists work collaboratively to design, build, and deploy
                intelligent AI-driven solutions.
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
                <span className="text-blue-600">200+</span> Successful AI & ML <br />
                Projects Delivered
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We have successfully delivered over 200+ AI and Machine Learning
                projects, ranging from predictive analytics and recommendation
                systems to NLP and computer vision solutions.
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
                AI Solutions For <br />
                <span className="text-blue-600">50+</span> Industries
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We have implemented AI & ML solutions across more than 50
                industries, enabling intelligent automation, data-driven
                decision-making, and scalable innovation.
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
            Click here to explore our AI & Machine Learning Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
