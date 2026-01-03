import React from "react";
import { useNavigate } from "react-router-dom";
const WebHero = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-[#f8fafc]">
      <div
        className="
          max-w-6xl mx-auto
          px-6 sm:px-8 lg:px-10
          py-24 sm:py-28 md:py-32
          text-center
        "
      >
        {/* Heading */}
        <h1
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-extrabold
            text-slate-900
            leading-tight
          "
        >
          AI & Machine Learning
          <br />
          <span className="text-blue-600">Solutions Company</span>
        </h1>

        {/* Description */}
        <p
          className="
            mt-8
            max-w-4xl mx-auto
            text-base sm:text-lg
            text-slate-700
            leading-relaxed
          "
        >
          Looking to leverage Artificial Intelligence and Machine Learning to
          automate processes, gain insights, and drive smarter decisions?
          <span className="font-semibold text-slate-900">
            {" "}Aryahs World Infotech
          </span>{" "}
          delivers cutting-edge AI & ML solutions including Generative AI,
          Computer Vision, NLP chatbots, recommendation systems, and predictive
          analytics for startups, enterprises, and SaaS platforms.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex justify-center gap-6">
          <button
          onClick={() => navigate("/saas-product-engineering")}
            className="
              px-8 py-3.5
              rounded-md
              bg-blue-600
              text-white
              font-medium
              hover:bg-blue-700
              transition
            "
          >
            Get Started
          </button>

          <button
            className="
              px-8 py-3.5
              rounded-md
              border border-blue-600
              text-blue-600
              font-medium
              hover:bg-blue-50
              transition
            "
          >
            View AI Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default WebHero;
