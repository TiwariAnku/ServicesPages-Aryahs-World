import React from "react";
import { Users, Briefcase, Scale, Building2 } from "lucide-react";

const stats = [
  {
    title: "12+ Years Of Experience In SaaS Product Engineering",
    desc: (
      <>
        <span className="font-semibold text-slate-900">
          Develop SaaS Products
        </span>{" "}
        with a team of highly skilled and efficient SaaS engineers with over
        12+ years of industry experience.
      </>
    ),
    icon: Briefcase,
  },
  {
    title: "60+ SaaS Product Engineers",
    desc:
      "Our team of top-notch and dynamic SaaS engineers consistently help clients turn their SaaS product vision into reality.",
    icon: Users,
  },
  {
    title: "120+ Successful SaaS Projects",
    desc:
      "We have delivered over 120+ SaaS platforms and gained a deep understanding of diverse business and client requirements.",
    icon: Scale,
  },
  {
    title: "SaaS Solutions For 50+ Industries",
    desc:
      "We have successfully provided SaaS product engineering services across 50+ industries with unique ideas and visions.",
    icon: Building2,
  },
];

const ExperienceSection = () => {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID – EXACT LIKE REFERENCE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24">

          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="
                  flex items-start justify-between gap-10
                  group
                  transition-all duration-500
                  hover:-translate-y-1
                "
              >
                {/* TEXT */}
                <div className="max-w-md">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* ICON */}
                <div
                  className="
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
                  <Icon size={30} strokeWidth={2.2} />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA – SAME POSITION AS REFERENCE */}
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
            Click here to avail the Best SaaS Product Engineering Services
          </button>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
