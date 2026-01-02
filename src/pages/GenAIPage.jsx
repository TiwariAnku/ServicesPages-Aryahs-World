import React from "react";

// sections
import WebHero from "@/sections1/WebHero";
import ExperienceSection from "@/sections1/ExperienceSection";
import Design from "@/sections1/Design";
import Development from "@/sections1/Development";
import WorkingProcess from "@/sections1/WorkingProcess";
import PricingModels from "@/sections1/PricingModels";
import SuccessApproach from "@/sections1/SuccessApproach";
import ProjectInquirySection from "@/sections1/ProjectInquirySection";
import NewsletterSection from "@/sections1/NewsletterSection";
import CTASection from "@/sections1/CTASection";
import FAQ from "@/sections1/FAQ";

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
