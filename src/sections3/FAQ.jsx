import React from "react";

const FAQ = () => {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-600 mb-16">
          EdTech & CareerTech FAQs
        </h2>

        {/* FAQ LIST */}
        <div className="max-w-4xl mx-auto space-y-5">
          {faqData.map((item, index) => (
            <details
              key={index}
              className="
                group
                border border-blue-200
                rounded-xl
                p-5 sm:p-6
                transition-all duration-300
                hover:border-blue-400
              "
            >
              <summary
                className="
                  flex justify-between items-center
                  cursor-pointer
                  font-semibold
                  text-slate-900
                  text-base sm:text-lg
                  list-none
                "
              >
                {item.q}
                <span
                  className="
                    ml-4
                    text-blue-600
                    transition-transform duration-300
                    group-open:rotate-180
                  "
                >
                  ▼
                </span>
              </summary>

              <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                {item.a}
              </p>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
};

const faqData = [
  {
    q: "What are EdTech & CareerTech solutions?",
    a: "EdTech and CareerTech solutions are digital platforms designed to support online learning, skill development, assessments, and career guidance using modern technology.",
  },
  {
    q: "Do you develop AI-powered career guidance platforms?",
    a: "Yes, we build AI-driven career guidance platforms that help students and professionals make informed career decisions based on skills, interests, and market trends.",
  },
  {
    q: "Can you build custom LMS and online learning platforms?",
    a: "Absolutely. We develop scalable and customizable LMS platforms with features like course management, assessments, progress tracking, and analytics.",
  },
  {
    q: "What is the typical timeline for EdTech platform development?",
    a: "The development timeline usually ranges from 6–12 weeks depending on platform features, integrations, and overall complexity.",
  },
];

export default FAQ;
