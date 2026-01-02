import React from "react";

// sections
import WebHero from "@/sections/WebHero";
import ExperienceSection from "@/sections/ExperienceSection";
import Design from "@/sections/Design";
import Development from "@/sections/Development";
import WorkingProcess from "@/sections/WorkingProcess";
import PricingModels from "@/sections/PricingModels";
import SuccessApproach from "@/sections/SuccessApproach";
import ProjectInquirySection from "@/sections/ProjectInquirySection";
import NewsletterSection from "@/sections/NewsletterSection";
import CTASection from "@/sections/CTASection";
import FAQ from "@/sections/FAQ";

const AIML = () => {
  return (
    <>
       <WebHero/>
      <ExperienceSection/>
      <Design/>
      <Development/>
      <WorkingProcess/>
      <PricingModels/>
      <SuccessApproach/>
      <FAQ/>
      <ProjectInquirySection/>
      <NewsletterSection/>
      <CTASection/>
    </>
  );
};

export default AIML;
