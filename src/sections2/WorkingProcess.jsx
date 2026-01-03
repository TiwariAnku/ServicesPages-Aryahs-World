import React from "react";
import {
  Lightbulb,
  ClipboardList,
  PenTool,
  Code2,
  Bug,
  Rocket,
} from "lucide-react";

const steps = [
  {
    title: "Ideation",
    desc:
      "We begin by understanding your business goals, SaaS idea, and technical requirements to define a clear product vision and roadmap.",
    icon: Lightbulb,
  },
  {
    title: "Planning",
    desc:
      "Our team breaks down the SaaS product into achievable milestones, defines architecture, timelines, and allocates dedicated resources.",
    icon: ClipboardList,
  },
  {
    title: "Design",
    desc:
      "We design intuitive user interfaces and scalable system designs that clearly visualize the SaaS platform before development begins.",
    icon: PenTool,
  },
  {
    title: "Develop",
    desc:
      "Once the design and architecture are finalized, our engineers develop the SaaS product following best coding and cloud practices.",
    icon: Code2,
  },
  {
    title: "Test",
    desc:
      "We perform rigorous testing to ensure security, performance, scalability, and reliability across real-world scenarios.",
    icon: Bug,
  },
  {
    title: "Deploy",
    desc:
      "After successful testing, the SaaS platform is deployed and scaled with continuous monitoring and performance optimization.",
    icon: Rocket,
  },
];

const WorkingProcess = () => {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP LABEL */}
        <p className="text-center text-xs sm:text-sm uppercase tracking-wider text-blue-600 font-semibold">
          Our success in SaaS product engineering hinges on our robust execution
        </p>

        {/* HEADING */}
        <h2 className="mt-4 text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">
          Our Working Process
        </h2>

        {/* GRID – EXACT 3 × 2 */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="
                  text-center
                  group
                  transition-all duration-500
                  hover:-translate-y-2
                "
              >
                {/* ICON */}
                <div
                  className="
                    mx-auto mb-6
                    flex h-16 w-16 items-center justify-center
                    rounded-full
                    bg-blue-50
                    text-blue-600
                    transition-all duration-500

                    group-hover:bg-blue-600
                    group-hover:text-white
                    group-hover:scale-110

                    active:bg-blue-700
                    active:text-white
                  "
                >
                  <Icon size={28} strokeWidth={2.2} />
                </div>

                {/* TITLE */}
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-24 flex justify-center px-4">
          <button
            className="
              w-full sm:w-auto
              px-8 sm:px-12
              py-4
              rounded-md
              border-2 border-slate-900
              text-slate-900
              font-semibold
              transition-all duration-300

              hover:bg-slate-900 hover:text-white
              hover:scale-[1.03]

              active:scale-[0.97]
            "
          >
            Click here to know more about our SaaS Working Process
          </button>
        </div>

      </div>
    </section>
  );
};

export default WorkingProcess;
