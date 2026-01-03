import React from "react";

// sections
import WebHero from "@/sections2/WebHero";
import ExperienceSection from "@/sections2/ExperienceSection";
import Design from "@/sections2/Design";
import Development from "@/sections2/Development";
import WorkingProcess from "@/sections2/WorkingProcess";
import PricingModels from "@/sections2/PricingModels";
import SuccessApproach from "@/sections2/SuccessApproach";
import ProjectInquirySection from "@/sections2/ProjectInquirySection";
import NewsletterSection from "@/sections2/NewsletterSection";
import CTASection from "@/sections2/CTASection";
import FAQ from "@/sections2/FAQ";

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
