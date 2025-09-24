import Layout from "../app/components/Layout";

import PricingServices from "@/app/components/PricingServices";
import FAQ from "@/app/components/FAQ";
import ContactCTA from "@/app/components/ContactCTA";
import RecommendedBrokers from "@/app/components/RecommendedBrokers";
import Hero from "@/app/components/Hero";
import OurServices from "@/app/components/services/OurServices";
import AboutSection from "@/app/components/AboutSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";

export default function Home() {
  return (
    <Layout>
      <Hero />

      <AboutSection />

      <OurServices />

      <PricingServices />

      <RecommendedBrokers />

      <TestimonialsSection />

      <FAQ />

      <ContactCTA />
    </Layout>
  );
}
