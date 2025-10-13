import Layout from "../app/components/layout/Layout";

import PricingServices from "@/app/components/services/PricingServices";
import FAQ from "@/app/components/FAQ";
import ContactCTA from "@/app/components/ContactCTA";
import RecommendedBrokers from "@/app/components/brokers/RecommendedBrokers";
import Hero from "@/app/components/Hero";
import OurServices from "@/app/components/services/OurServices";
import AboutSection from "@/app/components/AboutSection";
import TestimonialsSection from "@/app/components/testimonials/TestimonialsSection";
import RootLayout from "@/app/layout";
export default function Home() {
  return (
    <RootLayout>
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
    </RootLayout>
  );
}
