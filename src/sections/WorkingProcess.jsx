import React from "react";
import {
  Lightbulb,
  ClipboardList,
  PenTool,
  Code2,
  Bug,
  Rocket
} from "lucide-react";

const steps = [
  {
    title: "AI Ideation",
    desc:
      "We begin by understanding business challenges, identifying AI opportunities, and defining clear problem statements where AI and Machine Learning can deliver measurable value.",
    icon: Lightbulb,
  },
  {
    title: "Data & Strategy Planning",
    desc:
      "Our team evaluates data sources, data quality, and feasibility while defining the AI strategy, model approach, timelines, and success metrics.",
    icon: ClipboardList,
  },
  {
    title: "Model Design",
    desc:
      "We design AI architectures, select appropriate algorithms, and create prototypes or proof-of-concepts to validate the solution before full-scale implementation.",
    icon: PenTool,
  },
  {
    title: "Model Development",
    desc:
      "Using modern AI frameworks and cloud platforms, we train, fine-tune, and optimize machine learning models to ensure accuracy, scalability, and performance.",
    icon: Code2,
  },
  {
    title: "Testing & Validation",
    desc:
      "We rigorously test AI models for accuracy, bias, robustness, and real-world performance using automated and manual validation techniques.",
    icon: Bug,
  },
  {
    title: "Deployment & Monitoring",
    desc:
      "After successful testing, AI models are deployed into production environments with continuous monitoring, performance tracking, and optimization.",
    icon: Rocket,
  },
];

const WorkingProcess = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">

        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">
          Our AI & Machine Learning Working Process
        </h2>

        {/* Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="
                  text-center
                  group
                  transform
                  transition-all duration-500
                  hover:-translate-y-2
                "
              >
                {/* Icon */}
                <div
                  className="
                    mx-auto mb-6
                    flex h-16 w-16 items-center justify-center
                    rounded-full
                    bg-blue-50
                    text-blue-600
                    group-hover:bg-blue-600
                    group-hover:text-white
                    transition-all duration-300
                  "
                >
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold uppercase tracking-wide text-blue-600">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
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
              hover:scale-105
            "
          >
            Explore our AI & ML Development Process
          </button>
        </div>

      </div>
    </section>
  );
};

export default WorkingProcess;
