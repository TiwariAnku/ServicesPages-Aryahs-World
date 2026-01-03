import React from "react";

// sections
import WebHero from "@/sections3/WebHero";
import ExperienceSection from "@/sections3/ExperienceSection";
import Design from "@/sections3/Design";
import Development from "@/sections3/Development";
import WorkingProcess from "@/sections3/WorkingProcess";
import PricingModels from "@/sections3/PricingModels";
import SuccessApproach from "@/sections3/SuccessApproach";
import ProjectInquirySection from "@/sections3/ProjectInquirySection";
import NewsletterSection from "@/sections3/NewsletterSection";
import CTASection from "@/sections3/CTASection";
import FAQ from "@/sections3/FAQ";

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
