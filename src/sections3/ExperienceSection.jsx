import React from "react";
import { motion } from "framer-motion";
import { Users, Briefcase, Scale, Building2 } from "lucide-react";

const stats = [
  {
    title: "8+ Years Of Experience In EdTech & CareerTech",
    desc: (
      <>
        <span className="font-semibold text-slate-900">
          Build EdTech Platforms
        </span>{" "}
        with a team of experienced engineers delivering scalable learning,
        assessment, and career guidance solutions for students and institutions.
      </>
    ),
    icon: Briefcase,
  },
  {
    title: "40+ EdTech & CareerTech Specialists",
    desc:
      "Our expert team of developers, designers, and domain specialists helps transform learning and career ideas into impactful digital platforms.",
    icon: Users,
  },
  {
    title: "150+ Successful EdTech Projects",
    desc:
      "We have delivered 150+ EdTech and CareerTech platforms including LMS, career guidance systems, and student engagement portals.",
    icon: Scale,
  },
  {
    title: "EdTech Solutions For 30+ Education Domains",
    desc:
      "We provide EdTech and CareerTech solutions across K-12, higher education, test prep, skill development, and professional training sectors.",
    icon: Building2,
  },
];

const ExperienceSection = () => {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID – SAME AS REFERENCE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24">

          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex items-start justify-between gap-10 group"
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
              </motion.div>
            );
          })}
        </div>

        {/* CTA – SAME POSITION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 flex justify-center px-4"
        >
          <button
            className="
              w-full sm:w-auto
              px-8 sm:px-12
              py-4
              rounded-md
              border-2 border-blue-600
              text-blue-600
              font-semibold
              transition-all duration-300
              hover:bg-blue-600 hover:text-white
              hover:scale-[1.03]
              active:scale-[0.97]
            "
          >
            Click here to avail the Best EdTech & CareerTech Solutions
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default ExperienceSection;
