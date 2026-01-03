import React from "react";
import { motion } from "framer-motion";

const WebHero = () => {
  return (
    <section className="bg-[#f8fafc] py-24 sm:py-28 md:py-32">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-extrabold
            text-slate-900
            leading-tight
          "
        >
          EdTech & CareerTech
          <br className="hidden sm:block" />
          <span className="text-blue-600"> Solutions Company</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="
            mt-8
            text-base sm:text-lg md:text-xl
            text-slate-700
            max-w-4xl
            mx-auto
            leading-relaxed
            font-medium
          "
        >
          Looking for a modern EdTech & CareerTech solutions company to build
          intelligent learning platforms and career guidance systems?
          <span className="font-semibold text-slate-900">
            {" "}Aryahs World Infotech
          </span>{" "}
          delivers scalable, secure, and future-ready education and career
          platforms powered by technology and data.
        </motion.p>

      </div>
    </section>
  );
};

export default WebHero;
