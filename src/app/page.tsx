import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Gallery from "@/components/Gallery";
import VideoSection from "@/components/VideoSection";
import InfoSection from "@/components/InfoSection";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <Features />
        <HowItWorks />
        <Benefits />
        <Gallery />
        <VideoSection />
        <InfoSection />
        <Testimonials />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
